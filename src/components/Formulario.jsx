import React, { useState } from 'react'

const Formulario = () => {

  const [nombre, setNombre] = useState('');


  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

      <p className='text-lg mt-5 text-center mb-10'>
        Anade Pacientes y {''}
        <span className='text-indigo-600 font-bold text-lg'>Administralos</span>
      </p>

      <form className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
        <div className='mb-5'>
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
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label
            htmlFor='nombrePropietario'
            className='block text-gray-700 uppercase font-bold'>
            Nombre Propietario
          </label>
          <input
            id='nombrePropietario'
            type="text"
            placeholder='nombre del propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          />
        </div>

        <div className='mb-5'>
          <label
            htmlFor='email'
            className='block text-gray-700 uppercase font-bold'>
            Email
          </label>
          <input
            id='email'
            type="email"
            placeholder='correo electronico'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          />
        </div>

        <div className='mb-5'>
          <label
            htmlFor='fechaAlta'
            className='block text-gray-700 uppercase font-bold'>
            Alta
          </label>
          <input
            id='fechaAlta'
            type="date"
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          />
        </div>

        <div className='mb-5'>
          <label
            htmlFor='sitomas'
            className='block text-gray-700 uppercase font-bold'>
            Sintomas
          </label>

          <textarea
            name="sintomas"
            id="sintomas"
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            placeholder='describe los sintomas' />
        </div>

        <input 
          type="submit"
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all'
          value="Agregar Paciente"
        />
      </form>
    </div>
  )
}

export default Formulario
