import "../assets/homepage.css"
import "../assets/homepage.scss"

import d1 from '../assets/images/d-1.png'
import d2 from '../assets/images/d-2.png'
import d3 from '../assets/images/d-3.png'
import d4 from '../assets/images/d-4.png'
import d5 from '../assets/images/d-5.png'
import who from '../assets/images/who-img.jpg'
import w1 from '../assets/images/w-1.png'
import quote from '../assets/images/quote.png'
import c1 from '../assets/images/c-1.png'
import loca from '../assets/images/location-white.png'
import map from '../assets/images/map-img.png'
import tele from '../assets/images/telephone-white.png'
import enve from '../assets/images/envelope-white.png'
import insta from '../assets/images/insta.png'
import fb from '../assets/images/fb.png'
import twit from '../assets/images/twitter.png'
import youtube from '../assets/images/youtube.png'
import linked from '../assets/images/linkedin.png'

export const Homepage =()=>{
    return(
        <>
            <div className="hero_area">
                <div className="model-back"></div>
                <header className="header_section">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-lg custom_nav-container pt-3">
                        <a className="navbar-brand" href="index.html">
                            <span>
                            DUY AY VY
                            </span>
                        </a>

                        <div className="navbar-collapse" id="navbarSupportedContent">
                            <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <a className="link-item" href="/">Home </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="link-item" href="#about"> About </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="link-item" href="#feedback"> Feedback </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="link-item" href="#contact">Contact us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="link-item" href="/signin">Login</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        </nav>
                    </div>
                </header>
                <section className=" slider_section position-relative">
                <div className="container">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col">
                                    <div className="detail-box">
                                        <div>
                                            <h2>
                                                welcome to

                                            </h2>
                                            <h1>
                                                DUY AY VY
                                            </h1>
                                            <p>
                                                CTY TNHH 8 THANH VIEN: Dung-Duy-Duy-Nhan-Trinh-Ha-Phuoc-Vy
                                            </p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
            </div>


            <section className="do_section layout_padding" id="about">
                <div className="container">
                <div className="heading_container">
                    <h2>
                    What we do
                    </h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna
                    </p>
                </div>
                <div className="do_container">
                    <div className="box arrow-start arrow_bg">
                    <div className="img-box">
                        <img src={d1} alt=""/>
                    </div>
                    <div className="detail-box">
                        <h6>
                        Marketing
                        </h6>
                    </div>
                    </div>
                    <div className="box arrow-middle arrow_bg">
                    <div className="img-box">
                        <img src={d2} alt=""/>
                    </div>
                    <div className="detail-box">
                        <h6>
                        Development
                        </h6>
                    </div>
                    </div>
                    <div className="box arrow-middle arrow_bg">
                    <div className="img-box">
                        <img src={d3} alt=""/>
                    </div>
                    <div className="detail-box">
                        <h6>
                        Html5
                        </h6>
                    </div>
                    </div>
                    <div className="box arrow-end arrow_bg">
                    <div className="img-box">
                        <img src={d4} alt=""/>
                    </div>
                    <div className="detail-box">
                        <h6>
                        Css
                        </h6>
                    </div>
                    </div>
                    <div className="box ">
                    <div className="img-box">
                        <img src={d5} alt=""/>
                    </div>
                    <div className="detail-box">
                        <h6>
                        Wordpress
                        </h6>
                    </div>
                    </div>
                </div>
                </div>
            </section>


            <section className="who_section ">
                <div className="container">
                <div className="row">
                    <div className="col-md-5">
                    <div className="img-box">
                        <img src={who} alt=""/>
                    </div>
                    </div>
                    <div className="col-md-7">
                    <div className="detail-box">
                        <div className="heading_container">
                        <h2>
                            WHO WE ARE?
                        </h2>
                        </div>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud
                        </p>
                        <div>
                        <a href="">
                            Read More
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            <section className="work_section layout_padding">
                <div className="container">
                <div className="heading_container">
                    <h2>
                    CREATIVE WORKS
                    </h2>
                    <p>
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation
                    </p>
                </div>
                <div className="work_container layout_padding2">
                    <div className="box b-1">
                    <img src={w1} alt=""/>
                    </div>
                    <div className="box b-2">
                    <img src={w1} alt=""/>

                    </div>
                    <div className="box b-3">
                    <img src={w1} alt=""/>

                    </div>
                    <div className="box b-4">
                    <img src={w1} alt=""/>

                    </div>
                </div>
                </div>
            </section>

            <section className="client_section" id="feedback">
                <div className="container">
                <div className="heading_container">
                    <h2>
                    WHAT CUSTOMERS SAY
                    </h2>
                </div>
                <div className="carousel-wrap ">
                    <div className="owl-carousel">
                    <div className="item">
                        <div className="box">
                        <div className="img-box">
                            <img src={c1} alt=""/>
                        </div>
                        <div className="detail-box">
                            <h5>
                            Tempor incididunt <br/>
                            <span>
                                Dipiscing elit
                            </span>
                            </h5>
                            <img src={quote} alt=""/>
                            <p>
                            Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="box">
                        <div className="img-box">
                            <img src={c1} alt=""/>
                        </div>
                        <div className="detail-box">
                            <h5>
                            Tempor incididunt <br/>
                            <span>
                                Dipiscing elit
                            </span>
                            </h5>
                            <img src={quote} alt=""/>
                            <p>
                            Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="box">
                        <div className="img-box">
                            <img src={c1} alt=""/>
                        </div>
                        <div className="detail-box">
                            <h5>
                            Tempor incididunt <br/>
                            <span>
                                Dipiscing elit
                            </span>
                            </h5>
                            <img src={quote} alt=""/>
                            <p>
                            Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            <section className="target_section layout_padding2">
                <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                    <div className="detail-box">
                        <h2>
                        1000+
                        </h2>
                        <h5>
                        Years of Business
                        </h5>
                    </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                    <div className="detail-box">
                        <h2>
                        20000+
                        </h2>
                        <h5>
                        Projects Delivered
                        </h5>
                    </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                    <div className="detail-box">
                        <h2>
                        10000+
                        </h2>
                        <h5>
                        Satisfied Customers
                        </h5>
                    </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                    <div className="detail-box">
                        <h2>
                        1500+
                        </h2>
                        <h5>
                        Cups of Coffee
                        </h5>
                    </div>
                    </div>
                </div>
                </div>
            </section>


            <section className="contact_section layout_padding" id="contact">
                <div className="container">

                <div className="heading_container">
                    <h2>
                    Request A Call Back
                    </h2>
                </div>
                <div className="">
                    <div className="">
                    <div className="row">
                        <div className="col-md-9 mx-auto">
                        <div className="contact-form">
                            <form action="">
                            <div>
                                <input type="text" placeholder="Full Name "/>
                            </div>
                            <div>
                                <input type="text" placeholder="Phone Number"/>
                            </div>
                            <div>
                                <input type="email" placeholder="Email Address"/>
                            </div>
                            <div>
                                <input type="text" placeholder="Message" className="input_message"/>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button type="submit" className="btn_on-hover">
                                Send
                                </button>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="map_img-box">
                    <img src={map} alt=""/>
                </div>
                </div>
            </section>


            <section className="info_section ">
                <div className="container">
                <div className="row">
                    <div className="col-md-3">
                    <div className="info_contact">
                        <h5>
                        About Shop
                        </h5>
                        <div>
                        <div className="img-box">
                            <img src={loca} width="18px" alt=""/>
                        </div>
                        <p>
                            Address
                        </p>
                        </div>
                        <div>
                        <div className="img-box">
                            <img src={tele} width="12px" alt=""/>
                        </div>
                        <p>
                            +01 1234567890
                        </p>
                        </div>
                        <div>
                        <div className="img-box">
                            <img src={enve} width="18px" alt=""/>
                        </div>
                        <p>
                            demo@gmail.com
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div className="info_info">
                        <h5>
                        Informations
                        </h5>
                        <p>
                        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        </p>
                    </div>
                    </div>

                    <div className="col-md-3">
                    <div className="info_insta">
                        <h5>
                        Instagram
                        </h5>
                        <div className="insta_container">
                        <div>
                            <a href="">
                            <div className="insta-box b-1">
                                <img src={insta} alt=""/>
                            </div>
                            </a>
                            <a href="">
                            <div className="insta-box b-2">
                                <img src={insta} alt=""/>
                            </div>
                            </a>
                        </div>

                        <div>
                            <a href="">
                            <div className="insta-box b-3">
                                <img src={insta} alt=""/>
                            </div>
                            </a>
                            <a href="">
                            <div className="insta-box b-4">
                                <img src={insta} alt=""/>
                            </div>
                            </a>
                        </div>
                        <div>
                            <a href="">
                            <div className="insta-box b-3">
                                <img src={insta} alt=""/>
                            </div>
                            </a>
                            <a href="">
                            <div className="insta-box b-4">
                                <img src={insta} alt=""/>
                            </div>
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div className="info_form ">
                        <h5>
                        Newsletter
                        </h5>
                        <form action="">
                        <input type="email" placeholder="Enter your email"></input>
                        <button>
                            Subscribe
                        </button>
                        </form>
                        <div className="social_box">
                        <a href="">
                            <img src={fb} alt=""/>
                        </a>
                        <a href="">
                            <img src={twit} alt=""/>
                        </a>
                        <a href="">
                            <img src={linked} alt=""/>
                        </a>
                        <a href="">
                            <img src={youtube} alt=""/>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            <section className="container-fluid footer_section">
                <p>
                &copy; 2020 All Rights Reserved By
                <a href="https://html.design/">Free Html Templates</a>
                </p>
            </section>
        </>
    );
}