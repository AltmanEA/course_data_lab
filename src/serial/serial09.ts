/* 
	Исправьте структуру "дерево" с рекурсивными ссылками для корректной десериализации
*/


export class TreeNode {
  value: string;
  
  children: TreeNode[];

  constructor(value: string) {
	this.value = value;
	this.children = [];
  }
  
  getChildCount() { return this.children.length; }
}
