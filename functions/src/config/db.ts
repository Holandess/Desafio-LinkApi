import mongoose from "mongoose";

const { DB_USER, DB_PASS, DB_HOST, DB_NAME, DB_PORT } = process.env


mongoose.connect(
  `mongodb+sr://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`,
  {
    useNewUrlParser: true,
  }
)

mongoose.connection.on('error', () => console.error('connection error:'))
mongoose.connection.once('open', () => console.log('database connected'))