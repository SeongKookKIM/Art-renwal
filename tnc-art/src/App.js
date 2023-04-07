import React, { useEffect } from "react";
import "./Style.css";
import Home from "./components/Home";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".nft",
          start: "top-=600px center",
          end: "top+=350px center",
          scrub: 1,
        },
        onComplete: () => {
          gsap.set(".small-logo", {
            position: "fixed",
            bottom: "50px",
            right: "50px",
            zIndex: 9999,
          });
        },
      })
      .from(".first-title", { yPercent: "500", duration: "2" })
      .from(".second-title", { yPercent: "500", duration: "2" })
      .from(".third-title", { yPercent: "500", duration: "2" })
      .from(".four-title", { yPercent: "500", duration: "2" })
      .from(".five-title", { yPercent: "500", duration: "2" })
      .from(".small-logo", { opacity: "0", y: "50", duration: "1" });

    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
