import { ApiConfigService } from "../api-config/api.config.service";
import { Injectable, Logger } from "@nestjs/common";
import { GptSettings } from "./entities/gpt.settings";
import axios from 'axios';

@Injectable()
export class ChatGptService {
  private readonly logger = new Logger(ChatGptService.name);

  constructor(
    private readonly apiConfigService: ApiConfigService
  ) { }

  async createPrompt(
    prompt: string, 
    chatHistory: string, 
    settings: GptSettings = new GptSettings()
  ): Promise<string | undefined> {
    const apiKey = this.apiConfigService.getChatGptApiKey();
    let history = [];
    if (chatHistory) {
      history = JSON.parse(chatHistory);
    }

    // Prepare the messages array by combining chatHistory and the new prompt
    const messages = [...history, { role: 'user', content: prompt }];
    console.log({messages});

    const body = {
      messages,
      model: settings.model,
      temperature: 0,
    };

    try {
      const { data } = await axios.post('https://api.openai.com/v1/chat/completions', body, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
      });
      return data?.choices[0]?.message?.content;
    } catch (e) {
      this.logger.error('Chat gpt error:', e);
      return undefined;
    }
  }


async createPromptWithoutHistory(
  prompt: string, 
  settings: GptSettings = new GptSettings()
): Promise<string | undefined> {
  const apiKey = this.apiConfigService.getChatGptApiKey();

  // Prepare the messages array by combining chatHistory and the new prompt
  const message =  { role: "user", content: prompt };

  const body = {
    messages: [message],
    model: settings.model,
    temperature: 0,
  };

  try {
    const { data } = await axios.post('https://api.openai.com/v1/chat/completions', body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    });
    return data?.choices[0]?.message?.content;
  } catch (e) {
    this.logger.error('Chat gpt error:', e);
    return undefined;
  }
}
}
