import { Injectable } from "@nestjs/common";
import JSZip from "jszip";
import { ChatGptService } from "src/common/chat-gpt/chat.gpt.service";

@Injectable()
export class PulsarInspectorService {
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

    async inspect(file: Express.Multer.File): Promise<string> {
        const srcCode = await this.extractAndConcatenate(file);
        const prompt = `Please analyze the code of the smart contract provided and create a list of vulnerabilities in a JSON format, as follows {"vulnerabilities": [{"line_numbers": [], "description": "", "misuse_scenario": "", "solution": "",
              "possible_code_implementation": ""}, ...]}. This is the source code of the Smart Contract: ${srcCode}`;
        const response = await this.gptService.createPrompt(prompt, "[]");
        if (!response) {
            throw new Error('Could not generate tests for the smart contract');
        }
        
        return JSON.stringify([{ role: 'user', content: prompt }, { role: 'assistant', content: response }]);
    
    }

  }

