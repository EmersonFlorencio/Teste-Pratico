import React from 'react';

export default function Home() {
  return (
    <div className="flex min-h-80 h-screen flex-col items-center justify-between p-10">
      <main className='my-10 w-3/12 h-4/5 md:max-w-2x1 bg-indigo-200 gap-5 rounded' >
        <h1 className='text-3xl text-purple-950 font-bold text-center mt-16'>Cadastrar Usuarios</h1>

        <form className='flex flex-col justify-center items-center my-6 '>
          <div className='flex flex-col'>
            <label className='font-medium text-black mb-2'>Nome:</label>
            <input
              type="text"
              placeholder='Nome Completo'
              className='w-72 mb-5 p-2 rounded text-center'
            />
          </div>

          <div className='flex flex-col'>
            <label className='font-medium text-black mb-2'>Email:</label>
            <input
              type="email"
              placeholder='Email'
              className='w-72 mb-5 p-2 rounded text-center'
            />
          </div>

          <div className='flex flex-col'>
            <label className='font-medium text-black mb-2'>Telefone:</label>
            <input
              type="tel"
              placeholder='Telefone'
              className='w-72 mb-5 p-2 rounded text-center'
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
        <article className='w-96 bg-blue-400 p-2 rounded '>
          <p><span className='font-medium'>Nome: </span>Emerson</p>
          <p><span className='font-medium'>Email: </span>Emerson@test.com</p>
          <p><span className='font-medium'>Telefone: </span>91111-1111</p>
        </article>
      </section>
    </div>
  );
}
