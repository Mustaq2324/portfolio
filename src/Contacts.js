import React from 'react'
import "./index.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Contacts() {
  return (
    <div className='p-3 bg bg-orange-400  '>
        <div className='z-50 bg-slate-200 p-4 mt-24'>
        <div className="overlay-mf"></div>
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="contact-mf">
            <div id="contact" className="box-shadow-full">
              <div className="row">
                <div className="col-md-6">
                  <div className="title-box-2">
                    <h5 className='text-4xl font-bold'>
                      Send Message Us
                    </h5>
                    <p className='h-1 w-28 mt-4 color bg-orange-400'></p>
                  </div>
                  <div>
                      <form action="" method="post" role="form" className="contactForm">
          
                      <div className="errormessage"></div>
                      <div className='flex flex-col gap-5 mt-8 justify-center items-center text-center font-bold'>
                        <div className=" ">
                          <div className='p-4 text-center'>
                            <input className=' h-10 w-[70vw] rounded-md border-solid to-black font-medium text-sm ' type="text" name="name"  id="name" placeholder="  Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            <div className="validation"></div>
                          </div>
                        </div>
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <input className=' h-10 w-[70vw] rounded-md border-solid to-black font-medium text-sm ' type="email"  name="email" id="email" placeholder="  Email" data-rule="email" data-msg="Please enter a valid email" />
                            <div className="validation"></div>
                          </div>
                        </div>
                        <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input className=' h-10 w-[70vw] rounded-md border-solid to-black font-medium text-sm ' type="text"  name="subject" id="subject" placeholder="  Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                              <div className="validation"></div>
                            </div>
                        </div>
                        <div className="col-md-12 mb-3">
                          <div className="">
                            <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="  Message"></textarea>
                            <div className="validation"></div>
                          </div>
                        </div>
                        <div className="rounded-m">
                          <button type="submit" className="button button-a button-big button-rouded">Send Message</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="title-box-2 pt-4 pt-md-0">
                    <h5 className="font-bold text-3xl">
                      Get in Touch
                    </h5>
                    <p className='h-1 w-[15vw] mt-3 color bg-orange-400'></p>
                  </div>
                  <div className="more-info">
                    <p className='mt-7 font-light text-xl'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum dolorem soluta quidem
                      expedita aperiam aliquid at.
                      Totam magni ipsum suscipit amet? Autem nemo esse laboriosam ratione nobis
                      mollitia inventore?
                    </p>
                    <ul className='mt-8'>
                      
                      < FaLocationDot/><li><span className="ion-ios-location"></span> No 77,Keeranur PUDUKKOTTAI(DIST) TAMILNADU</li>
                      <li><span className="ion-ios-telephone"></span> 9025870868</li>
                      <li><span className="ion-email"></span> harishshyam07@gmail.com</li>
                    </ul>
                  </div>
                  <div className="socials">
                    <ul className='flex gap-6 mt-6 text-3xl'>
                      <li><FaInstagram/></li>
                      <li><FaXTwitter/></li>
                      <li><FaGithub/></li>
                      <li><FaLinkedin/> </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



  <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
  <div id="preloader"></div>
        </div>
        <footer>
      <div className=' mt-4'>
        <div className="row">
          <div className="col-sm-12">
            <div className="copyright-box">
              <p className="copyright">&copy; Copyright <strong>DevFolio</strong>. All Rights Reserved</p>
              <div className="credits">
          
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

    </div>
  )
}

export default Contacts