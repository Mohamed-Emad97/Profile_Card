import React from 'react';
import profilePic from "../images/image-victor.jpg";

export default function Card() {
  return (
    <>
    <section id="card" className='vh-100'>
      <main className='container py-5'>
        <div className="profileCard h-100 d-flex align-items-center justify-content-center flex-column">
          <div className="cardContent h-100 text-center rounded-3 p-4 d-flex flex-column">
            <div className="img my-3">
              <img src={profilePic} alt="" className="w-50 rounded-circle" />
            </div>
            <div className="name d-flex align-items-center justify-content-center">
              <h5 className='fw-bolder'>Victor Crest</h5>
              <span className='h5 age ms-2'>26</span>
            </div>
            <p className="location">Londan</p>
            <div className="border mb-3"></div>
            <div className="static d-flex align-items-center justify-content-center gap-3">
              <div className="followers mx-4 d-flex flex-column">
                <span className="txt h5 fw-bolder">80K</span>
                <span className="num">Followers</span>
              </div>
              <div className="likes mx-4 d-flex flex-column">
                <span className="txt h5 fw-bolder">803K</span>
                <span className="num">Likes</span>
              </div>
              <div className="photos mx-4 d-flex flex-column">
                <span className="txt h5 fw-bolder">1.4K</span>
                <span className="num">Photos</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
    </>
  )
}
