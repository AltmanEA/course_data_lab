/* 
	Реализовать функцию findOrdersByStatus(xmlDoc, status), которая принимает XML-документ xmlDoc и строку status, которая представляет статус заказа. Функция должна возвращать массив заказов с заданным статусом.

	Пример XML:
<orders>
  <order id="1" status="completed">
    <items>
      <item productId="101" quantity="2"/>
      <item productId="102" quantity="1"/>
    </items>
  </order>
  <order id="2" status="pending">
    <items>
      <item productId="103" quantity="3"/>
    </items>
  </order>
</orders>

*/

export interface Order {
  id: string;
  status: string;
  items: OrderItem[];
}

export interface OrderItem {
  productId: string;
  quantity: number;
}

export function findOrdersByStatus(xmlDoc: Document, status: string): Element[] {

}