import React from 'react'
import './contact.css'
export default function Contact() {
    return (
        <section className='Contact'>
            <div className='container text-center '>
                <div className='col-md-12 pt-5 mt-2 text-center'>
                    <h3 className=''>CONTACT SECTION</h3>
                    <div className='py-3 d-flex align-items-center justify-content-center'>
                        <div className='pro_line'></div>
                        <i className="fa-solid fa-star "></i>
                        <div className='pro_line'></div>
                    </div>
                </div>

                <div className="mb-3">
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="UserName" />
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="UserAge" />
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="UserEmail" />
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="UserPassword" />
                </div>
                <button className='btn btn-success d-block'> send messages</button>
            </div>
            

        </section>
    )
}
