import type { Db } from "mongodb"

export class Customer {
	_id: string
	name: string
	email: string
	constructor(_id: string, name: string, email: string) {
		this._id = _id
		this.name = name
		this.email = email
	}
}

export class Purchase {
	customerId: string
	amount: number
	date: Date
	constructor(customerId: string, amount: number, date: Date) {
		this.customerId = customerId
		this.amount = amount
		this.date = date
	}
}

export interface RepeatCustomerStats {
	_id: string
	customerName: string
	purchaseCount: number
	totalSpent: number
	isRepeatCustomer: boolean
}

export async function get_repeat_customers(db: Db): Promise<RepeatCustomerStats[]> {
	// Создайте функцию для анализа клиентской базы с целью выявления повторных покупателей. Функция должна возвращать статистику по каждому клиенту, включая информацию о том, является ли клиент повторным (совершил более одной покупки). Результаты должны быть отсортированы по убыванию общей суммы потраченных средств.
	return await db.collection("purchases").aggregate([

	]).toArray() as RepeatCustomerStats[]
}