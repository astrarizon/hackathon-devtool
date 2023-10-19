import { ApiProperty } from "@nestjs/swagger";

export class PromptWithChatHistoryDTO {
    @ApiProperty({ description: 'User follow-up question', type: 'string', format: 'string', required: true })
    userFollowUp!: string;

    @ApiProperty({ description: 'Chat History', type: 'string', format: 'string', required: true })
    chatHistory!: string;
  }