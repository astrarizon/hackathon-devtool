import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiResponse, ApiTags, ApiConsumes, ApiBody } from '@nestjs/swagger';
import { Express } from 'express';
import { ZipDto } from './dto/zip.dto';
import { CodevService } from './codev.service';
import { PromptWithChatHistoryDTO } from './dto/promptWithChatHistory.dto';

@Controller()
@ApiTags('CoDev')
export class CoDevController {
    constructor(private readonly codevService: CodevService) {}

    @Post("/summarize")
    @UseInterceptors(FileInterceptor('file'))
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        description: 'ZIP file to summarize',
        type: ZipDto,
    })
    @ApiResponse({
        status: 200,
        description: 'Summarizes the functionality of the smart contract.',
    })
    async summarize(@UploadedFile() contractZip: Express.Multer.File): Promise<string> {
        return await this.codevService.summarize(contractZip);
    }

    @Post("/user_prompt")
    @ApiResponse({
        status: 200,
        description: 'Answers the follow-up question of the user.',
    })
    async userPrompt(@Body() promptWithChatHistory: PromptWithChatHistoryDTO): Promise<string> {
        console.log('promptWithChatHistory', promptWithChatHistory);
        return await this.codevService.userPrompt(promptWithChatHistory.userFollowUp, promptWithChatHistory.chatHistory);
    }
}
