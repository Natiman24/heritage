'use client';
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import Head from 'next/head';
import "./Page.css";

export const metadata = {
  title: 'Heritage',
  description: 'Welcome to Heritage Ethiopian Arts and Crafts',
};

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  const [scroll, setScroll] = useState(true);

  const toggleNav = () => {
    setNavOpen(!navOpen);
    setScroll(!scroll);
    if (scroll) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    }
    else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }
  };


  
  return (
    <div className="landing-page-container">
      <div className="landing-page-title-container">
        <Image
            src="/Images/Heritage Logo 2.png"
            alt="Logo"
            width={100}
            height={100}
            className="landing-page-title-logo"
          />
        <h1 className="landing-page-title">
          Ethiopian Arts & Crafts Gallery
        </h1>
      </div>

      <div className="landing-page-content-container">

        <div className='landing-page-mobile-nav-icon-container'>
          <Image
            src="/Svgs/hamburger light.svg"
            alt="hamburger icon"
            width={30}
            height={30}
            className="landing-page-mobile-nav-icon"
            onClick={toggleNav}
          /> 
        </div>

        <div className="landing-page-nav-container">
          <ul className="landing-page-nav-list">
            <li className="landing-page-nav-item"><Link href="/">HOME</Link></li>
            <li className="landing-page-nav-item dot"></li>
            <li className="landing-page-nav-item"><Link href="/">EVENTS</Link></li>
            <li className="landing-page-nav-item dot"></li>
            <li className="landing-page-nav-item"><Link href="/">GALLERY</Link></li>
            <li className="landing-page-nav-item dot"></li>
            <li className="landing-page-nav-item"><Link href="/">BLOG</Link></li>
            <li className="landing-page-nav-item dot"></li>
            <li className="landing-page-nav-item"><Link href="/">CONTACT US</Link></li>
          </ul>
        </div>

        <div className={`landing-page-mobile-nav-container ${navOpen ? 'open' : ''}`} onClick={toggleNav}>
          <div className='landing-page-mobile-nav-close-icon' onClick={toggleNav}>
            x
          </div>
          <ul className="landing-page-nav-list-mobile" onClick={(e) => e.stopPropagation()}>
            <li className="landing-page-nav-item"><Link href="/">HOME</Link></li>
            <li className="landing-page-nav-item"><Link href="/">EVENTS</Link></li>
            <li className="landing-page-nav-item"><Link href="/">GALLERY</Link></li>
            <li className="landing-page-nav-item"><Link href="/">BLOG</Link></li>
            <li className="landing-page-nav-item"><Link href="/">CONTACT US</Link></li>
          </ul>
        </div>

        <div className="landing-page-content">
          <p className="landing-page-content-text">
            Thank you for visiting our Ethiopian Arts & Crafts Gallery! Our Website is currently under construction as we prepare to bring you an inspiring
            digital showcase of Ethiopian creativity and heritage.
            <br />
            <br />
            Please check back soon!

            <br />
            For inquiries, feel free to contact us at benzevents845@gmail.com
            <br />
            or follow us on our social media channels. 
          </p>
        </div>
        
      </div>
    </div>
  );
}
