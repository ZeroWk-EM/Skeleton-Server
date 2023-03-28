import mongoose, { Connection } from "mongoose";

import dotenv from "dotenv";
dotenv.config();

const mongoURI = String(process.env.MONGO_URL);

const connectToMongoDB = (): Connection => {
  mongoose.set("strictQuery", false);
  const stringConnection: string = mongoURI;
  mongoose.connect(stringConnection);

  const connection = mongoose.connection;
  connection.on("connected", function () {
    console.log("[SERVER] Database Connesso");
  });

  connection.on("error", function (err) {
    console.error("[SERVER] Errore durante la connessione a MongoDB", err);
  });

  return connection;
};

export default connectToMongoDB;
