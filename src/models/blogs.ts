import { model, ObjectId, Schema } from "mongoose";

export interface IBlogs {
    _id: ObjectId,
    title: string,
    description: string,
    createdBy: string,
   
}

const blogSchema: Schema<IBlogs> = new Schema({
    title: String,
    description: String,
    createdBy: String,

}, { timestamps: true })

export const blogs = model<IBlogs>('Blogs', blogSchema)