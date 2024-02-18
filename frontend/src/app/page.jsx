'use client';

import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { api } from '../services/api';

export default function Home() {
  const [users, setUsers] = useState([]);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const telefoneRef = useRef(null);

  useEffect(() => {
    loadUsers();
  }, []);

  /*
  useEffect chamando a função loadUsers fazendo a requisição GET da nossa Api de usúarios. 
  */

  const loadUsers = async () => {
    const response = await api.get('/api/usuarios');
    console.log(response.data);

    setUsers(response.data);
  };

  /*
    função LoadUser que faz a requisição GET na nossa Api e preenche nosso estado user 
    para exibir eles na tela.
   */

  const hendleSubmit = async (event) => {
    event.preventDefault();

    if (!nameRef.current?.value || !emailRef.current?.value || !telefoneRef.current?.value) {
      // eslint-disable-next-line no-undef
      return window.alert('Preencher todos os dados para o cadastro!');
    }

    const response = await api.post('/api/usuarios', {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      telefone: telefoneRef.current?.value
    });

    setUsers(alluser => [...alluser, response.data]);

    // eslint-disable-next-line no-undef
    window.alert('Usúario castrado com Sucesso!');

    nameRef.current.value = '';
    emailRef.current.value = '';
    telefoneRef.current.value = '';
  };

  /*
  A função hendleSubmit que dispara a requisição POST para cadastrar os usúarios no nosso
  banco de dados, ela faz a verificação se todos os campos foram preenchidos e se estiver 
  tudo correto, manda uma mensagem informado o cadastro do cliente.
   */

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-10">
      <main className='my-10 w-3/12 h-4/5 max-sm:w-40 bg-indigo-200 gap-5 rounded max-md:w-80 max-lg:w-96 max-xl:w-96 max-2xl:w-96' >
        <h1 className='text-3xl text-purple-950 font-bold text-center mt-16 max-sm:text-xl'>Cadastrar Usuários</h1>

        <form className='flex flex-col justify-center items-center my-6' onSubmit={hendleSubmit}>
          <div className='flex flex-col border-solid border-2 border-red-600 max-sm:w-28'>
            <label className='font-bold text-black mb-2'>Nome:</label>
            <input
              type="text"
              placeholder='Nome Completo'
              className='mb-5 p-2 md:w-72 rounded text-center'
              ref={nameRef}
            />
          </div>

          <div className='flex flex-col max-sm:w-28'>
            <label className='font-bold text-black mb-2'>Email:</label>
            <input
              type="email"
              placeholder='Email'
              className='mb-5 p-2 md:w-72 rounded text-center'
              ref={emailRef}
            />
          </div>

          <div className='flex flex-col max-sm:w-28'>
            <label className='font-bold text-black mb-2'>Telefone:</label>
            <input
              type="tel"
              placeholder='Telefone'
              className='mb-5 p-2 rounded md:w-72 text-center'
              ref={telefoneRef}
            />
          </div>

          <input
            type="submit"
            value="Cadastrar"
            className='cursor-pointer max-sm:px-4 mt-7 px-12 py-4 bg-violet-500 rounded hover:bg-white hover:text-violet-700 font-semibold transition-all text-white hover:scale-110'
          />
        </form>

      </main>
      <section className='flex flex-col'>
        <h2 className='text-3xl text-purple-950 font-bold text-center mb-4'>Lista de Usuários</h2>
        {users.map((user) => (
          <article key={user._id} className='w-96 bg-gray-400 p-2 rounded mt-4 max-sm:w-52'>
            <p><span className='font-bold'>Nome: </span>{user.name}</p>
            <p><span className='font-bold'>Email: </span>{user.email}</p>
            <p><span className='font-bold'>Telefone: </span>{user.telefone}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
