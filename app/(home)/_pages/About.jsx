import Image from "next/image";
import React from "react";
import Button from "../_components/Button";
import Heading from "../_components/Heading";

const About = () => {
  return (
    <div className="text-white mt-20 flex ml-32 justify-around px-20 ">
      <div className="text-[#cdcdcd] w-2/5 ">
        <h1 className="text-4xl font-semibold mb-10 text-white">Hi There</h1>
        <p className="text-[#cdcdcd] text-xl leading-8 mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          asperiores, pariatur reprehenderit earum eaque harum, molestiae rerum
          sint alias repudiandae aliquam quae aliquid voluptatibus nesciunt!
          Porro a adipisci odio ullam quas, animi nihil asperiores pariatur
          maxime corporis repudiandae alias dicta ratione aut quaerat blanditiis
          temporibus esse illo deserunt. Recusandae, velit?
        </p>
        <p className="text-[#cdcdcd] text-xl leading-8 mb-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto soluta
          maiores voluptas placeat? Vero corporis pariatur maxime, dolorum
          recusandae excepturi! Vero nobis officiis eum nostrum cumque harum,
          sint rerum nesciunt commodi alias voluptatem est tenetur illum at.
          Sunt, natus fugiat?
        </p>

        <div className="mt-10">
          <Button text="Send me a message" />
        </div>
      </div>

      <div className="w-2/5 mt-60">
        <Heading text="About Me" />
        <div className=" h-[40rem] bg-[rgb(126,126,126)]"></div>
      </div>
    </div>
  );
};

export default About;
