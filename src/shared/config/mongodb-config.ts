import mongoose from 'mongoose'
import 'dotenv/config'

const connectDB = async() => {
    try{
        const db = await mongoose.connect(process.env.MONGO_URI!)
        console.log(`📡 Data base connected to: ${ db.connection.name }`)
    }catch(err){
        throw new Error(`Error connecting to database 😔 \n${err}`)
    }
}

export default connectDB;