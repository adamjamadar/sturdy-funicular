import cookieParser from "cookie-parser"
import express, { Application } from "express"
import morgan from "morgan"
import { errorHandler, NotFound } from "./middlewares/errorHandler"

import appRouter from "./routes/index"

const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser())
app.use(morgan('dev'))

app.use(appRouter)

app.use(NotFound)
app.use(errorHandler)

export default app