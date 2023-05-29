
// src/components/background.js
import {education} from '../data'
import React from 'react'
import {AcademicCapIcon} from '@heroicons/react/20/solid'

function Academic(){

	return (

	<section id="academic" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <AcademicCapIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Academic
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
           Education and certificates.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 sm:grid-col-1 ">
	        {education.map((edu) => (


		        <div key={edu.id} className="mb-4 max-w-sm gr-2 rounded overflow-hidden shadow-lg bg-white">
				  <div className="px-6 py-4" key={edu.id}>
				  	<h2 className="tracking-widest text-xl title-font font-bold text-green-400 mb-1">
	                    {edu.title}
	                </h2>
				    <div className="text-gray-700  text-base mb-2">{edu.college}</div>
				    <p className="font-medium text-sm">{edu.issued}</p>
				  </div>
				  <div className="px-6 pt-4 pb-2">
				    <a href={edu.certificate} target={edu.certificate ==='#'? "_self": "_blank"} className="items-center inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 focus:outline-none hover:bg-gray-300">Certificate</a>
		  		  </div>
				</div>
			))}
      	</div>
      </div>
    </section>
   );
}
export default Academic;