/* eslint-disable react/prop-types */
import Paciente from "./Paciente";
// eslint-disable-next-line react/prop-types
const ListadoPacientes = ({ pacientes }) => {
  return (
    <div className="mx-5 my-9 md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>

          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          {pacientes.map((paciente) => {
            // eslint-disable-next-line react/jsx-key
            return <Paciente key={paciente.id} paciente={paciente} />;
          })}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes {""}
            <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
