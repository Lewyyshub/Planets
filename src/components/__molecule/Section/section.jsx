import { useContext } from "react";
import { PlanetContext } from "../../Context/PlanetContext";
import Footer from "../Footer/footer";

function Section() {
  const { selectedPlanet } = useContext(PlanetContext);

  return (
    <>
      <div className="flex flex-wrap justify-center md:justify-around items-center w-full max-w-[1440px] mx-auto pt-[150px] gap-8 md:gap-0 ">
        <div className="w-full md:w-auto flex justify-center">
          <img className="w-[250px] md:w-full" src={selectedPlanet.image} />
        </div>
        <div>
          <div className="text-white max-w-[350px] flex flex-col gap-6 text-center md:text-left gap-[20px]">
            <h1 className="text-[80px]">{selectedPlanet.name}</h1>
            <p className="text-white">{selectedPlanet.description}</p>
            <span className="text-sm text-gray-500">
              <span>Source</span> : WIKIPEDIA
            </span>
          </div>
          <div className="flex flex-col gap-4 pt-[20px]">
            <button className="w-full md:w-[350px] h-12 flex items-center pl-[28px] border border-gray-500 text-white p-2 hover:bg-gray-700 transition">
              <span className="mr-3 text-gray-500">01</span> OVERVIEW
            </button>
            <button className="w-full md:w-[350px] h-12 flex items-center pl-[28px] border border-gray-500 text-white p-2 hover:bg-gray-700 transition">
              <span className="mr-3 text-gray-500">02</span> INTERNAL STRUCTURE
            </button>
            <button className="w-full md:w-[350px] h-12 flex items-center pl-[28px] border border-gray-500 text-white p-2 hover:bg-gray-700 transition">
              <span className="mr-3 text-gray-500">03</span> SURFACE GEOLOGY
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Section;
