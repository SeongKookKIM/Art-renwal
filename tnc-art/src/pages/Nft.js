import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Nft() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="nft">
      <div className="nft-title">
        <div className="first-title">
          <p>DIGITAL ART THAT</p>
          <h3>MANIFEST CREATIVITY,</h3>
        </div>
        <div className="second-title">
          <p>EXHILARATING NFTS</p>
          <h3>CRAFTED TO EXCELLENCE,</h3>
        </div>
        <div className="third-title">
          <p>MARRYING AESTHETICISM AND BLOCKCHAIN</p>
          <h3>TO EMPOWER ARTISTS,</h3>
        </div>
        <div className="four-title">
          <p>CREATING OUR NICHE</p>
          <h3>IN THE CACOPHOONY OF NFTS,</h3>
        </div>
        <div className="five-title">
          <p>DITCHING THE HUMDRUM TO</p>
          <h3>YIELD THE HYPER-IMAGINATIVE</h3>
        </div>

        <div className="small-logo">
          <img src="assets/image/Logo.svg" alt="nft-logo" />
        </div>
      </div>
      <div
        className="nft-pic"
        data-aos="flip-down"
        data-aos-duration="3000"
      ></div>

      <div className="nft-contents">
        <p data-aos="fade-up" data-aos-delay="500">
          A Non-Fungible Token (NFT) Is A Unique Digital Asset Powered By
          Blockchain Technology.
        </p>
        <p data-aos="fade-up" data-aos-delay="700">
          It Ensures Digital Ownership And Represents Real-World Objects Like
          Art And Many More.
        </p>
        <p data-aos="fade-up" data-aos-delay="900">
          Ther Are Plenty Of Opportunities For Visual Arts With This Technology,
        </p>
        <p data-aos="fade-up" data-aos-delay="1100">
          And We're Banking On Its Potential To Disrupt The Space.
        </p>
      </div>
    </section>
  );
}

export default Nft;
