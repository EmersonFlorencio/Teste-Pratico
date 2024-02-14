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

  const loadUsers = async () => {
    const response = await api.get('/api/usuarios');
    console.log(response.data);

    setUsers(response.data);
  };

  const hendleSubmit = async (event) => {
    event.preventDefault();

    if (!nameRef.current?.value || !emailRef.current?.value || !telefoneRef.current?.value) return;

    const response = await api.post('/api/usuarios', {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      telefone: telefoneRef.current?.value
    });

    setUsers(alluser => [...alluser, response.data]);

    nameRef.current.value = '';
    emailRef.current.value = '';
    telefoneRef.current.value = '';

  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-10">
      <main className='my-10 w-3/12 h-4/5 md:max-w-2x1 bg-indigo-200 gap-5 rounded' >
        <h1 className='text-3xl text-purple-950 font-bold text-center mt-16'>Cadastrar Usuarios</h1>

        <form className='flex flex-col justify-center items-center my-6' onSubmit={hendleSubmit}>
          <div className='flex flex-col'>
            <label className='font-medium text-black mb-2'>Nome:</label>
            <input
              type="text"
              placeholder='Nome Completo'
              className='w-72 mb-5 p-2 rounded text-center'
              ref={nameRef}
            />
          </div>

          <div className='flex flex-col'>
            <label className='font-medium text-black mb-2'>Email:</label>
            <input
              type="email"
              placeholder='Email'
              className='w-72 mb-5 p-2 rounded text-center'
              ref={emailRef}
            />
          </div>

          <div className='flex flex-col'>
            <label className='font-medium text-black mb-2'>Telefone:</label>
            <input
              type="tel"
              placeholder='Telefone'
              className='w-72 mb-5 p-2 rounded text-center'
              ref={telefoneRef}
            />
          </div>

          <input
            type="submit"
            value="Cadastrar"
            className='cursor-pointer mt-10 px-12 py-4 bg-violet-500 rounded hover:bg-white hover:text-violet-700 font-semibold transition-all text-white hover:scale-110'
          />
        </form>


      </main>
      <section className='flex flex-col'>
        <h2 className='text-3xl text-purple-950 font-bold text-center mb-4' >Lista de Usuarios</h2>
        {users.map((user) => (
          <article key={user._id} className='w-96 bg-gray-400 p-2 rounded mt-4'>
            <p><span className='font-medium'>Nome: </span>{user.name}</p>
            <p><span className='font-medium'>Email: </span>{user.email}</p>
            <p><span className='font-medium'>Telefone: </span>{user.telefone}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
