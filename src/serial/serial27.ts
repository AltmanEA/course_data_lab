/* 	
	Соберите все названия книг в массив.
	Пример XML в файле saxXML.ts
*/

import { SAXParser } from "sax";

export function extractTitles(xml: string): string[] {
  const parser = new SAXParser(true);
  const titles: string[] = [];
  let currentTitle = "";
  let isTitleTag = false;

  // TODO: Добавьте обработчики для:
  // - открытия тега title (установите isTitleTag = true)
  // - текстового содержимого (если isTitleTag, добавьте к currentTitle)
  // - закрытия тега title (добавьте currentTitle в titles и сбросьте значения)


  parser.write(xml).close();
  return titles;
}
