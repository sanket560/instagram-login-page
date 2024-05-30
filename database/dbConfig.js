import mongoose from "mongoose";

const DATABASE_URL = process.env.DATABASE_URL;

let cachedConnection = global.mongooseConnection;

if (!cachedConnection) {
  cachedConnection = global.mongooseConnection = { conn: null, promise: null };
}

async function connectDB() {
  if (cachedConnection.conn) {
    return cachedConnection.conn;
  }

  if (!cachedConnection.promise) {
    const connectionOptions = {
      bufferCommands: false, 
    };

    cachedConnection.promise = mongoose.connect(DATABASE_URL, connectionOptions)
      .then((connection) => {
        console.log(`Connected to MongoDB`);
        return connection;
      })
      .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); 
      });
  }

  cachedConnection.conn = await cachedConnection.promise;
  return cachedConnection.conn;
}

export default connectDB;
