import fs from "node:fs";import { exec, spawn, spawnSync } from "node:child_process";
import { Config } from "./config";
const config = Config.Instance;
const test_num = Number(process.argv[2] ?? 1);

const test = config.tests[test_num - 1];

console.log("--- Генерирую список задач ---");
let block_tasks: Array<[string, string]> = [];
let tasks: string[] = [];
for (const test_block of test.blocks) {
  const block_config = config.getBlock(test_block.block);
  if (block_config) {
    for (let i = 1; i <= test_block.task; i++) {
      const task_num = Math.floor(Math.random() * block_config.task) + 1;
      const task_suffix = task_num.toString().padStart(2, "0");
      const task = `${block_config.name}${task_suffix}`;
      if (tasks.includes(task)) {
        i--;
      } else {
        block_tasks.push([block_config.name, task]);
        tasks.push(task);
      }
    }
  }
}

console.log("--- Сохраняю конфигурацию тестов ---");
const test_config = {
  time: test.time,
  tasks: tasks,
};
const config_json = JSON.stringify(test_config, null, 2);
const config_file = "./utils/test_config.json";
fs.writeFileSync(config_file, config_json);

console.log("--- Открываю задачи в редакторе ---");
for (const task of block_tasks) {
  const ext = task[0] === "basic" ? "js" : "ts";
  const cmd_open = `code ./src/${task[0]}/${task[1]}.${ext}`;
  exec(cmd_open);
}

console.log("--- Запускаю таймер ---");
spawn("cmd.exe", ["/c", "node", "./utils/count.js"], {
  detached: true,
  shell: true,
});

console.log("--- Запускаю тесты ---");
const test_task = tasks.join(" ");
const cmd = "pnpm test " + test_task;
spawnSync(cmd, { shell: true, stdio: "inherit" });



