import React from "react";
import Head from "../pages/Head";
import Nft from "../pages/Nft";
import About from "../pages/About";
import Picture from "../pages/Picture";
import Marq from "../pages/Marq";
import Project from "../pages/Project";
import Oursourcing from "../pages/Oursourcing";

function Home() {
  return (
    <section className="home">
      <Head />
      <Nft />
      <About />
      <Picture />
      <Marq />
      <Project />
      <Oursourcing />
    </section>
  );
}

export default Home;
