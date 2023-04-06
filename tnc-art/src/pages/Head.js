import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "jquery.ripples";

function Head() {
  const rippleRef = useRef(null);

  useEffect(() => {
    const $ripples = $(rippleRef.current);

    $ripples.ripples({
      resolution: 256,
      dropRadius: 10,
      perturbance: 0.04,
      duration: 500,
      perturbance: 0.02,
    });

    return () => {
      $ripples.ripples("destroy");
      $ripples.off("mousmove");
    };
  }, []);

  return (
    <section className="head" ref={rippleRef}>
      <div className="header-fixed">
        <h2>TNC ART</h2>
        <div className="hambuger-menu">
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
}

export default Head;
