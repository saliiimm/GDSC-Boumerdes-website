import React from "react";

const style = {
  title:
    "text-[#0F9D58] capitalize font-semibold text-[30px] md:text-[58px] text-center pt-[10%]",
  find: " lg:w-[600px] md:w-[350px]  w-[270px] xs:w-[280px] h-[230px] xs:h-[270px] med:w-[444px]  sm:w-[420px] lg:w-[560px] mt-10  lg:h-[392px] border-[10px] med:border-[15px] rounded-[5%] border-orange-50 border-black ",
  titledec:
    "capitalize font-semibold md:text-3xl   lg:text-[40px] lg:leading-10  med:text-xl text-[#494E56] md:ml-[-40px]   lg:ml-[-50px]",
  findus:
    "flex medi:flex-row flex-col-reverse md:justify-evenly w-[100%] xs:pt-10 pt-[30px] items-center",
  para: "lg:w-[370px]  text-[#656C73] text-[15px] md:text-[25px]  leading-[25px] mt-4",
};

const FindUs = () => {
  return (
    <>
      <div className="pb-10">
        <h1 className={style.title}>where to find us</h1>
        <div className={style.findus}>
          <div>
            <iframe
              className={style.find}
              src="https://maps.google.com/maps?q=university%20m'hamed%20bougara%20faculty%20de%20science%20&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              id="gmap_canvas"
              frameBorder="0"
              scrolling="no"
              title="Google Map"></iframe>
          </div>
          <div className="md:w-1/3 w-1/2 ">
            <h3 className={style.titledec}>
              Université m'hamed <br /> bougara-boumerdes
            </h3>
            <p className={style.para}>
              faculté de science <br />
              département d'informatique <br />
              bloc 5 - 2 ème etage
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindUs;
