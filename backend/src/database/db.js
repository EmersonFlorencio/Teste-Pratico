import mongoose from 'mongoose';

const connectToDatabase = () => {
  console.log('conectando ao db');

  mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log('conectado ao db'))
    .catch((error) => console.log(error));
};

export default connectToDatabase;
