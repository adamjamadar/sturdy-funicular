import mongoose from "mongoose"

const USERNAME = process.env.MONGO_USERNAME
const DATABASE = process.env.MONGO_DATABASE
const HOST = process.env.MONGO_HOST

const URI = `mongodb://${USERNAME}:${HOST}/${DATABASE}`

const connectDB = async () => {
    try {
        await mongoose.connect(URI)
        console.log(`Database succcesfully connected on ${URI}`)
        return mongoose
    } catch (err) {
        console.log(`ERROR: ${err}`)
        process.exit(1)
    }

}

export default connectDB