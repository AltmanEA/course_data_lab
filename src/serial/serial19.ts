/* 
	Найти все кнопки (<button>) с классом primary.
*/

import { select } from 'xpath';

export function findPrimaryButtons(doc: Document): Node[] {
  const query = ""; // Тут нужно написать XPath запрос
  return select(query, doc) as Node[];
}
