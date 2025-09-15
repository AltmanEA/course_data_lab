/* 
	Найдите книгу с ID=2 и верните её название.
	Пример XML в файле saxXML.ts
*/

import { SAXParser, type QualifiedAttribute } from "sax";


export function findBookById(xml: string, targetId: string): string | null {
  const parser = new SAXParser(true);
  let currentId:string | QualifiedAttribute = '';
  let currentTitle = '';
  let foundBook = false;
  let isTitleTag = false;
  
// TODO: Реализуйте логику поиска книги по ID и извлечения её названия
  
  parser.write(xml).close();
  return foundBook ? currentTitle.trim() : null;
}