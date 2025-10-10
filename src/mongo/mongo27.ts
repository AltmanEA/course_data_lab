import type { Db } from "mongodb"

export class Product {
    name: string
    price: number
    category: string
    rating: number
    constructor(name: string, price: number, category: string, rating: number) {
        this.name = name
        this.price = price
        this.category = category
        this.rating = rating
    }
}
export interface PriceBucket {
    _id: number | string // Для boundaries и default
    count: number
    avgPrice: number
    products: string[]
}

export async function get_price_distribution(db: Db): Promise<PriceBucket[]> {
    // TODO: Сгруппировать продукты по ценовым диапазонам:
    // 0-50, 51-200, 201-500, 501-1000, 1001+
	// Использовать $bucket
	return await db.collection("products").aggregate([

	]).toArray() as PriceBucket[]
}