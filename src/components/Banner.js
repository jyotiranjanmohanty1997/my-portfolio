import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <section className="bsb-hero-1 px-3 bsb-overlay bsb-hover-pull" id="b1">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-11 col-lg-9 col-xl-7 col-xxl-6 text-center text-white pt-5">
            <p className="lead pt-5">Hi,I am a React Developer</p>
            <h1 className="display-3 fw-bold mt-3">React Developer</h1>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-3">
              <Link
                to="/Project"
                type="button"
                className="btn bsb-btn-xl btn-primary btn-outline-light gap-3"
              >
                Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    //  <section>
    //     <div classNameName='banner_photo'>
    //         <img src={banner_img} classNameName='img-fluid b_img' alt='Banner_Image'/>
    //     </div>
    //     <div classNameName='content'>
    //         <p classNameName='text-white'>Hi,I am a React Developer</p>
    //         <h1 classNameName='text-white'>React Developer</h1>
    //         <div classNameName='btn'>
    //             <Link to="/Project" classNameName='btn btn-warning btn-lg'>Project</Link>
    //             <Link to="/Contact" classNameName='btn btn-light btn-lg'>Contact</Link>
    //         </div>
    //     </div>
    //  </section>
  );
};

export default Banner;
