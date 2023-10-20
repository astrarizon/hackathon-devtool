import { GptModel } from "./gpt.model";

export class GptSettings {
  constructor(init?: Partial<GptSettings>) {
    Object.assign(this, init);
  }

  maxTokens?: number;

  model: GptModel = GptModel.v3_5;
}
