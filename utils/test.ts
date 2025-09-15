import fs from "node:fs";
import { exec, spawn, spawnSync } from "node:child_process";
import { Config, type Block } from "./config";
const config = Config.Instance;
const test_num = Number(process.argv[2] ?? 1);

const test = config.tests[test_num - 1];

console.log("--- Генерирую список задач ---");
const tasks: string[] = [];
for (const test_block of test.blocks) {
  const block_config = config.getBlock(test_block.block);
  const all_tasks = block_config.flatMap((block: Block) => {
    const t = Array.from({ length: block.task }, (_, i) => (i+1).toString().padStart(2, "0"));
    return t.map(n => block.name + n);
  })
  for (let i = 1; i <= test_block.task; i++) {
    const task_index = Math.floor(Math.random() * all_tasks.length) + 1;
    tasks.push(all_tasks[task_index - 1]);
    all_tasks.splice(task_index - 1, 1);
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
for (const task of tasks) {
  const block = task.slice(0, -2);
  const ext = block === "basic" ? "js" : "ts";
  const cmd_open = `code ./src/${block}/${task}.${ext}`;
  exec(cmd_open);
}

console.log("--- Запускаю таймер ---");
spawn("cmd.exe", ["/c", "node", "./utils/count.js"], {
  detached: true,
  shell: true,
});

console.log("--- Запускаю тесты ---");
const test_task = tasks.join(" ");
const cmd = "npm run test " + test_task;
spawnSync(cmd, { shell: true, stdio: "inherit" });



