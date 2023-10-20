import { Module } from '@nestjs/common';
import { ChatGptService } from './chat.gpt.service';
import { ApiModuleOptions, ApiService } from '@multiversx/sdk-nestjs';

@Module({
  imports: [ApiModuleOptions],
  providers: [ChatGptService, ApiService],
  exports: [ChatGptService, ApiService],
})
export class ChatGptModule {}
