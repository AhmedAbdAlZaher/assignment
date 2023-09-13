import React from 'react'
import '../HomePage/Home.css'
import HomeImage from '../../Imgs/avataaars.svg'



export default function Home() {

  return (
    <section className='Home'>
   <div className='d-flex flex-column justify-content-center align-items-center'>
    
    <img className='myimg mb-5 pt-5 mt-5' src={HomeImage} alt="" />
    <h2 className='text-white'>START FRAMEWORK</h2>
    <div className='py-2 d-flex align-items-center justify-content-center'>
      <div className='line'></div>
      <i className="fa-solid fa-star text-white"></i>
      <div className='line'></div>
    </div>
  
    <p className='text-white'>Graphic Artist - Web Designer - Illustrator</p>
   </div>
   </section>
  )
}
