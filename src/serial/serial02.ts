/* 
	Модифицируйте класс Team, чтобы массив members корректно восстанавливался как массив объектов User.
*/

import { User } from "./user";

export class Team {
  name: string;
  members: User[]; // Требует декоратора
  
  constructor(name: string, members: User[]) {
	this.name = name;
	this.members = members;
  }
  
  listMembers() { return this.members.map(m => m.getFullName()).join(', '); }
}
