import { ApiProperty } from '@nestjs/swagger';
export class ChatHistoryDTO {
    @ApiProperty({ description: 'Chat History', type: 'string', format: 'string' })
    chatHistory!: { role: string, content: string }[];
  }