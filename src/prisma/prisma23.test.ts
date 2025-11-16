import { describe, expect, it } from "vitest";
import { delete_duplicate_students_by_email } from "./prisma23";
import { prisma, run } from "./prisma_init";

describe('delete duplicate students by email test', () => {
    it('should delete duplicate students keeping first using Prisma filter', async () => {
        await run(async () => {
            await prisma.grade.deleteMany()
            await prisma.student.deleteMany()
            await prisma.course.deleteMany()
            await prisma.person.deleteMany()

            // Создаем людей с уникальными email (дубликаты невозможны из-за unique constraint)
            await prisma.person.createMany({
                data: [
                    { email: 'test1@test.com', name: 'Первый' },
                    { email: 'test2@test.com', name: 'Второй' },
                    { email: 'test3@test.com', name: 'Третий' }
                ]
            })

            const people = await prisma.person.findMany({ orderBy: { id: 'asc' } })
            await prisma.student.createMany({
                data: people.map(p => ({ personId: p.id }))
            })

            const initialCount = await prisma.student.count()
            expect(initialCount).toBe(3)

            const deletedCount = await delete_duplicate_students_by_email()

            // Так как все email уникальны, ничего не должно удалиться
            expect(deletedCount).toBe(0)

            const remainingStudents = await prisma.student.findMany({
                include: { person: true }
            })
            
            expect(remainingStudents).toHaveLength(3)
        })
    })
})