// src/components/publication.js

import {DocumentCheckIcon, ArrowRightIcon} from "@heroicons/react/20/solid";
import React from "react";
import { publications } from "../data";

function Publication() {
  return (
    <section id="publication">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <DocumentCheckIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Articles and Publications
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            The followings are some of my works.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {publications.map((publication) => (
            <div key={publication} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex h-full items-center">
                <a href ={publication.url} re="noreferrer" target ="_blank" className="p-4 inline-flex title-font font-medium text-white focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  {publication.title}
                  <ArrowRightIcon className="text-green-400 w-6 h-6 flex-shrink-0 ml-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Publication