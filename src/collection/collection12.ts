/* 
	Напишите функцию-обертку cache, которая кэширует результаты вызова функции с помощью Map, чтобы избежать повторных вычислений для одинаковых аргументов.
*/

export function cache<T extends (...args: any[]) => any>(fn: T): T {
  const cacheMap = new Map<string, any>();
  return function(this: any, ...args: any[]) {

  } as T;
}
