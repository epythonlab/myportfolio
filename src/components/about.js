// src/components/about.js
// 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
import React from "react";
// install heroicons => npm install @heroicons/react

import { ArrowRightIcon } from "@heroicons/react/24/solid";
import sample from '../assets/sample.gif';

function About() {
  // about page
  return (

    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            I am Asibeh, a full-stack developer</h1>
          <p className="mb-8 leading-relaxed">
           Python developer, Data Scientist, Researcher and trainer

          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Hir me <ArrowRightIcon className="w-4 h-4 ml-1 mt-2" />
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Projects
            </a>
          </div>
        </div>
        {/* show code sample gif in the right side of about page 
         the size the image is full of width in small screen size */}
        <div className="lg:max-w-lg lg:w-full w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded"
            alt="code demo" src={sample} />
        </div>
      </div>
    </section>
  );
}
export default About;