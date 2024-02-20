import React, { useState } from 'react';
import Block from './Block';
import port1 from '../assets/port1.png'
import port2 from '../assets/port2.png'
import port3 from '../assets/port3.png'

export default function Portfolio() {

  const portfolioItems = [
    { id: 1, src: port1 },
    { id: 2, src: port2 },
    { id: 3, src: port3 },
    { id: 4, src: port1 },
    { id: 5, src: port2 },
    { id: 6, src: port3 },
    // Add more items as needed
  ];

  return (
    <>
    <section className='portfolio d-flex flex-column justify-content-center align-items-center mt-5'>
      <div className='mb-4 mt-3'>
        <h1 className='title-portfolio mt-5 pb-4 pt-4 fw-bold position-relative w-fit' >
          PORTFOLIO FRAMEWORK
        <i class="fa-solid fa-star fs-6 position-absolute"></i>
        </h1>
      </div>

      <div className="container mb-4">
        <div className="row">
          {portfolioItems.map(item=>(
            <div key={item.id} className="col-md-4 p-4">
              <div>
                <Block src={item.src}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}
