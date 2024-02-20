import React from 'react'

export default function About() {
  return (
    <>
    <section className='about text-white d-flex flex-column justify-content-center align-items-center'>
      <div className='about-content d-flex flex-column justify-content-center align-items-center'>

      <div className='mt-0'>
        <h1 className='title-about pb-4 pt-1 fw-bold position-relative w-fit' >
          ABOUT COMPONENT
        <i class="fa-solid fa-star fs-6 position-absolute"></i>
        </h1>
      </div>
      <div className="container mt-3">

      <div className="row justify-content-center align-items-center">
        <div className="col-md-5">
          <div>
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets.</p>
          </div>
        </div>
        <div className="col-md-5">
          <div>
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets.</p>
          </div>
        </div>
      </div>
      </div>
      </div>
    </section>
    </>
  )
}
