/* 	
	Найти только прямые потомки <div> у элемента с id="container".
*/

import { select } from "xpath";

export function findDirectDivChildren(doc: Document): Node[] {
  const query = ""; // Тут нужно написать XPath запрос
  return select(query, doc) as Node[];
}
