import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiResponse, ApiTags, ApiConsumes, ApiBody } from '@nestjs/swagger';
import { Express } from 'express';
import { ZipDto } from './dto/zip.dto';
import { PulsarInspectorService } from './pulsarInspector.service';

@Controller()
@ApiTags('Pulsar Inspector')
export class PulsarInspectorController {
    constructor(private readonly pulsarInspectorService: PulsarInspectorService) {}

    @Post("/inspect")
    @UseInterceptors(FileInterceptor('file'))
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        description: 'ZIP file to summarize',
        type: ZipDto,
    })
    @ApiResponse({
        status: 200,
        description: 'Inspects the smart contract from a security point of view.',
    })
    async inspect(@UploadedFile() contractZip: Express.Multer.File): Promise<string> {
        return await this.pulsarInspectorService.inspect(contractZip);
    }
}
