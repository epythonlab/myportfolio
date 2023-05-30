// src/components/about.js
// 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
import React from "react";

// install heroicons => npm install @heroicons/react

import { ArrowRightIcon, CodeBracketIcon, PhoneIcon, AtSymbolIcon } from "@heroicons/react/24/solid";
import sample from '../assets/sample.gif';

function About() {
  // contact show dialog
  const [showModal, setShowModal] = React.useState(false);
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
              href="#contact"  onClick={() => setShowModal(true)}
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Hir me <ArrowRightIcon className="w-4 h-4 ml-1 mt-2" />
            </a>
            <a
              href="https://www.github.com/epythonlab/" rel="noreferrer" target="_blank"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              <CodeBracketIcon className="w-4 h-4 mr-2 mt-2" />Projects
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


      {/* contact form dialog */}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-md font-bold text-gray-600">
                   Contact me via
                  </h3>
                  
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                 <p className ="text-green-600 hover:underline"> 
                 <AtSymbolIcon className="w-4 h-4 inline-block mb-0" /> 
                 <a href ="https://t.me/asibehtenager/" rel="noreferrer" target="_blank" >asibehtenager on telegram</a>
                 </p>
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </section>
  );
}
export default About;