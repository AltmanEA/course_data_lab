import type { Db } from "mongodb"

export class Order {
    product: string
    quantity: number
    status: string
    constructor(product: string, quantity: number, status: string) {
        this.product = product
        this.quantity = quantity
        this.status = status
    }
}

export async function update_order_status(db: Db, oldStatus: string, newStatus: string) {
    // TODO: Обновить статус всех заказов с oldStatus на newStatus
	 db.collection("orders")
}


