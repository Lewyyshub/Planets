import { PlanetProvider } from "./components/Context/PlanetContext";
import Header from "./components/__atom/Header/header";
import Section from "./components/__molecule/Section/section";

function App() {
  return (
    <PlanetProvider>
      <Header />
      <Section />
    </PlanetProvider>
  );
}

export default App;
