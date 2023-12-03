import mongoose from "mongoose";
const connection = {};

export const connectToDB = async () => {
    try {

        const db = await mongoose.connect(process.env.MONGO);
        connection.isConnected = db.connections[0].readyState;
        if (connection.isConnected) {
            console.log("mongodb connected")
        }
    } catch (error) {
        console.log(error)
        throw new Error(error);
    }
};

// export async function disconnect() {
//     await mongoose.disconnect();
//     console.log('Disconnected from MongoDB');
// }

