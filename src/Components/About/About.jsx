import React from 'react'
import './About.css'
export default function About() {
  return (
    <>
      <section className='about d-flex justify-content-center align-items-center'>
        <div className='container text-white d-flex -justify-content-center'>
        <div className='row g-2 d-flex justify-content-center '>
          <div className='col-md-12 text-center'>
            <h3 className=' text-white'>ABOUT COMPONENT</h3>
            <div className='py-3 d-flex align-items-center justify-content-center'>
              <div className='line'></div>
              <i className="fa-solid fa-star text-white"></i>
              <div className='line'></div>
            </div>
          </div>
          <div className="col-md-5">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
          <div className="col-md-5">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
        </div>
        </div>
      </section>
    </>
  )
}
