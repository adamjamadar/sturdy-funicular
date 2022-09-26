import { faker } from '@faker-js/faker'
import { IBlogs } from '../models/blogs'

export const genFakeBlog = (): IBlogs => {

    const authors = ['kundan', 'vinod']

    const randomGen = (arr: Array<any>) => {
        return arr[Math.floor(Math.random() * arr.length)]
    }

    return {
        _id: (faker.database.mongodbObjectId()) as any,
        title: faker.random.alpha(15),
        description: faker.lorem.paragraph(2),
        createdBy: randomGen(authors),
    }
}

export const genMultiFakeBlogs = (count: number) => {
    const list: Array<IBlogs> = []

    Array.from({ length: count }).forEach(() => {
        return list.push(genFakeBlog())
    })

    return list
}