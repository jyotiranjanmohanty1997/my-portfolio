import React from 'react'
const Skill = () => {
  return (
    <section className='container mt-5 mb-5'>
      <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]'>
        <h1 className='text-primary text-center'>
          EDUCATION &<span className='text-warning'> SKILLS </span>
        </h1>
        <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-2 gap-[2rem] items-center'>
        <div className="row m-5">
            <h3 className='text-info mb-4'>2022-2023</h3>
            <div className="col-lg-2">
              <h4>Internship</h4>
            </div>
            <div className="col-lg-4">
              <p>From Infocampus Logics Pvt.Ltd, Bangalore, Karnataka</p>
            </div>
            <div className="col-lg-2">
              <h4>Skills</h4>
            </div>
            <div className="col-lg-4">
              HTML, CSS, BOTSTRAP, TAILWIND, JAVASCRIPT, REACT, NODE, RESTAPI, JSON, SQL, GITHUB 
            </div>
          </div>
          <div className="row m-5">
            <h3 className='text-info mb-4'>2019-2022</h3>
            <div className="col-lg-2">
              <h4>MCA</h4>
            </div>
            <div className="col-lg-4">
              <p>From Trident Academy Of Creative Technology, Bhubaneswar, Odisha</p>
            </div>
            <div className="col-lg-2">
              <h4>Skills</h4>
            </div>
            <div className="col-lg-4">
              HTML, CSS, BOTSTRAP, C, C++, DS, PHP, JAVASCRIPT, SQL, GITHUB 
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill
