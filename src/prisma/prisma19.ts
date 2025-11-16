import { prisma } from './prisma_init'

export async function find_most_popular_course() {
    // TODO: Найти курс с максимальным количеством уникальных студентов
    // Использовать агрегацию средствами Prisma (groupBy)
    // Вернуть объект курса с дополнительным полем studentCount
}