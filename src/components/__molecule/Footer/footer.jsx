function Footer() {
  return (
    <>
      <div className="flex flex-wrap justify-center md:justify-evenly max-w-[1440px] pt-[80px] text-gray-400 gap-10 ">
        <div className="border border-400- w-full md:w-[255px] h-[100px] flex flex-col justify-center pl-[23px]">
          <span className="text-200-gray text-[15px]">ROTATION TIME</span>
          <h1 className="text-white text-[40px]">58.6 days</h1>
        </div>
        <div className="border w-full md:w-[255px] h-[100px] flex flex-col justify-center pl-[23px]">
          <span className="text-200-gray text-[15px]">REVOLUTION TIME</span>
          <h1 className="text-white text-[40px]">87.97 days</h1>
        </div>
        <div className="border w-full md:w-[255px] h-[100px] flex flex-col justify-center pl-[23px]">
          <span className="text-200-gray text-[15px]">RADIUS</span>
          <h1 className="text-white text-[40px]">2,439.7 km</h1>
        </div>
        <div className="border w-full md:w-[255px] h-[100px] flex flex-col justify-center pl-[23px]">
          <span className="text-200-gray text-[15px]">AVERAGE TEMP.</span>
          <h1 className="text-white text-[40px]">430°c</h1>
        </div>
      </div>
    </>
  );
}
export default Footer;
