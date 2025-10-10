import type { Db } from "mongodb"

export class Transaction {
    type: string
    amount: number
    category: string
    date: Date
    constructor(type: string, amount: number, category: string, date: Date) {
        this.type = type
        this.amount = amount
        this.category = category
        this.date = date
    }
}

export interface TransactionAnalytics {
    totals: Array<{
        _id: string
        totalAmount: number
    }>
    byCategory: Array<{
        _id: string
        totalAmount: number
    }>
    byType: Array<{
        _id: string
        count: number
    }>
}

export async function get_transaction_analytics(db: Db): Promise<TransactionAnalytics> {
    // TODO: Получить аналитику транзакций в разных разрезах:
    // - totals: общая сумма доходов и расходов
    // - byCategory: сумма по категориям
    // - byType: количество транзакций по типам
	// Используя $facet
	const result = await db.collection("transactions").aggregate([
        
    ]).toArray()

    return result[0] as TransactionAnalytics
}

