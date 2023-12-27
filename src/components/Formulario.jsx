import React from 'react'

const Formulario = () => {
  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

      <p className='text-lg mt-5 text-center mb-10'>
        Anade Pacientes y {''}
        <span className='text-indigo-600 font-bold text-lg'>Administralos</span>
      </p>

      <form className='bg-white shadow-md rounded-lg py-10 px-5'>
        <div>
          <label
            htmlFor='nombreMascota'
            className='block text-gray-700 uppercase font-bold'>
            Nombre Mascota
          </label>
          <input
            id='nombreMascota'
            type="text"
            placeholder='nombre de la mascota'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          />
        </div>
      </form>
    </div>
  )
}

export default Formulario
