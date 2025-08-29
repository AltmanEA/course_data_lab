/* 
	Создайте функцию groupBy, которая принимает массив объектов и ключ, возвращает Map, где ключи - значения этого свойства, а значения - массивы объектов с таким значением свойства.
*/

export function groupBy<T extends Record<string, any>>(arr: T[], key: keyof T): Map<T[keyof T], T[]> {

}
