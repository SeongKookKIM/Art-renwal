import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="about">
      <div className="about-title">
        <h2 data-aos="flip-left" data-aos-duration="2000">
          ABO
        </h2>

        <h2 data-aos="flip-right" data-aos-duration="2000" data-aos-delay="500">
          <span>TNC</span>
          <span>ART</span>
          UT
        </h2>
      </div>

      <div className="about-left about-content-box">
        <div className="about-pic">
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="500"
          ></div>
        </div>
        <div
          className="about-content"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="500"
        >
          <p>Tnc Art Is The Creative Arm Of The Dubai-Based</p>
          <p>Blockchain Firm TNC Group.</p>
          <p>Launched In 2018, TNC Is One Of The Fastest-Growing</p>
          <p>Compaies In The Blockchain Industry,</p>
          <p>With Over 500 Developers And Experts Providing</p>
          <p>Blockchain Solutions All Over The World.</p>
        </div>
      </div>

      <div className="about-right about-content-box">
        <div
          className="about-content"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="500"
        >
          <p>Driven By The Passion And Creative</p>
          <p>Genius Of Over A Dozen Digital Artists,</p>
          <p>TNC Art Aims To Carve Out A Uique</p>
          <p>Space In The-Hyper-Imaginative NFT World.</p>
          <p>And, With The Insanely Successful</p>
          <p>Lady Apes Collection That Earned</p>
          <p>A Coveted Spot On Opensea's Top 10,</p>
          <p>We Are One Step Closer To This Goal.</p>
        </div>
        <div className="about-pic">
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="500"
          ></div>
        </div>
      </div>

      <div className="about-left about-content-box">
        <div className="about-pic">
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="500"
          ></div>
        </div>
        <div
          className="about-content"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="500"
        >
          <p>It is The NFT Space That Motivates Us To</p>
          <p>Pick Up Our Stylus - That Inspires Us To</p>
          <p>Render Color To Our Imagination.</p>
          <p>Powered By The Opportunities Of NFT Technology,</p>
          <p>Countless Talented Artists From</p>
          <p>All Over The World Can Now Tell Us Their Storied.</p>
          <p>And It Is This Space That We Want To Give Back To.</p>
          <p>Join Us This Incredible Artistic Journey.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
