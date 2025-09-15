/* 	
	Найти все элементы с атрибутом data-type="user" И классом online.
*/

import { select } from "xpath";

export function findOnlineUsers(doc: Document): Node[] {
  const query = ""; // Тут нужно написать XPath запрос
  return select(query, doc) as Node[];
}
