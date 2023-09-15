import React from 'react'
import img1 from '../../Imgs/poert1.png'
import img2 from '../../Imgs/port2.png'
import img3 from '../../Imgs/port3.png'
import './portfolio.css'
export default function Portfolio() {
  return (
    <>
      <section className='Pr_Home '>
        

        <div className="container">
          
        <div className='col-md-12 pt-5 mt-2 text-center'>
            <h3 className=''>ABOUT COMPONENT</h3>
            <div className='py-3 d-flex align-items-center justify-content-center'>
              <div className='pro_line'></div>
              <i className="fa-solid fa-star "></i>
              <div className='pro_line'></div>
            </div>
          </div>

          <div className='row g-5   justify-content-center '>
            <div className='Main  overflow-hidden col-lg-4 col-md-6 position-relative rounded-3'>
              <img className='w-100 rounded-3' src={img1} alt="" />
              <div className='overlayer rounded-3'>
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
            <div className='Main col-lg-4 col-md-6 position-relative rounded-3'>
              <img className='w-100 rounded-3' src={img2} alt="" />
              <div className='overlayer rounded-3'>
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
            <div className='Main col-lg-4 col-md-6 position-relative rounded-3'>
              <img className='w-100 rounded-3' src={img3} alt="" />
              <div className='overlayer rounded-3'>
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
            <div className='Main col-lg-4 col-md-6 position-relative rounded-3'>
              <img className='w-100 rounded-3' src={img1} alt="" />
              <div className='overlayer rounded-3'>
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
            <div className='Main col-lg-4 col-md-6 position-relative rounded-3'>
              <img className='w-100 rounded-3' src={img2} alt="" />
              <div className='overlayer rounded-3'>
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
            <div className='Main col-lg-4 col-md-6 position-relative rounded-3'>
              <img className='w-100 rounded-3' src={img3} alt="" />
              <div className='overlayer  rounded-3'>
                <i className="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>

            
          </div>

        </div>
      </section>
    </>
  )
}
