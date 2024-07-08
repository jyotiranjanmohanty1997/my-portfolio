import React from 'react'

import "./footer.css";
const Footer = () => {
  return (
        <footer className="mt-5 bg-info p-3">
            <div className="container mt-4">
                <div className="row center">
                    <div className="col-lg-4">
                        <h3 className='text-secondary p-2'> About Us </h3>
                        <p>
                        Our designed online shopping system provides a 24×7 service, 
                        that is customers can surf the website, place orders anytime 
                        they wish to. Also, the delivery system works 24×7 hours a week.
                        </p>
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-4">
                        <h3 className='text-secondary p-2'> Contact Us </h3> 
                        <p> Phone No. : +91-7008976876 </p>
                        <p> E-Mail : jyotiranjanmohanty166@gmail.com </p>
                        <p> Github : jyotiranjanmohanty1997.github.io</p>
                        <p> Marathahalli, bangalore, 560037 </p>
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-2 ">
                        <h3 className='text-secondary p-2'> Social Media </h3> 
                        <p> <span className='text-primary'><i className="fab fa-facebook fa-2x"></i></span> Facebook.com</p>
                        <p> <span className='text-primary'><i className="fab fa-twitter fa-2x"></i></span>  Twitter.com</p>
                        <p> <span className='text-danger'><i className="fab fa-instagram fa-2x"> </i> </span> Instagram.com</p>
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer
