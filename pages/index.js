import React, { useState, useEffect } from "react";
// import 'antd/dist/antd.css';
import { Wrapper } from "../components/Wrapper";
import Nav from "../components/Nav";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

const Home = props => {
  return (
    <Wrapper>
      <Nav />
      <Gallery>
        test
      </Gallery>
      <div className='pad' />
      <Footer />
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
      `}</style>
    </Wrapper>
  );
};

export default Home;
