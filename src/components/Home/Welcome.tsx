import { HiArrowNarrowRight } from "react-icons/hi";

// Aqui tiene que ir una etiqueta de imagen como fondo
const Welcome = () => {
  return (
    <section className="w-full h-screen bg-[#0a192f] ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-10 md:px-20 lg:px-10 flex flex-col justify-center h-full">
        <span className=" text-green-400 py-2">Hi, my name is</span>
        <h1 className="text-slate-100 text-4xl sm:text-7xl font-bold">
          Erick Malcoaccha
        </h1>
        <h2 className="text-3xl sm:text-5xl font-bold text-[#8892b0]">
          I'm a Computer Scientist
        </h2>
        <p className="py-4 text-[#8892b0] max-w-[700px]">
          I am a computer science student passionate about the new technologies
          of the future and a disseminator of computer science to the new
          generations.
        </p>
        <div>
          <button className="border-2 group text-green-100 px-12 py-3 my-4 flex items-center hover:bg-green-600">
            Works
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-2" />
            </span>
          </button>
        </div>
        {/*<div className="bg-slate-300 hidden sm:block">logo personal</div>*/}
      </div>
    </section>
  );
};

export default Welcome;
