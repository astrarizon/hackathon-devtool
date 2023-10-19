import { BadRequestException, Body, CallHandler, Controller, ExecutionContext, Injectable, NestInterceptor, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiResponse, ApiTags, ApiConsumes, ApiBody } from '@nestjs/swagger';
import { PulsarTestGenService } from './testgen.service';
import { Observable } from 'rxjs';
import { ZipDto } from './dto/zip.dto';
import { ChatHistoryDTO } from './dto/generate.dto';


@Injectable()
export class ParseChatHistoryInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    if (request.body.chatHistory) {
      try {
        request.body.chatHistory = JSON.parse(request.body.chatHistory);
        console.log('request.body.chatHistory', request.body.chatHistory);
      } catch (e) {
        throw new BadRequestException('Invalid JSON format in invoice field');
      }
    }
    return next.handle();
  }
}



@Controller()
@ApiTags('Pulsar TestGen')
export class PulsarTestGenController {
    constructor(private readonly pulsarTestGenService: PulsarTestGenService) {}

    @Post("/generateInitial")
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        description: 'ZIP file of the smart contract source code for which the tests should be generated.',
        type: ZipDto,
    })
    @UseInterceptors(FileInterceptor('file'))
    @ApiResponse({
        status: 200,
        description: 'Generates 10 test cases for smart contract.',
    })
    async generate(
        @UploadedFile() file: Express.Multer.File,
        ): Promise<string> 
    {
        return await this.pulsarTestGenService.generateInitial(file);
    }

    @Post("/generateMore")   
    @ApiResponse({
        status: 200,
        description: 'Generates 10 test cases for smart contract.',
    })
    async generateMore(@Body() chatHistory: ChatHistoryDTO): Promise<string> {
        return await this.pulsarTestGenService.generateMore(chatHistory.chatHistory);
    }

}
