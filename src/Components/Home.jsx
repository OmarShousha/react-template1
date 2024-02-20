import React from 'react'
import logo from '../assets/ava.svg'
import Styles from '../Components/css/Home.module.css'

export default function Home() {
  return (
    <>
    <section className={Styles.myHome}>
      <div className='text-white d-flex flex-column align-items-center'>


        <img src={logo} className='w-60 mb-4' alt="" />
        <div className='mt-0'>
          <h1 className='title pb-4 pt-1 fw-bold position-relative w-fit' >
            START FRAMEWORK
          <i class="fa-solid fa-star fs-6 position-absolute"></i>
          </h1>
        </div>
        <p>Graphic Artist - Web Designer - Illustrator</p>

      </div>  
    </section>
    </>
  )
}
