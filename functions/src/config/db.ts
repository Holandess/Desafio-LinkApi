import mongoose from "mongoose";
import { config } from "firebase-functions"
const { db_user, db_pass, db_name, db_host, db_port } = config().env


mongoose.connect(
  `mongodb+srv://${db_user}:${db_pass}@linkapi.umkaq.gcp.mongodb.net/${db_name}?retryWrites=true&w=majority`,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  },

)


mongoose.connection.on('error', () => console.error('connection error:'))
mongoose.connection.once('open', () => console.log('database connected'))

export default mongoose