import Header from "../../__atom/Header/header";
import Section from "../../__molecule/Section/section";

function Container() {
  return (
    <>
      <div className="flex flex-col items-center">
        <Header />
        <Section />
      </div>
    </>
  );
}
export default Container;
