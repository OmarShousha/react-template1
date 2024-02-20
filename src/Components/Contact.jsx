import React from 'react'

export default function Contact() {
  return (
    <>
    <section className='text-white vh-100 contact-section d-flex flex-column justify-content-center align-items-center'>
      <div className='mt-0 mb-5'>
        <h1 className='title-contact pb-4 pt-5 fw-bold position-relative w-fit' >
          CONTACT FRAMEWORK
          <i class="fa-solid fa-star fs-6 position-absolute"></i>
        </h1>
      </div>

      <form className='d-flex flex-column gap-5 pt-3'>
        <input type="text" placeholder='Enter your name' className='form-control' />
        <input type="text" placeholder='Enter your age' className='form-control' />
        <input type="text" placeholder='Enter your email' className='form-control' />
        <input type="text" placeholder='Enter your password' className='form-control' />
        <div className="btn btn-message w-25">Submit Message</div>
      </form>
    </section>
    </>
  )
}
