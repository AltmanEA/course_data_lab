/* 	
	Добавьте декоратор для преобразования строки в объект Date.
*/

import { User } from "./user";

export class Session {
  user: User; // Требует декоратора
  loginAt: Date; // Требует декоратора Date

  constructor(user: User, loginAt: Date) {
    this.user = user;
    this.loginAt = loginAt;
  }

  getInfo() {
    return `${this.user.getFullName()} at ${this.loginAt.toLocaleDateString()}`;
  }
}
