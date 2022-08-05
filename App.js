import React, {useState} from 'react';
import './App.scss';

function App() {
  const handleSubmit = () => {

  }
  const handleInputChange = () => {

  }
  return (
    
<section className="contact-section">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-10">
        <div className="wrapper">
          <div className="row no-gutters">
            <div className="col-md-6">
              <div className="contact-wrap w-100 p-lg-5 p-4">
                <h3 className="mb-4">Send Us A Message</h3>
                <form id="contactForm" className="contactForm" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input 
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Name"
                        onChange={handleInputChange}
                        
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input 
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input 
                        type="text"
                        className="form-control"
                        name="subject"
                        placeholder="Subject"
                        onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                        type="text"
                        className="form-control"
                        name="message"
                        placeholder="Message"
                        cols="30"
                        rows="10"
                        onChange={handleInputChange}
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input type="submit" value="Send Message" className="btn btn-primary" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-stretch">
              <div className="info-wrap w-100 p-lg-5 p-4 img">
                <h3>Contact Us</h3>
                <p className="mb-4">Give Us Your Some Useful Suggestions</p>
                
                <div className="dbox w-100 d-flex align-items-start">
                  <div className="icon d-flex align-items-start justify-content-center">
                    <span className="fa fa-map-marker"></span>
                  </div>
                  <div className="text pl-3">
                    <p>
                      <span>Address:</span> Lahore Garrison University, DHA Phase VI, Lahore
                    </p>
                  </div>
                </div>

                <div className="dbox w-100 d-flex align-items-center">
                  <div className="icon d-flex align-items-start justify-content-center">
                    <span className="fa fa-phone"></span>
                  </div>
                  <div className="text pl-3">
                    <p>
                      <span>Phone:</span> 
                      <a href="Tel:+923044479802">+92 304 4479802</a>
                    </p>
                  </div>
                </div>

                <div className="dbox w-100 d-flex align-items-center">
                  <div className="icon d-flex align-items-start justify-content-center">
                    <span className="fa fa-paper-plane"></span>
                  </div>
                  <div className="text pl-3">
                    <p>
                      <span>Email:</span> 
                      <a href="mailto:fa19-bsse-038@lgu.edu.pk">fa19-bsse-038@lgu.edu.pk</a>
                    </p>
                  </div>
                </div>

                <div className="dbox w-100 d-flex align-items-center">
                  <div className="icon d-flex align-items-start justify-content-center">
                    <span className="fa fa-globe"></span>
                  </div>
                  <div className="text pl-3">
                    <p>
                      <span>Website:</span> 
                      <a href="#">oursite.com</a>
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}


export default App;
