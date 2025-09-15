/* 
	Настройте класс Project с помощью декораторов для работы с разными типами вложенных данных.
*/

import  { User } from "./user";

export class Project {
  name: string;
  lead: User; // Требует декоратора
  developers: User[]; // Требует декоратора
  constructor(name: string, lead: User, developers: User[]) {
	this.name = name;
	this.lead = lead; 
	this.developers = developers;
  }
}
