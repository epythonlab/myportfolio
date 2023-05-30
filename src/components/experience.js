
// src/components/background.js
import {experiences} from '../data'
import React from 'react'
import {CheckBadgeIcon} from '@heroicons/react/20/solid'

function Experience(){

	return (

	<section id="experiences" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CheckBadgeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Experiences
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
           Work experiences and skills gained through previous job.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 sm:grid-col-1 ">
	        {experiences.map((experience) => (
	        	
		      <div key={experience.id} className="mb-4 max-w-sm gr-2 rounded overflow-hidden shadow-lg bg-white">
				  <div className="px-6 py-4" >
				  	<h2 className="tracking-widest text-xl title-font font-bold text-gray-600 mb-1">
	                    {experience.title}
	                </h2>
				    <div className="text-gray-700  text-base mb-2">{experience.company}</div>
				    <p className="font-medium text-sm">{experience.issued}</p>
				  </div>
				  <div className="px-6 pt-4 pb-2">

				  {experience.skills.map((skill)=>(
				    <span key={skill.id} className="items-center inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 focus:outline-none hover:bg-gray-300">
				    	#{skill}	
				    </span>
				  ))}
		  		  </div>
				</div>
			))}
      	</div>
      </div>
    </section>
   );
}
export default Experience;