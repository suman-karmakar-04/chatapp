import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECT),
            console.log("DB connected Succesfully");
    } catch (error) {
        console.log("Error connecting to DB", error.message);
    }
}


export default dbConnect