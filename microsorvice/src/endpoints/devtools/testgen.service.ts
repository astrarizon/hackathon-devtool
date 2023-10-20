import JSZip from "jszip";
import { ChatGptService } from "src/common/chat-gpt/chat.gpt.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PulsarTestGenService {
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

    async generateInitial(file: Express.Multer.File): Promise<string> {
        const srcCode = await this.extractAndConcatenate(file);
        const prompt = `Please write 25 test cases for the following smart contract: ${srcCode}. Try to check intended behavior, edge cases, and possible misuse scenarios. Be as creative as possible in your test cases. Each test case should be regarded as independent from the others, should always start by calling the init() endpoint and should be composed of a sequence of calls to the smart contract's endpoints. Please use the JSON format for the test cases, as follows {"test nr 1": {"description" : "", "steps": ["", "", ...], "expected behavior": ""},...}`;

        const response = await this.gptService.createPromptWithoutHistory(prompt);
        if (!response) {
            throw new Error('Could not generate tests for the smart contract');
        }
        
        return JSON.stringify([{ role: 'user', content: prompt }, { role: 'assistant', content: response }]);
    }

    async generateMore(chatHistory: { role: string, content: string }[]) : Promise<string> {
        const prompt = `Please write 25 more additional test cases, continuing the ones you have seen above.`;
        const response = await this.gptService.createPrompt(prompt, JSON.stringify(chatHistory)) ;
        if (!response) {
            throw new Error('Could not generate tests for the smart contract');
        }
        
        return JSON.stringify([...chatHistory, { role: 'user', content: prompt }, { role: 'assistant', content: response }]);
    }

  }

