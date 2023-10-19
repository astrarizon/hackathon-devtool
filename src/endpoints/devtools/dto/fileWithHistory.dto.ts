import { ApiProperty } from "@nestjs/swagger";

export class FileWithChatHistoryDTO {
    @ApiProperty({ description: 'Smart Contract Source Code', type: 'string', format: 'binary', required: true })
    file!: Express.Multer.File;

    @ApiProperty({ description: 'Chat History', type: 'string', format: 'string', required: false })
    chatHistory?: string;
  }