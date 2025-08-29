import fs from "node:fs";
import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const config_file = "./utils/test_config.json";
const config_json = fs.readFileSync(config_file, "utf8");
const config = JSON.parse(config_json);

const info = "Ваши задачи: \n" + config.tasks.join("\n");

let time = config.time;
let timer = setInterval(() => {
  console.clear();
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  console.log(info + "\n\nВремя:\n");
  console.log("Осталось " + minutes + " мин. " + seconds + " сек.");
  time--;
  if(time <=0) {
    clearInterval(timer);
    finish();
  }
}, 1000);

rl.question("", () => {
    console.log("Пока!");
    process.exit(0);
})

function finish() {  
  console.clear();
  console.log(info + "\n\nВремя вышло!");
}