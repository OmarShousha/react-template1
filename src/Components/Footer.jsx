import React from 'react'
import Styles from '../Components/css/Footer.module.css'

export default function Footer() {
  return (
    <>
    <footer className='py-5 text-white'>
      <div className="container p-5">
        <div className="row">

          <div className="col-md-4">
            <div className='text-center'>
              <h3 className='mb-1'>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className=' d-flex flex-column justify-content-center align-items-center'>
              <h3 className='mb-2'>AROUND THE WEB</h3>

              <div className='d-flex justify-content-center align-items-center gap-2'>

                <div className={`${Styles.icon} ${Styles.facebook}`}>
                  <i class="fa-brands fs-5 fa-facebook"></i>
                </div>
                <div className={`${Styles.icon} ${Styles.twitter}`}>
                  <i class="fa-brands fs-5 fa-twitter"></i>
                </div>
                <div className={`${Styles.icon} ${Styles.linkedin}`}>
                  <i class="fa-brands fs-5 fa-linkedin-in"></i>
                </div>
                <div className={`${Styles.icon} ${Styles.github}`}>
                  <i class="fa-brands fs-5 fa-github"></i>
                </div>

              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className='text-center'>
              <h3 className='mb-1'>ABOUT FREELANCER</h3>
              <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
          </div>

        </div>
      </div>
    </footer>
    <div className='text-center text-white py-4 bg-footer'>
      <p>Copyright © Your Website 2021</p>
    </div>
    </>
  )
}
