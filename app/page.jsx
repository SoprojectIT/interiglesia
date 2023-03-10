export default function Home() {
  //first page
  let worshipname = process.env.WORSHIP_NAME;
  return (
    <div
      className="flex flex-col w-full h-full justify-center items-center gap-7
    text-white
    bg-gradient-to-r 
  from-blue-800 
  via-pink-600
  to-cyan-600 
    "
    >
      <div className="font-extrabold text-4xl uppercase text-center">
        <h1 className="">
          Bienvendio a InterIglesia la <i>APP</i>
        </h1>
      </div>
      <div className="font-bold text-3xl uppercase">
        <h3>{worshipname}</h3>
      </div>
      <div
        className="flex flex-col sm:flex-row 
            gap-x-6 gap-y-7 justify-center items-center"
      >
        <div className="px-2 sm:py-1">
          <button
            className="
          px-3
          py-2
          transition-all
          rounded-lg
          bg-transparent
          border-2
          border-white
          font-bold
          text-white
          hover:bg-cyan-600
          focus:bg-cyan-800
          focus:border-white
          hover:border-transparent
          shadow-2xl
          shadow-transparent
          hover:shadow-cyan-600
          focus:shadow-cyan-800

          "
          >
            Ingresar Sistema
          </button>
        </div>
        <div className="px-2 py-1">
          <button
            className="
            px-3
            py-2
            transition-colors
            rounded-lg
            bg-transparent
            border-2
          border-white
            font-bold
            text-white
            hover:bg-blue-600
            motion-reduce:animate-bounce
            focus:bg-blue-800
          focus:border-white
          hover:border-transparent
          shadow-2xl
          shadow-transparent
          hover:shadow-blue-600
          focus:shadow-blue-800
          "
          >
            Agregar Miembro de {worshipname} 🤩
          </button>
        </div>
      </div>
    </div>
  );
}
