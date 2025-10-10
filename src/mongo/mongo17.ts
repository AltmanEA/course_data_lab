import type { Db } from "mongodb"

export class Product {
    name: string
    price: number
    sales: number
    constructor(name: string, price: number, sales: number) {
        this.name = name
        this.price = price
        this.sales = sales
    }
}

export interface TopProduct {
    name: string
    sales: number
    price: number
}

export async function get_top_selling_products(db: Db, limit: number): Promise<TopProduct[]> {
    // TODO: Найти топ-N продуктов по количеству продаж
	return  await db.collection("products").aggregate([

	]).toArray() as TopProduct[]
}

