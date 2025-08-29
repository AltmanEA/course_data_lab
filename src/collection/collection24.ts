/* 
	Создайте функцию findMaxWithCondition, которая находит объект с максимальным значением свойства, но только среди элементов, удовлетворяющих условию фильтра, в противном случае возвращает null.
*/

export function findMaxWithCondition<T>(
	array: T[], 
	propertyName: keyof T,
	condition: (item: T) => boolean): T | null {

}


