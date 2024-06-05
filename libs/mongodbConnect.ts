import mongoose from "mongoose";

const connectMongoDb = async () => {

    try {
        mongoose.connect(process.env.MONGO_STRING!);
        console.log("connected to mongoDb");
    } catch (error) {
        console.log(error)
    }
};

export default connectMongoDb;