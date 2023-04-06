import React from "react";
import Marquee from "react-fast-marquee";

function Marq() {
  return (
    <section className="marquee-wrapper">
      <Marquee
        className="marquee"
        pauseOnHover={false}
        speed={30}
        gradient={false}
        direction={"left"}
      >
        lady ape club &nbsp; lady ape club &nbsp; lady ape club &nbsp; lady ape
        club &nbsp; lady ape club &nbsp; lady ape club
      </Marquee>
      <Marquee
        className="marquee"
        pauseOnHover={false}
        speed={30}
        gradient={false}
        direction={"right"}
      >
        aurora-cats &nbsp; aurora-cats &nbsp; aurora-cats &nbsp; aurora-cats
        &nbsp; aurora-cats &nbsp; aurora-cats
      </Marquee>
      <Marquee
        className="marquee"
        pauseOnHover={false}
        speed={30}
        gradient={false}
        direction={"left"}
      >
        career Shiba inu &nbsp; career Shiba inu &nbsp; career Shiba inu &nbsp;
        career Shiba inu &nbsp; career Shiba inu &nbsp; career Shiba inu
      </Marquee>
      <Marquee
        className="marquee"
        pauseOnHover={false}
        speed={30}
        gradient={false}
        direction={"right"}
      >
        babe ape &nbsp; babe ape &nbsp; babe ape &nbsp; babe ape &nbsp; babe ape
        &nbsp; babe ape
      </Marquee>
      <Marquee
        className="marquee"
        pauseOnHover={false}
        speed={30}
        gradient={false}
        direction={"left"}
      >
        alien planet &nbsp; alien planet &nbsp; alien planet &nbsp; alien planet
        &nbsp; alien planet &nbsp; alien planet
      </Marquee>
      <Marquee
        className="marquee"
        pauseOnHover={false}
        speed={30}
        gradient={false}
        direction={"right"}
      >
        devcat &nbsp; devcat &nbsp; devcat &nbsp; devcat &nbsp; devcat &nbsp;
        devcat
      </Marquee>
      <div className="marquee-title">
        <h3>
          Featured
          <br />
          projects
        </h3>
      </div>
    </section>
  );
}

export default Marq;
