import React from 'react'
import { useNavigate } from "react-router-dom";
import doc1 from  "../../images/top-hospital-management-system.jpg"
import landingpage from "../../images/landingpage.jpg"
import home1 from "../../images/home1.png"
import home2 from "../../images/home2.png"
import logo from "../../images/logo.png"

import "../../css/HomePage/customTestimonials.css"
import "../../css/HomePage/customServices.css"
import "../../css/HomePage/customFooter.css"



function HomePage() {
    const navigate = useNavigate();

    const navigateLogin = () => {
        // 👇️ navigate to /
        navigate('/login');
      };

  return (
    <>
        {/* Header-------------- */}
        <div className='navDiv'>
        <nav className="navbar navbar-expand-lg bg-dark " data-bs-theme="dark">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#">Navbar</a> */}
    <img src={logo} className="logoImg"/>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Features</a>
        <a className="nav-link" href="#">Pricing</a>
        <a className="nav-link disabled" aria-disabled="true">Disabled</a>
      </div>

    </div>
      <button className="btn btn-danger" onClick={navigateLogin}>LogIn</button>

  </div>
</nav>
</div>

{/* Images Start------------- */}
<div className='startImage w-100' id='home'>
<img src={home1} className="d-block w-100"/>
<img src={home2} className="d-block w-100"/>

</div>

{/* Testimonials Div Container------------------ */}
<div className='testimonalsDiv' >
    {/* Testimonials------------------ */}

<div className='testimonials'>
<figure className="snip1390">
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg" alt="profile-sample3" className="profile" />
  <figcaption>
    <h2>Eleanor Crisp</h2>
    <h4>UX Design</h4>
    <blockquote>Dad buried in landslide! Jubilant throngs fill streets! Stunned father inconsolable - demands recount!</blockquote>
  </figcaption>
</figure>
<figure className="snip1390 hover"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg" alt="profile-sample5" className="profile" />
  <figcaption>
    <h2>Gordon Norman</h2>
    <h4>Accountant</h4>
    <blockquote>Wormwood : Calvin, how about you? Calvin : Hard to say ma'am. I think my cerebellum has just fused. </blockquote>
  </figcaption>
</figure>
<figure className="snip1390"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg" alt="profile-sample6" className="profile" />
  <figcaption>
    <h2>Sue Shei</h2>
    <h4>Public Relations</h4>
    <blockquote>The strength to change what I can, the inability to accept what I can't and the incapacity to tell the difference.</blockquote>
  </figcaption>
</figure>

</div>
</div>

{/* Services ----------------- */}
<div className='servicesDiv row'>

    {/* services left div ----------- */}
    <div className='col-md-6 col-xs-12 row'>
        {/* cards ------------- */}
        <div className='col-md-6 col-xs-12'>
        <div className="card text-bg-light mb-3">
            
        <figure className="serviceCards">
            <figcaption>
                <h2>Bariatric Surgery</h2>
                <blockquote>The department of Bariatric Surgery is a hub of excellence, backed by fully equipped labs, ICU units and a team of trained speciallists.</blockquote>
            </figcaption>
        </figure>

                
            </div>
        
       

            <figure className="serviceCards">
            <figcaption>
                <h2>Breast Cancer Center</h2>
                <blockquote>For your comfort, we have an all-women's team of dedicated experts to help you with any breast-related complaints.</blockquote>
            </figcaption>
        </figure>

        </div>


        
        
        <div className='col-md-6 col-xs-12'>
        <div className="card text-bg-light mb-3">

        <figure className="serviceCards">
            <figcaption>
                <h2>Cardiac Surgery</h2>
                <blockquote>Strictly adhering to the latest trends in technology, we resort to the use of up to the minute techniques and methods.</blockquote>
            </figcaption>
        </figure>

                
            </div>
        
        <div className="card text-bg-light mb-3">

        <figure className="serviceCards">
            <figcaption>
                <h2>Cardiology</h2>
                <blockquote>Interventional cardiology includes the full range of cardiac and vascular surgury, we offer a full range of treatements and services.</blockquote>
            </figcaption>
        </figure>

            
               
            </div>
        </div>

        </div>

    
    {/* services right div ----------- */}
    <div className='col-md-6 col-xs-12' id="service">
    <img src={landingpage} className="serviceImg w-100"/>

    </div>
    
    </div>
   
        
    

{/* Footer --------------- */}

<div className='footerDiv' id='aboutUs'>

<footer className="footer-section">
        <div className="container">
            <div className="footer-cta pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="bi bi-geo-alt"></i>
                            <div className="cta-text">
                                <h4>Find us</h4>
                                <span>Pune, Maharashtra, India</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="bi bi-phone"></i>

                            <div className="cta-text" id='contactUs'>
                                <h4>Call us</h4>
                                <span>9856102347</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="bi bi-envelope-at"></i>
                            <div className="cta-text">
                                <h4>Mail us</h4>
                                <span>silver-spring@info.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <a href="index.html"><img src={doc1} className="doc1Img"/>
                                </a>
                            </div>
                            <div className="footer-text">
                                <p>Silver spring is a health care provider, par excellence, fast establishing itself as a global industry model in the tertiary healtcare system of India. </p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            
                            <div className="footer-widget" style={{color:"white",marginBottom:"30px"}}>
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><a href="#home" className='custom-li'>Home</a></li>
                                <li><a href="#aboutUs" className='custom-li'>About us</a></li>
                                <li><a href="#service'" className='custom-li'>Our Services</a></li>
                                <li><a href="#contactUs" className='custom-li'>Contact us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                            <h5  className='footerListServices'>Services</h5>
                            
                        <ul>
                                
                                
                                <li className='footerListServices'>Bariatric Surgery</li>
                                <li className='footerListServices'>Cardiac Surgery</li>
                                <li className='footerListServices'>Breast Care Center</li>
                                <li className='footerListServices'>Cardiology</li>
                                <li className='footerListServices'>Chest Medicine</li>
                                <li className='footerListServices'>Dialyais</li>
                                
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <div style={{color:"white"}}>Copyright &copy; 2023, All Right Reserved </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div className="footer-menu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Policy</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

</div>



    </>
  )
}

export default HomePage