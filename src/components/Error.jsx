// eslint-disable-next-line react/prop-types
export const Error = ({mensaje}) => {
  return (
    <div
      className="
          bg-red-800 text-white text-center p-3 uppercase font-bold mb-10 rounded-md"
    >
      <p>{mensaje}</p>
    </div>
  );
};
