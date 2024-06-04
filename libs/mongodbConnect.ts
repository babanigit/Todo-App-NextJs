
import mongoose from "mongoose";

const DB: string | undefined = process.env.MONGODB_URI!;

const connectDb = async (): Promise<void> => {

    if (!DB) {
        throw new Error("Database connection string is not provided. -b");
    }

    try {
        const connect = await mongoose.connect(DB);
        console.log(
            "💚[database connected]:",
            connect.connection.host,
            connect.connection.name
        );

    } catch (error) {
        console.error("💢Failed to connect to the database");
        console.error(error)
    }

};