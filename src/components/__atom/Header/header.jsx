import { useContext, useState } from "react";
import { PlanetContext } from "../../Context/PlanetContext";
import burger from "../../../assets/burger.png";

function Header() {
  const { setSelectedPlanet, planets } = useContext(PlanetContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex max-w-[1440px] w-full h-[105px] text-gray-400 justify-between items-center p-10 border-b border-gray-500">
        <h1 className="text-xl text-white">THE PLANETS</h1>
        <div className="hidden md:flex gap-8">
          {Object.keys(planets).map((planet) => (
            <button
              key={planet}
              onClick={() => setSelectedPlanet(planets[planet])}
              className="hover:text-white transition text-[20px]"
            >
              {planet}
            </button>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <img src={burger} className="w-6 h-6" />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-20 right-10 bg-gray-900 w-[200px] p-4 rounded-lg flex flex-col gap-4 border border-gray-600 md:hidden">
          {Object.keys(planets).map((planet) => (
            <button
              key={planet}
              onClick={() => {
                setSelectedPlanet(planets[planet]);
                setIsOpen(false);
              }}
              className="text-white"
            >
              {planet}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

export default Header;
