import mongoose from 'mongoose';

const connectMongoDB = (url: string | undefined) => {
  if (url === undefined) return;
  mongoose
    .connect(url)
    .then(() => {
      console.log('connected to the database successfully..');
    })
    .catch((err) => console.log(err));
};
mongoose.set('strictQuery', true);
export default connectMongoDB;