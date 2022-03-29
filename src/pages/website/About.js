import React from "react";

import "./css/animate.min.css"
// import "./css/bootstrap.min.css"
import "./css/font-awesome.min.css"
import "./css/jquery.fullPage.css"
import "./css/templatemo-style.css"
import "./css/mislider.css"
import "./css/mislider-custom.css"

// images
import logo from './images/logo.jpeg'
import one from './images/1.png'

function About() {

    function openMenu(){
        const headerEl = document.querySelector(".header");
        const btnNavEl = document.querySelector(".btn--mobile-nav");
        const close = document.querySelector(".close_menu");
        const open = document.querySelector(".open_menu");
        
        btnNavEl.addEventListener("click", () => {
            // open.classList.style.display = "none"
            headerEl.classList.toggle("nav-open");
            // close.classList.style.display = "block";
            
        });
    }
    function closeMenu(){
        console.log("close")
    }
    function openWebapp(){
      const link = document.querySelector(".login_button--link");
      const href = link.getAttribute("href");
      window.open(href, "_blank");
    }

  return (
    <>
      <div id="fullpage">
      {/* <!-- start home --> */}
        <div id="specific_home" className="">
          <header className="header-top">
            <div className="header">
              <a href="/">
                <img src={logo} className="logo" alt="Theree cousins energy company logo" />
              </a>
              <nav className="main-nav">
                <ul className="main-nav__list gap-4 ">
                  <li className="main-nav__item">
                    <a className="main-nav__link text-lg" href="/#work">
                      Our Services
                    </a>
                  </li>
                  <li>
                    <a className="main-nav__link" href="/#about">
                      About Us
                    </a>
                  </li>
                  <li className="main-nav__item">
                    <a className="main-nav__link" href="/#consultancy">
                      Consultancy
                    </a>
                  </li>
                  <li className="main-nav__item">
                    <a className="main-nav__link nav-cta" href="/#contact">
                      Contact us
                    </a>
                  </li>
                  <li className="main-nav__item">
                    <button className="login_button">
                      <a href="http://178.62.41.139:3000/home" className="login_button--link" target="_blank" onClick={openWebapp}>
                        Login
                      </a>
                    </button>
                  </li>
                </ul>
              </nav>
              <button className="nav-btn btn--mobile-nav open_menu" onClick={openMenu}>
                <ion-icon className="icon-mobile-nav md hydrated" name="menu-outline" role="img" aria-label="menu outline"></ion-icon>
                {/* <ion-icon className="icon-mobile-nav md hydrated close_menu" name="close-outline" role="img" aria-label="close outline"></ion-icon> */}
              </button>
              <button className="nav-btn btn--mobile-nav close_menu" onClick={closeMenu}>
                {/* <ion-icon className="icon-mobile-nav md hydrated  open_menu" name="menu-outline" role="img" aria-label="menu outline"></ion-icon> */}
                <ion-icon className="icon-mobile-nav md hydrated " name="close-outline" role="img" aria-label="close outline"></ion-icon>
              </button>
            </div>
          </header>
        </div>
        {/* <!-- end home -->
        <!-- start about --> */}
        <div id="about" className="section">
        <div className="container">
            <div className="row">
              <div className="col-md-12 wow bounce pb-10">
                <h2 className="h1-b text-2xl text-center">ABOUT US</h2>
                <div className="w3_agile_image pb-10">
                  <img src={one} alt=" " className="block" />
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="wow fadeInLeft text-left pl-4 pr-4 md:pr-12 md:pl-12 text-base" data-wow-delay="0.4s">
                <p className="pt-2">Nyeri Dairy Research and Innovation Centre (NDRIC) is the research and innovation wing of
                            Nyeri National Polytechnic. This institutional research and innovation centre was established in
                            2022 to leverage on research and innovation needs of dairy value chain. This is in line the Nyeri
                            National Polytechnic (NNP)’s mandate of training, research and consultancy. It’s mandated to
                            undertake training, multidisciplinary research in industrial and allied technologies in agro
                            processing.</p>
						    <p className="pt-2">The dream of establishing NDRIC dates back to 2016 when NNP was chosen to participate in
                            Kenya Education for Employment Program (KEFEP) which was implemented by Colleges and
                            Institutes Canada (CICan) and national polytechnics in Kenya. This program was meant to
                            improve the socio-economic wellbeing of both young women and men, through increased
                            employment and self-employment opportunities. At the polytechnic level, NNP partnered with
                            consortium of three Canadian partners led by Cegep Saint-Jean-Sur-Richelieu and was able to
                            establish a dairy processing plant with state of the art processing and laboratory equipment.
                            Among the many components of the KEFEP project was the applied research component
                            spearheaded by Community College of North Brunswick (CCNB). CCNB worked in partnership
                            with Centre for Development and Biotechnology in Quebec (CDBQ) whose mission is to assist
                            businesses in the food processing, agro environment, biotechnology, and agronomy sectors by
                            providing innovation and technology transfer support services. NDRIC borrows heavily from the
                            facilities and services offered in CDBQ in order to render similar services to Kenyan agro
                            processing industry. CDBQ has facilities such as Bio food Incubator, Agro biotechnology
                            Platform, Agricultural complex and Biomass heating System which is being replicated NDRIC.
                            In the heart of operations in NDRIC, is research which determines the gaps that exist in the
                            industry after which the centre embarks on getting the solution. In 2020, NDRIC secured the first
                            applied research grant from Supporting Innovation in Technical Vocational Education Sector
                            (SITVES) project. The funds were used to assess skill and innovation gaps among the dairy
                            processing micro small and medium enterprises (MSME). From the findings, digital platform
                            was identified as an innovation that would increase productivity of MSME. NDRIC has solid
                            
                            resource mobilization strategies which include proposal writing, strategic partnerships, spot on
                            investments and aggressive product development. The centre has modern equipments which they
                            have acquired through funds from various programs both in private sector and national
                            governments.
                  </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end about --> */}

        {/* <!-- start footer --> */}
        <div>
          <footer>
            <div className="container">
              <div className="row">
                <div className="col-md-12 wow fadeIn" data-wow-delay="0.4s">
                  <p>
                    Copyright &copy; 2022 Nyeri National Polytechnic Dairy Platform . 
                  </p>
                  <p>
                  Powered by <a rel="nofollow noopener" target="_blank" href="https://www.linkedin.com/in/dynamo-denis-mbugua-53304b197/">
                        Nyeri National Polytechinic
                    </a>
                  </p>
                  <hr />
                  <ul className="social-icon">
                    <li>
                      <a href="#" className="fa fa-facebook"></a>
                    </li>
                    <li>
                      <a href="#" className="fa fa-twitter"></a>
                    </li>
                    <li>
                      <a href="#" className="fa fa-instagram"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default About;
