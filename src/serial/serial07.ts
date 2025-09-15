/* 
	Добавьте все необходимые декораторы для корректного восстановления сложной структуры.
*/

import { User } from "./user";

export class Course {
  title: string;
  instructor: User; // Требует декоратора
  students: User[]; // Требует декоратора
  schedule: Date; // Требует декоратора

  constructor(title: string, instructor: User, students: User[], schedule: Date) {
	this.title = title;
	this.instructor = instructor; 
	this.students = students; 
	this.schedule = schedule; 
  }
}