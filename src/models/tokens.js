// import { startDatabase } from 'src/config/database'
import mongoose from 'mongoose'

const tokens = new mongoose.Schema({
  refreshToken: {
    type: String,
    unique: true,
  }
}, { versionKey: false })

export default mongoose.model('Tokens', tokens)