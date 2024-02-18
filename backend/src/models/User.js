import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('users', UserSchema);

export default User;

/*
A model user utilizando o moongose para fazer a modelagem da coleção e o esquema dos dados.
*/
