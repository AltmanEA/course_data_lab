import { describe, expect, it } from "vitest";
import { find_courses_after_date } from "./prisma02";
import { prisma, run } from "./prisma_init";

describe('find courses after date test', () => {
    it('should find courses created after specific date', async () => {
        await run(async () => {
            await prisma.grade.deleteMany()
            await prisma.student.deleteMany()
            await prisma.course.deleteMany()
            await prisma.person.deleteMany()

            await prisma.course.createMany({
                data: [
                    { 
                        title: 'Математика', 
                        description: 'Основы математики',
                        createdAt: new Date('2024-01-15')
                    },
                    { 
                        title: 'Физика', 
                        description: 'Классическая механика',
                        createdAt: new Date('2024-02-20')
                    },
                    { 
                        title: 'История', 
                        description: 'История древнего мира',
                        createdAt: new Date('2023-12-10')
                    }
                ]
            })

            const result = await find_courses_after_date(new Date('2024-01-01'))

            expect(result).toHaveLength(2)
            expect(result[0].title).toBe('Математика')
            expect(result[1].title).toBe('Физика')
            
            result.forEach(course => {
                expect(course.createdAt.getTime()).toBeGreaterThan(new Date('2024-01-01').getTime())
            })
        })
    })
})