import React from 'react'

const Services = () => {
  return (
    <section className='container mt-5 mb-5 text-center'>
      <h1 className='text-primary'> MY <span className='text-warning'>SERVICES </span></h1> 
      <div class="row row-cols-1 row-cols-md-3 g-4 mt-4">
            <div class="col">
                <div class="card h-100 ">
                  <div class="card-body bg-primary">
                      <i class="fa fa-code"></i>
                      <h3 class="card-title mb-3 mt-2">FRONTEND DEVELOPER</h3>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                  <div class="card-body bg-info">
                      <i class="fa fa-code"></i>
                      <h3 class="card-title mb-3 mt-2">BACKEND DEVELOPER</h3>
                      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                  </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                  <div class="card-body bg-success">
                      <i class="fa fa-code"></i>
                      <h3 class="card-title mb-3 mt-2">FULL-STACK DEVELOPER</h3>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                  </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services;