import React from 'react'

export default function Block(props) {
  return (
    <>
    <div className='img-container rounded-3 d-flex justify-content-center align-items-center'>
      <img src={props.src} className='w-100' alt="" />
      <div className="layer">
        <i class="fa-regular display-1 fa-eye"></i>
      </div>
    </div>
    </>
  )
}
