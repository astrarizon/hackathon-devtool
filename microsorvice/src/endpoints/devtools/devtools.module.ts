import { Module } from '@nestjs/common';
import { CodevService } from './codev.service';
import { ApiConfigModule } from 'src/common/api-config/api.config.module';
import { DynamicModuleUtils } from 'src/utils/dynamic.module.utils';
import { ChatGptService } from 'src/common/chat-gpt/chat.gpt.service';
import { ApiModule } from '@multiversx/sdk-nestjs-http';
import { PulsarInspectorService } from './pulsarInspector.service';
import { CoDevController } from './codev.controller';
import { PulsarInspectorController } from './pulsarInspector.controller';
import { PulsarTestGenService } from './testgen.service';
import { PulsarTestGenController } from './testgen.controller';

@Module({
  imports: [ApiModule,ApiConfigModule, DynamicModuleUtils.getApiModule()],
  providers: [CodevService, ChatGptService, PulsarInspectorService, PulsarTestGenService],
  exports: [CodevService, PulsarInspectorService, PulsarTestGenService],
  controllers: [CoDevController, PulsarInspectorController, PulsarTestGenController],
})
export class DevToolsModule {}
