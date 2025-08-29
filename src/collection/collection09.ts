/* 
	Напишите функцию findIntersection, которая принимает два массива и возвращает массив их общих элементов, используя Set.
*/

export function findIntersection(arr1: number[], arr2: number[]): number[] {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const intersection = new Set<number>();

  for (const item of set1) {
    if (set2.has(item)) {
      intersection.add(item);
    }
  }

  return [...intersection];
}
