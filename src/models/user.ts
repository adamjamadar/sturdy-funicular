import { model, ObjectId, Schema } from "mongoose";


export interface IUser {
    _id: ObjectId
    email: string,
    password: string,
}

const userSchema: Schema<IUser> = new Schema({
    email: String,
    password: String,

}, { timestamps: true })

export const user = model<IUser>('Users', userSchema)