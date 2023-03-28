// Import Express
import express from "express";
const app = express();
// Use middleware function which parses incoming JSON requests and puts the parsed data into req.body
app.use(express.json());

//Use dotenv
import dotenv from "dotenv";
dotenv.config();

// Connection to DB
import connectToMongoDB from "./configs/mongoose.db";
const connection = connectToMongoDB();

// Define PORT
const port = Number(process.env.PORT);

// Take all route method
import object from "./routes/objects.routes";

// Association url with export route
app.use("/object", object);

// Open port for listen request
app.listen(port, () => {
  console.log(`[SERVER]: Server is running at http://localhost:${port}`);
});
