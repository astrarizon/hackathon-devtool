import { Injectable } from "@nestjs/common";
import JSZip from "jszip";
import { ChatGptService } from "src/common/chat-gpt/chat.gpt.service";

@Injectable()
export class CodevService {
  constructor(
    private readonly gptService: ChatGptService,
  
  ) {}

    async extractAndConcatenate(file: Express.Multer.File): Promise<string> {
        const zip = new JSZip();
        const data = await zip.loadAsync(file.buffer);
        let result = "";
        await Promise.all(
            Object.values(data.files).map(async (zipFile) => {
                if (!zipFile.dir) {
                    const content = await zipFile.async('string');
                    result += content;
                }
            })
        );
        return result.replace(/(\r\n|\n|\r)/gm, "").replace(/ +(?= )/g,'');
    }

    async summarize(file: Express.Multer.File): Promise<string> {
        const srcCode = await this.extractAndConcatenate(file);
        const prompt = `Summarize the functionality of the following smart contract, developed for the MultiversX blockchain. Describe what is the intended behavior, what would be a typical execution flow. Please be technical, but do not overcomplicate things or be too formal. Write as a Developer trying to explain things to a new-to-the-project, but experienced developer.\n This is the source code of the Smart Contract: ${srcCode}`;
    
        const response = await this.gptService.createPromptWithoutHistory(prompt);
        if (!response) {
            throw new Error('Could not generate tests for the smart contract');
        }
        
        return JSON.stringify([{ role: 'user', content: prompt }, { role: 'assistant', content: response }]);
    }

    async isValidUserPrompt(userPrompt: string): Promise<boolean> {
        userPrompt;
        return true;
    }

    async userPrompt(userPrompt: string, chatHistory: string) : Promise<string> {
        if (!this.isValidUserPrompt(userPrompt)) {
            throw new Error('Invalid user prompt');
        }
        const prompt = `The user has asked you this question: ${userPrompt} \n Please answer the user's question in a clear, concise and technical manner.`;
        const response = await this.gptService.createPrompt(prompt, JSON.stringify(chatHistory));
        if (!response) {
            throw new Error('Could not respond to the user`s follow up question.');
        }
        return JSON.stringify([...chatHistory, { role: 'user', content: prompt }, { role: 'assistant', content: response }]);
    }

  }

