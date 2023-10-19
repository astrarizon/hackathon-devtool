import { Module } from "@nestjs/common";
import { DynamicModuleUtils } from "src/utils/dynamic.module.utils";
import { EndpointsServicesModule } from "./endpoints.services.module";
import { ApiConfigModule } from "src/common/api-config/api.config.module";
import {  DevToolsModule } from "./devtools/devtools.module";
import { ApiModule } from "@multiversx/sdk-nestjs-http";

@Module({
  imports: [
    EndpointsServicesModule, ApiConfigModule, DevToolsModule, ApiModule, DevToolsModule
  ],
  providers: [
    DynamicModuleUtils.getNestJsApiConfigService()
  ],
  controllers: [
  ],
})
export class EndpointsControllersModule { }
