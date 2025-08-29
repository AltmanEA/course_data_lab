import fs from "node:fs";
import { Config } from "./config";
import { exec } from "node:child_process";

const config = Config.Instance;
const last_block = config.blocks[config.blocks.length - 1];

const block_name = process.argv[2] ?? last_block.name;
const fun_name = process.argv[3] ?? "XXX";

const block = config.blocks.find((block) => block.name === block_name);
if (!block) {
  console.log(`Block ${block_name} not found in config file.`);
  process.exit(1);
}

block.task += 1;
const suffix = block.task.toString().padStart(2, "0");
console.log("--- Копирую шаблоны ---");
const ext = block_name === "basic" ? "js" : "ts";
const task = fs.readFileSync("./utils/template", "utf8");
const task_lines = task.split("\n");
task_lines[1] = "\tРеализовать функцию " + fun_name;
fs.writeFileSync(
    `./src/${block_name}/${block_name}${suffix}.${ext}`, 
    task_lines.join("\n")
);
const test = fs.readFileSync("./utils/template.test", "utf8");
const test_lines = test.split("\n");
// test_lines[2] = "\tРеализовать тесты для класса "+ fun_name + " из файла " + block_name + suffix + "." + ext
fs.writeFileSync(
    `./src/${block_name}/${block_name}${suffix}.test.${ext}`, 
    test_lines.join("\n")
);

console.log("--- Обновляю конфиг ---");
config.save();

console.log("--- Открываю файлы ---");
const cmd_open_test =`code ./src/${block_name}/${block_name}${suffix}.test.${ext}`;
exec(cmd_open_test);
const cmd_open =`code ./src/${block_name}/${block_name}${suffix}.${ext}`;
exec(cmd_open);

