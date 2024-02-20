import { useState } from 'react'
import { Error } from './Error';

// eslint-disable-next-line react/prop-types
const Formulario = ({pacientes, setPacientes }) => {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fechaAlta, setFechaAlta] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36)

    return random + fecha;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, propietario, email, fechaAlta, sintomas].includes('')) {
      console.log('Hay al menos un campo vacio')

      setError(true)
      return;
    }

    setError(false)

    const objectoPaciente = {
      nombre,
      propietario,
      email,
      fechaAlta,
      sintomas,
      id : generarId()
    }

    setPacientes([...pacientes, objectoPaciente]);

    // Reiniciar formulario
    setNombre('')
    setPropietario('')
    setEmail('')
    setFechaAlta('')
    setSintomas('')
  };

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

      <p className='text-lg mt-5 text-center mb-10'>
        Anade Pacientes y {''}
        <span className='text-indigo-600 font-bold text-lg'>Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'
      >
        {error && <Error>Todos los campos son obligatirio</Error>}
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
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={fechaAlta}
            onChange={(e) => setFechaAlta(e.target.value)}
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
            placeholder='describe los sintomas'
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
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
