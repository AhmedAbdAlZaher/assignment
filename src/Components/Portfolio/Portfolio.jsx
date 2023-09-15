import React from 'react'
import img1 from '../../Imgs/poert1.png'
import img2 from '../../Imgs/port2.png'
import img3 from '../../Imgs/port3.png'
export default function Portfolio() {
  return (
    <>
    <section className='Home d-flex flex-column justify-content-center align-items-center'>
      <div className='contianer'>
        <div className='row'>
          <div className='Main col-md-6 position-relative'>
            <img src={img1} alt="" />
            <div className='overlayer position-absolute start-0 end-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center'>
            <i _ngcontent-osb-c19="" className="text-white fa-solid fa-plus fa-6x"></i>
            </div>
          </div>
        </div>

      </div>
      </section>
    </>
  )
}
