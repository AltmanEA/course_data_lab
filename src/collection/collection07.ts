/* 
  Напишите функцию countFrequency, которая принимает массив строк и возвращает Map, где ключи - это элементы массива, а значения - количество их вхождений.
*/

export function countFrequency(arr: string[]): Map<string, number> {
  const map = new Map();
  for (const item of arr) {
    if (map.has(item)) {
      map.set(item, map.get(item)! + 1);
    } else {
      map.set(item, 1);
    }
  }
  return map;
}
