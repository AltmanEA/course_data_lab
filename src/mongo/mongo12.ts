import type { Db } from "mongodb"

export class BlogPost {
    title: string
    content: string
    tags: string[]
    constructor(title: string, content: string, tags: string[]) {
        this.title = title
        this.content = content
        this.tags = tags
    }
}

export async function find_posts_by_keyword(db: Db, keyword: string): Promise<BlogPost[]> {
    // TODO: Найти посты, в заголовке или содержании которых есть указанное ключевое слово
	return db.collection("posts")
}