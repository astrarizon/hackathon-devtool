import { ApiProperty } from "@nestjs/swagger";

export class ZipDto {
    @ApiProperty({ description: 'Smart Contract Source Code', type: 'string', format: 'binary' })
    file?: Express.Multer.File;
  }