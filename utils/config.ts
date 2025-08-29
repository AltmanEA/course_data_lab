import fs from "node:fs";type Block = {
  name: string;
  task: number;
};
type Tests = {
  time: number;
  blocks: {
    block: string;
    task: number;
  }[];
};

const config_file = "./config.json";

export class Config {
  blocks: Block[];
  tests: Tests[];

  private static _instance: Config;
  private constructor() {
    const config = get_config();
    this.blocks = config.blocks;
    this.tests = config.tests;
  }
  public static get Instance() {    
    return this._instance || (this._instance = new this());
  }

  save() {
    fs.writeFileSync(config_file, JSON.stringify(this, null, 2));
  }

  getBlock(name: string) {
    return this.blocks.find((block) => block.name === name);
  }
}

function get_config(): Config {
  try {
    const config_json = fs.readFileSync(config_file, "utf8");
    return JSON.parse(config_json);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err: unknown) {
    console.log("Config file not found, init project first.");
    process.exit(1);
  }
}
