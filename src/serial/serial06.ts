/* 
	Настройте класс так, чтобы опциональное поле manager восстанавливалось как User или оставалось null.
*/

import { User } from "./user";

export class Employee {
  name: string;
  manager: User | null; // Требует декоратора для типа

  constructor(name: string, manager: User | null) {
	this.name = name;
	this.manager = manager;
  }
}
