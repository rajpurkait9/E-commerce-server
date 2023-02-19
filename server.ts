// main server file to excute
import express, { Application } from 'express';
import { config } from 'dotenv';
import connectMongoDB from './db/connectMongo';
const app: Application = express();
config();

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
