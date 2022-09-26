import app from './app'
// import chalk from 'chalk'
import { ENVIORNMENT, PORT } from './config/app'
import connectDB from './config/db'

const server = async () => {
    await connectDB()
    app.listen(PORT, () => {
        console.log((`Server is running on ${PORT} in ${ENVIORNMENT} mode.`))
    })

}

server()