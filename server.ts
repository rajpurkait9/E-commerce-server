// main server file to excute
import express, { Application } from 'express';
import { config } from 'dotenv';
import connectMongoDB from './db/connectMongo';
import prodouctRoute from './routes/product.routes';
import ErrorHandling from "./middleware/error";
const app: Application = express();
config();


// middlewares
app.use(express.json());

// all routes
app.use("/api/v1",prodouctRoute);

// middleware for error handling
app.use(ErrorHandling);

// server start code
const startServer = async (url: string | undefined) => {
  try {
    if (url === undefined) return;
    const port = process.env.PORT || 9000;
    await connectMongoDB(url);
    const serverLink = `http://127.0.0.1:${port}`;
    app.listen(port, () => {
      console.log(`server is running on port ${serverLink}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer(process.env.MONGO_URI);
