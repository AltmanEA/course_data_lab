/* 	
	Напишите XPath, который найдет все элементы <title> внутри переданного XML-документа.
*/

import { select } from 'xpath';

export function findAllTitleElements(doc: Document): Node[] {
  const query = "" 	// Тут нужно написать XPath запрос
  return select(query, doc) as Node[];
}