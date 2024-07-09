import React from 'react'
import { SectionWrapper } from '../hoc'

const Reference = () => {
  return (
    <div className='w-full flex flex-col gap-10'>
       <p className='text-2xl font-bold'>Reference</p>
          <div className="flex flex-col gap-3 px-10">
             <p className='text-xl font-bold text-black'>Data Source:</p> 
             <div><a href="https://dblp.org/" 
             	     style={{
      			color: 'blue',
      			textDecoration: 'underline',
      			fontWeight: 'bold'
    			}}
  		>DBLP</a>: The primary source of bibliographic data for this visualization project is DBLP, a digital bibliography and library for computer science. Data extraction from DBLP includes paper titles and author full names from key software engineering conferences: Automated Software Engineering (ASE), Foundations of Software Engineering (FSE), International Conference on Software Engineering (ICSE)</div>
             <div><a href="https://docs.openalex.org/" 
             	     style={{
      			color: 'blue',
      			textDecoration: 'underline',
      			fontWeight: 'bold'
    			}}
             >OpenAlex</a>: OpenAlex serves as a valuable data source for extracting the authors' country and concept names related to the author's published papers.</div>
             <div><a href="https://gender-api.com/" 
             style={{
      			color: 'blue',
      			textDecoration: 'underline',
      			fontWeight: 'bold'
    			}}
             >Gender-API</a>: Gender-API is utilized to acquire gender information associated with the authors' names and country codes identified from DBLP and OpenAlex. This source contributes to understanding the gender diversity within the authors of the conference papers.
</div>
          </div>
    </div>
  )
}

//export default Reference;
export default SectionWrapper(Reference,'reference');
