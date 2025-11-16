import { describe, expect, it } from "vitest";
import { find_grades_in_range } from "./prisma04";
import { prisma, run } from "./prisma_init";

describe('find grades in range test', () => {
    it('should find grades within specified range', async () => {
        await run(async () => {
            await prisma.grade.deleteMany()
            await prisma.student.deleteMany()
            await prisma.course.deleteMany()
            await prisma.person.deleteMany()

            // Создаем людей и студентов
            await prisma.person.createMany({
                data: [
                    { email: 'student1@test.com', name: 'Студент 1' },
                    { email: 'student2@test.com', name: 'Студент 2' }
                ]
            })

            const people = await prisma.person.findMany()
            await prisma.student.createMany({
                data: people.map(person => ({ personId: person.id }))
            })

            // Создаем курсы
            const courses = await prisma.course.createMany({
                data: [
                    { title: 'Математика', description: 'Тест 1' },
                    { title: 'Физика', description: 'Тест 2' }
                ]
            })

            const students = await prisma.student.findMany()
            const allCourses = await prisma.course.findMany()

            // Создаем оценки (уникальные комбинации studentId + courseId)
            await prisma.grade.createMany({
                data: [
                    { grade: 3, studentId: students[0].id, courseId: allCourses[0].id },
                    { grade: 4, studentId: students[0].id, courseId: allCourses[1].id },
                    { grade: 5, studentId: students[1].id, courseId: allCourses[0].id },
                    { grade: 2, studentId: students[1].id, courseId: allCourses[1].id }
                ]
            })

            const result = await find_grades_in_range(3, 4)

            expect(result).toHaveLength(2)
            
            const grades = result.map(g => g.grade)
            expect(grades).toContain(3)
            expect(grades).toContain(4)
            expect(grades).not.toContain(5)
            expect(grades).not.toContain(2)

            // Проверяем, что включена информация о студенте и курсе
            expect(result[0].student).toBeDefined()
            expect(result[0].course).toBeDefined()
        })
    })
})