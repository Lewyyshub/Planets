import { createContext, useState } from "react";
import Mercury from "../../assets/planet-mercury.svg";
import Venus from "../../assets/planet-venus.svg";
import Earth from "../../assets/planet-earth.svg";
import Mars from "../../assets/planet-mars.svg";
import Jupiter from "../../assets/planet-jupiter.svg";
import Saturn from "../../assets/planet-saturn.svg";
import Uranus from "../../assets/planet-uranus.svg";
import Neptune from "../../assets/planet-neptune.svg";

const planets = {
  Mercury: {
    name: "Mercury",
    image: Mercury,
    description:
      "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
    rotation: "58.6 days",
    revolution: "87.97 days",
    radius: "2,439.7 km",
    temperature: "430°c",
  },
  Venus: {
    name: "Venus",
    image: Venus,
    description:
      "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
    rotation: "243 days",
    revolution: "225 days",
    radius: "6,051.8 km",
    temperature: "471°c",
  },
  Earth: {
    name: "Earth",
    image: Earth,
    description:
      "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
    rotation: "24 hours",
    revolution: "365.25 days",
    radius: "6,371 km",
    temperature: "15°c",
  },
  Mars: {
    name: "Mars",
    image: Mars,
    description:
      'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".',
    rotation: "24.6 hours",
    revolution: "687 days",
    radius: "3,389.5 km",
    temperature: "-63°c",
  },
  Jupiter: {
    name: "Jupiter",
    image: Jupiter,
    description:
      "upiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
    rotation: "9.9 hours",
    revolution: "12 years",
    radius: "69,911 km",
    temperature: "-145°c",
  },
  Saturn: {
    name: "Saturn",
    image: Saturn,
    description:
      "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
    rotation: "10.7 hours",
    revolution: "29.5 years",
    radius: "58,232 km",
    temperature: "-178°c",
  },
  Uranus: {
    name: "Uranus",
    image: Uranus,
    description:
      "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
    rotation: "17.2 hours",
    revolution: "84 years",
    radius: "25,362 km",
    temperature: "-195°c",
  },
  Neptune: {
    name: "Neptune",
    image: Neptune,
    description:
      "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
    rotation: "16.1 hours",
    revolution: "165 years",
    radius: "24,622 km",
    temperature: "-200°c",
  },
};

export const PlanetContext = createContext();

export function PlanetProvider({ children }) {
  const [selectedPlanet, setSelectedPlanet] = useState(planets.Earth);

  return (
    <PlanetContext.Provider
      value={{ selectedPlanet, setSelectedPlanet, planets }}
    >
      {children}
    </PlanetContext.Provider>
  );
}
export default PlanetContext;
