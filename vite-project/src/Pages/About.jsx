import React from "react";
import Footer from "../Components/Footer";
import TextCart from "../Components/TextCart";
import { Stat } from "../Components/Stat";

function About() {
  return (

    <div className="bg-gradient-to-tr from-orange-50 to-cyan-100 via-white  overflow-hidden">
      <div className="title p-[10px] pt-[120px] md:p-[120px]  text-center   ">
        <h1 className=" text-2xl md:text-5xl h1 font-bold leading-normal text-bleu">
          Google Developers Students Club <br /> University Of{" "}
          <span className="text-jaune">Boumerdes</span>
        </h1>
      </div>
      <TextCart  />
      <Stat />
      <Footer />
    </div>
  );
}

export default About;
