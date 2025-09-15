/* 	
  Найти все элементы с текстом "Submit".
*/

import { select } from "xpath";

export function findElementsWithExactText(doc: Document): Node[] {
  const query = ""; // Тут нужно написать XPath запрос
  return select(query, doc) as Node[];
}
