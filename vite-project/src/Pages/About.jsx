import React from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import TextCart from "../Components/TextCart";
import { Stat } from "../Components/Stat";

function About() {
  return (
    <div>
      <Nav />
      <div className="title p-[10px] pt-[120px] md:p-[120px]  text-center   ">
        <h1 className=" text-2xl md:text-5xl h1 font-bold leading-normal text-bleu">
          Google Developers Students Club <br /> University Of{" "}
          <span className="text-jaune">Boumerdes</span>
        </h1>
      </div>
      <TextCart style="flex-row" />
      <TextCart style="flex-row-reverse" />
      <Stat />
      <Footer />
    </div>
  );
}

export default About;
