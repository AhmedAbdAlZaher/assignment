import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <>
      <footer fixed="bottom" className=' postion relative text-center p-5 myfooter'>
        <div className='row g-0 postion relative'>
          <div className='col-md-4'>
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className='col-md-4 icons'>
            <h3>AROUND THE WEB</h3>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-solid fa-globe"></i>
          </div>
          <div className='col-md-4'>
            <h3>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
          
        </div>
        <div className='lastly'>
            <p className='pt-4'>Copyright © Your Website 2021</p>
          </div>
      </footer>
    </>
  )
}
