import mongoose from 'mongoose';

const connectToDatabase = () => {
  console.log('conectando ao MongoDB');

  mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log('conectado ao MongoDB'))
    .catch((error) => console.log(error));
};

export default connectToDatabase;

/* Foi utilizado o mongoose, uma ODM feita para facilitar e diminuir a complexidade de usar um banco
de dados NoSQL, ele facilitou a conexão com o banco de dados e para fazer a modelagem 
e a inserção dos dados no banco.
*/
