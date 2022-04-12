import React,{useEffect,useState} from "react";
import { Link } from 'react-router-dom';

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
import training from './images/training.JPG'
import innovation from './images/innovation_11zon.jpg'
import market from './images/market.jpeg'
import innovation2 from './images/innovation2_11zon.jpg'
import training2 from './images/training.jpeg'
import innovate from './images/innovate.jpg'
import research from './images/research.jpg'
import team from './images/team.jpeg'
import research2 from './images/research.jpeg'
import female from './images/female.png'
import male from "./images/male.png"


import { contactUser } from "../../redux/actions/users";
import { connect } from "react-redux";

export const appendScript = (scriptToAppend) => {
    const script = document.createElement("script");
    script.src = scriptToAppend;
    script.async = true;
    document.body.appendChild(script);
}

function Website(props) {
    // consultants corousel
    const {contactUser} = props
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [subject, setSubject] = useState("")
    const [description, setDescription] = useState("")

    function handleName(e){
      setUsername(e.target.value)
    }

    function handleEmail(e){
      setEmail(e.target.value)
    }

    function handleNumber(e){
      setNumber(e.target.value)
    }

    function handleDescription(e){
      setDescription(e.target.value)
    }

    function handleSubject(e){
      setSubject(e.target.value)
    }

    // contact us
    function contactUs(e){
      e.preventDefault()

      const body = {
        "name":username,
        "subject":subject,
        "message":description,
        "email":email,
        "phone":number
      }

      contactUser(body).then(res =>{
        if(res === 'success'){
          setUsername("")
          setEmail("")
          setNumber("")
          setSubject("")
          setDescription("")
        }
      })
    }

    
    var slideIndex = 1;
    useEffect(() => {
        showSlides(slideIndex);
    },[])
    function smoothScroll(){
      // Smooth scrolling
      const headerEl = document.querySelector(".header");
      const allLinks = document.querySelectorAll("nav_link");
      allLinks.forEach(link =>
        link.addEventListener("click", e => {
          e.preventDefault();
          const href = link.getAttribute("href");
          // Scroll back to top
          if (href === "#"){
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }
          console.log(href)
          // Scroll to other links
          if (href != "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({ behavior: "smooth" });
          }

          // if(!href.startsWith("#")){
          //   window.open(href, "_blank");
          // }

          // Close mobile navigation
          if (link.classList.contains("main-nav__link")) {
            headerEl.classList.toggle("nav-open");
          }
        })
      );
    }
    
    function openMenu(){
        console.log("open")
        const headerEl = document.querySelector(".header");
        const btnNavEl = document.querySelector(".btn--mobile-nav");
        const close = document.querySelector(".close_menu");
        const open = document.querySelector(".open_menu");
        console.log(open)
        
        btnNavEl.addEventListener("click", () => {
            // open.classList.style.display = "none"
            headerEl.classList.toggle("nav-open");
            // close.classList.style.display = "block";
            
        });
    }
    function closeMenu(){
        console.log("close")
    }

    function currentSlide(n) {
        showSlides((slideIndex = n));
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
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
        <div id="home" className="section background_1">
          {/*  */}
          {/* <!-- Header --> */}
          <div className="overlay"></div>
          <header className="header-top">
            <div className="header">
              <a href="/" onClick={smoothScroll}>
                <img src={logo} className="logo" alt="Theree cousins energy company logo" />
              </a>
              <nav className="main-nav">
                <ul className="main-nav__list gap-4 ">
                  <li className="main-nav__item">
                    <a className="main-nav__link nav_link" href="#work" onClick={smoothScroll}>
                      Our Services
                    </a>
                  </li>
                  <li>
                    <a className="main-nav__link" href="#about" onClick={smoothScroll}>
                      About Us
                    </a>
                  </li>
                  <li className="main-nav__item">
                    <a className="main-nav__link" href="#consultancy">
                      Consultancy
                    </a>
                  </li>
                  <li className="main-nav__item">
                    <a className="main-nav__link nav-cta" href="#contact">
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
          <div className="container">
            <div className="">
              {/* <div className="col-md-2"></div> */}
              <div className="flex flex-col justify-between items-center gap-8 m-auto wow fadeIn" data-wow-delay="0.4s">
                <h1 className="headline-heading text-base md:text-xl w-4/5 md:w-3/5 p-4 md:pt-12">
                  Nyeri National Polytechnic- Supporting Innovation and Training in Vocational Education Sector( NNP-SITVES) Project.
                </h1>
                <h2 className="rotate text-base md:text-lg md:pt-10 ">
                  TRAINING & EXTENTION SERVICES, PROFESSIONAL CONSULTANCY, SERVICES & PRODUCTS MARKET PLACE, RESEARCH &
                  INNOVATION
                </h2>

                <a href="#work" className="btn btn-default smoothScroll wow fadeInUp pb-4 md:pt-6" data-wow-delay="1s">
                  Get started
                </a>
              </div>
              {/* <div className="col-md-2"></div> */}
            </div>
          </div>
        </div>
        {/* <!-- end home --> */}

        {/* <!-- start work --> */}
        <div id="work" className="section">
          <div className="container p-12">
            <div className="row">
              <div className="col-md-12 wow bounce pb-10">
                <h2 className="h1-b text-2xl">WHAT WE OFFER</h2>
                <div className="w3_agile_image pb-10">
                  <img src={one} alt="" className="block" />
                </div>
              </div>
            </div>

            <div className="flex">
              <div className="wow fadeInLeft text-left" data-wow-delay="0.4s">
                <p className="services_header text-lg">
                  We provide an absolute list of <span>Superior</span> dairy farming digital services.
                </p>
                {/* <p>
                  Dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                  euismod tincidunt ut laoreet.
                </p> */}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-between pt-6">
              <div className=" wow fadeInUp work-card" data-wow-delay="0.2s">
                <div className="">
                  <div className="media-body">
                    <img src={training} className="img-responsive" alt="portfolio img" />
                    <h3 className="h3-b p-2">Training & Extention Services</h3>
                    <p className="pl-2 pr-2 pb-2 text-base">NDRIC is state-of-the-art facility, one of its kinds in the country. We pride ourselves on
                      providing cutting edge training in dairy processing. Our core focus is to disseminate actionable
                      know-how on value addition to small scale and medium-sized enterprises (SMEs)...</p>
                  </div>
                </div>
              </div>

              <div className=" wow fadeInUp work-card" data-wow-delay="0.2s">
                <div className="">
                  <div className="media-body">
                    <div>
                      <img src={innovation} className="img-responsive" alt="consultation img" />
                    </div>
                    <h3 className="h3-b p-2">Research, Consultancy & Innovation</h3>
                    <p className="pl-2 pr-2 pb-2 text-base">NDRIC will run an incubation program that will encourage partnerships that will stimulate
                      mutual benefit to our trainees industry. Budding youth and women entrepreneurs in dairy
                      processing will be given priority in terms of space allocation and resource mobilization...</p>
                  </div>
                </div>
              </div>

              <div className=" wow fadeInUp work-card" data-wow-delay="0.2s">
                <div className="">
                  <div className="media-body">
                    <div>
                      <img src={market} className="img-responsive" alt="consultation img" />
                    </div>
                    <h3 className="h3-b p-2">Services & Products market place</h3>
                    <p className="pl-2 pr-2 pb-2 text-base">NDRIC provides a digital marketplace through a digital platform that creates an avenue for both
                      buyers and sellers to transact over a product or a service. A digital dairy platform is a
                      software/hardware system that matches the supply and the demand ...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end work --> */}

        {/* <!-- start about --> */}
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
                <p>
                  Nyeri Dairy Research and Innovation Centre (NDRIC) is the research and innovation wing of Nyeri National Polytechnic. This
                  institutional research and innovation centre was established in 2022 to leverage on research and innovation needs of dairy
                  value chain. This is in line the Nyeri National Polytechnic (NNP)’s mandate of training, research and consultancy. It’s
                  mandated to undertake training, multidisciplinary research in industrial and allied technologies in agro processing....
                  <Link to="/about" className='link about_link' rel="noopener noreferrer" >Show more.</Link>
                  {/* <a href="/about" className='link about_link' rel="noopener noreferrer">Show more</a> */}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="mis-stage w3_agileits_welcome_grids">
                {/* <!-- The element to select and apply miSlider to - the className is optional --> */}
                <ol className="mis-slider">
                  <li className="mis-slide">
                    <figure>
                      <figcaption>Consultation</figcaption>
                      <img src={innovation2} alt=" " className="about_images" />
                    </figure>
                  </li>
                  <li className="mis-slide">
                    <figure>
                      <figcaption>Training Services & Capacity Building</figcaption>
                      <img src={training2} alt=" " className="about_images" />
                    </figure>
                  </li>
                  <li className="mis-slide">
                    <figure>
                      <figcaption>Market Place</figcaption>
                      <img src={market} alt=" " className="about_images" />
                    </figure>
                  </li>
                  <li className="mis-slide">
                    <figure>
                      <figcaption>Research, Development and Innovation</figcaption>
                      <img src={innovate} alt=" " className="about_images" />
                    </figure>
                  </li>
                  <li className="mis-slide">
                    <figure>
                      <figcaption>Laboratory Testing and Analysis</figcaption>
                      <img src={research} alt=" " className="about_images" />
                    </figure>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end about --> */}

        {/* <!-- start portfolio --> */}
        <div id="portfolio" className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 wow bounce pb-10">
                <h2 className="h1-b text-2xl text-center">OUR MISSION & VISION</h2>
                <div className="w3_agile_image pb-10">
                  <img src={one} alt=" " className="block" />
                </div>
              </div>
              <div className="flex flex-col-reverse md:grid md:grid-cols-2  justify-between gap-4 pl-4 pr-4 md:pr-12 md:pl-12 mobile-view">
                <div className="wow fadeInLeft text-left" data-wow-delay="0.4s">
                  <h4 className="h4-b">Our Vision</h4>
                  <p className="text-base pt-1">To be a center of excellence in Agri-food research, technology and innovation.</p>
                  <h4 className="h4-b pt-1">Our Mission</h4>
                  <p className="text-base pt-1">To undertake agri-food research and transfer innovative technologies for socio-economic development.</p>
                  <h4 className="h4-b pt-1">ROLE OF NDRIC IN THE BIG FOUR AGENDA</h4>
                  <p className="text-base pt-1">
                    The Big Four Agenda is the country’s major transformation blueprint being implemented within five years from 2017-2022.
                    Government seeks to enhance manufacturing contribution to GDP from 9.2 % to 20 % by 2022 through investment in core
                    areas such as, agro-processing among other sectors. Enablers for this sector include investment in SME’s development
                    interventions and improved market access.
                  </p>
                </div>
                <div className="wow fadeInRight" data-wow-delay="0.4s">
                  <div className="team-thumb">
                    <img src={team} className="img-responsive img_box_shadow" alt="portfolio img" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:grid md:grid-cols-2  justify-between gap-4 pl-4 pr-4 md:pr-12 md:pl-12 mobile-view pt-4">
                <div className="wow fadeInRight" data-wow-delay="0.4s">
                  <div className="team-thumb">
                    <img src={research2} className="img-responsive img_box_shadow" alt="portfolio img" />
                  </div>
                </div>
                <div className="wow fadeInLeft text-left text-base" data-wow-delay="0.4s">
                  <p className="text-base">
                    Research, Technology and Innovation plays a central role in driving the manufacturing sector through technological
                    developments and transfer. Innovations in manufacturing technology and product developments enhance the value chain
                    thereby upgrading products and enhancing global competitiveness of the sector. In addition, technology transfer will
                    make production faster, simpler and more efficient for our manufacturing industries thus raising the manufacturing
                    sector share to GDP. As part of the support towards realization of “Big Four Agenda” (MTP III), NDRIC is positioning
                    itself as a key player in the establishment of state of the art agrifood research and incubation spaces with latest
                    technology. This is expected to impart skills and develop cutting edge value addition and manufacturing technologies
                    that will be transferred to MSMEs in agro-processing.
                  </p>
                  <p className="text-base pt-1">
                    Attainment of Food security and nutrition is dependent on increased agricultural productivity and post-harvest
                    management (value addition) which are largely technology driven.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end portfolio --> */}

        {/* <!-- start portfolio --> */}
        <div id="consultancy" className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 wow bounce pb-10">
                <h2 className="h1-b text-2xl text-center">OUR CONSULTANTS</h2>
                <div className="w3_agile_image pb-10">
                  <img src={one} alt=" " className="block" />
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-between">
              <div className="wow fadeInLeft text-left pl-4 pr-4 md:pr-12 md:pl-12" data-wow-delay="0.4s">
                <p className="text-base">
                  We have a team of consultants, who are extremely trained and experienced with past exposure in the corporate world as
                  distinguished professionals.
                </p>
                <p className="text-base pt-1">
                  The consulting team maintains a subtle accessibility and working relationship which guarantee our clients full-time
                  attention whenever they need our help.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-4">
              <div className="slideshow-container">
                <div className="mySlides fade_corousel">
                  <div className="flex flex-col md:grid md:grid-cols-2 justify-between gap-4 mobile-view">
                    <div className="wow fadeInRight">
                      <div className="courasel_img">
                        <img src={female} className="block" alt="portfolio img" />
                      </div>
                    </div>
                    <div className="wow fadeInLeft text-left pl-2 pr-2 md:pr-12">
                      <h4 className="h4-b">Grace Migwi</h4>
                      <p className="pt-1 text-base">
                        Grace Migwi is a self-motivated professional, with over 15 year’s expertise in Agricultural education, Research,
                        Innovation and technology transfer. She holds a Master’s degree in Agricultural Education from Egerton University.
                      </p>
                      <p className="text-semibold">Areas of Expertise:</p>
                      <ul className="pt-1 text-base list-disc pl-6">
                        <li>Consultancy in research and training.</li>
                        <li>Agricultural innovation generation and technology transfer.</li>
                        <li>Agricultural education curriculum development and preparation of training modules.</li>
                        <li>Capacity building for farmers and associations.</li>
                      </ul>
                      <p className="pt-1 text-base">
                        She is a trainer in Agro-processing in Nyeri National Polytechnic and has coordinated various local and
                        international projects such as:-
                      </p>
                      <ul className="pt-1 text-base list-disc pl-6">
                        <li>Young Africa Works.</li>
                        <li>Supporting Innovation in Vocational Education Sector (SITVES).</li>
                        <li>Kenya Education For Employment Programme.</li>
                        <li>Lorna Young Foundation.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mySlides fade_corousel">
                  <div className="flex flex-col md:flex-row md:grid md:grid-cols-2 justify-between gap-4 mobile-view">
                    <div className="wow fadeInRight">
                      <div className="courasel_img">
                        <img src={male} className="block" alt="portfolio img" />
                      </div>
                    </div>
                    <div className="wow fadeInLeft text-left pr-12 pl-2 pr-2 md:pr-12">
                      <h4 className="h4-b">Francis Karanja Nguku</h4>
                      <p className="pt-1 text-base">
                        <strong>Francis Nguku</strong> is a Principal trainer with the Department of Vocational and technical Training based
                        at The Nyeri national polytechnic, with over 20 years’ experience in Monitoring and Evaluation, Workplace safety and
                        health Audit, Water Audit. Funding proposals writing, conducting applied research and research report writing.
                      </p>
                      <p className="pt-1 text-base">
                        He holds a Masters degree in public health from the University of Nairobi, Postgraduate Diploma from Egerton
                        University and Bachelor’s degree in science from the University of Nairobi.
                      </p>
                      <p className="pt-1 text-base">
                        Currently he is the senior researcher in the ongoing Sitves research project which brings together The Nyeri dairy
                        sector MSMEs stakeholders, the County government of Nyeri, The Nyeri National polytechnic and the Canadians partners
                        Colleges and Institutes of Canada ( CICan).
                      </p>
                    </div>
                  </div>
                </div>

                {/* <a className="prev md:pl-8" onClick={() => plusSlides(1)}>
                  &#10094;
                </a>
                <a className="next md:pr-8" onClick={() => plusSlides(2)}>
                  &#10095;
                </a> */}
              </div>
              <br />

              <div style={{textAlign: "center"}}>
                <span className="dot_corousel" onClick={() => currentSlide(1)}></span>
                <span className="dot_corousel" onClick={() => currentSlide(-1)}></span>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end portfolio --> */}

        {/* <!-- start contact --> */}
        <div id="contact" className="section">
          <div className="container">
            <div className="row">
              <div className="wow bounce pb-10">
                <h2 className="h1-b text-2xl text-center">CONTACT US</h2>
                <div className="w3_agile_image pb-10">
                  <img src={one} alt=" " className="block" />
                </div>
              </div>
                <div className="flex flex-col md:grid md:grid-cols-2 justify-bwtween gap-4 pl-4 pr-4 md:pr-12 md:pl-12">
                    <div className="gap-4 wow fadeInUp" data-wow-delay="0.2s">
                        <address className="gap-4">
                          <p className="pt-2">
                              <i className="fa fa-phone"></i> 0712 265 579 / 0731 049 294
                          </p>
                          <p className="pt-2">
                              <i className="fa fa-envelope-o"></i> dairy@thenyeripoly.ac.ke
                          </p>
                          <p className="pt-2">
                              <i className="fa fa-map-marker"></i> The Nyeri National Polytechnic, Along Mumbi Road, Nyeri, Kenya.
                          </p>
                        </address>
                    </div>
                    <div className="flex flex-col justify-between gap-4 w-full wow fadeInUp" data-wow-delay="0.2s">
                        <form role="form" onSubmit={contactUs} autoComplete='off'>
                          <input name="name" type="text" className="form-control" id="name" placeholder="Your Name" value={username} onChange={handleName} required/>
                          <input name="email" type="email" className="form-control" id="email" placeholder="Your Email" value={email} onChange={handleEmail} required/>
                          <input name="phone" type="text" className="form-control" id="phone" placeholder="Your Phone Number" value={number} onChange={handleNumber}/>
                          <input name="subject" type="text" className="form-control" id="phone" placeholder="Subject" value={subject} onChange={handleSubject}/>
                          <textarea name="message" rows="5" cols={3} type="text" className="form-control" id="message" placeholder="Your Message" value={description} onChange={handleDescription} required></textarea>
                          {/* <input name="send" type="submit" className="form-control" id="send" value="Send Message" /> */}
                          {props.isLoading ? <button className='form-control bg-green color-white success-border font-bold m-auto disabled:opacity-50' disabled>Loading...</button>:
                              <button type="submit" className="form-control bg-green color-white success-border font-bold m-auto cursor-pointer">Send Message</button>
                          }
                        </form>
                    </div>
                </div>
            </div>
          </div>
        </div>
        {/* <!-- end contact --> */}

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
                      <a href="https://www.facebook.com/Nyeri-Poly-Digi-Dairy-110260514979697" className="fa fa-facebook"></a>
                    </li>
                    <li>
                      <a href="https://twitter.com/DigidairyNyeri" className="fa fa-twitter"></a>
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
        {/* <!-- end footer --> */}
      </div>
    </>
  );
}
const mapStateToProps = state =>({
  isLoading:state.users.isAdding,
})

export default connect(mapStateToProps,{contactUser})(React.memo(Website));
