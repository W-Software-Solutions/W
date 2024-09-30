import mongoose from "mongoose";


const connectDb = async () => {
    try{
        const connect = await mongoose.connect(`${process.env.CONNECTION_STRING}`);
        // const connect = await mongoose.connect("mongodb+srv://anym696969:c6DcrlomHx2ntrH9@url-shortner-app.fe3g6.mongodb.net/?retryWrites=true&w=majority&appName=url-shortner-app");
        console.log("Database Connected: ",
            connect.connection.host,
            connect.connection.name
            );

    }catch(error) {
        console.log(error)
        process.exit(1)
    }
}

export default connectDb