/* 	
	Добавьте необходимые декораторы в класс Department, чтобы вложенные сотрудники восстанавливались правильно.
*/

import { User } from "./user";

export class Department {
  name: string;
  employees: User[]; // Требует декоратора
  constructor(name: string, employees: User[]) {
    this.name = name;
    this.employees = employees;
  }
}

export class Company {
  name: string;
  departments: Department[]; // Требует декоратора
  constructor(name: string, departments: Department[]) {
    this.name = name;
    this.departments = departments;
  }
}
