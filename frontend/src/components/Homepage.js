// src/components/HomePage.js
import pulsarCodevImg from '../assets/pulsar-codev.png';
import pulsarInspectorImg from '../assets/pulsar-inspector.png';
import pulsarTestFlowImg from '../assets/pulsar-testcaseGen.png';
import React, { useRef }  from 'react';
import '../styles/Homepage.css'; 
import Header from './Header'; 
import RoundedRectangle from './RoundedRectangle';

function HomePage() {
  const section2Ref = useRef(null);

  const handleExploreClick = () => {
    section2Ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    
    <div className="home-page">
      <section className="section section-1">
        <Header />
        {/* Background image set via CSS */}
        <div className="explore-container">
          <span className="explore-text" onClick={handleExploreClick}>Explore</span>
          <div className="down-chevron"></div>
        </div>
      </section>
      <section className="section section-2" ref={section2Ref}>
      <div >
          <div className="section-2-title">
            For Developers, by Developers. <br /> Powered by AI.
          </div>
          <div className="rounded-rectangle-container">
          <RoundedRectangle 
              imgSrc={pulsarCodevImg}
              title="Pulsar CoDev" 
              paragraphText="Your personal AI-powered Smart Contract CoDeveloper. " 
              buttonText="Chat Now"
              buttonLink="/pulsar-codev"
          />
          <RoundedRectangle 
            imgSrc={pulsarInspectorImg} 
            title="Pulsar Inspector"           
            paragraphText="Analyze Smart Contracts, find vulnerabilities and possible solutions." 
            buttonText="Inspect Now" 
            buttonLink="/pulsar-inspector"
          />
          <RoundedRectangle 
            imgSrc={pulsarTestFlowImg}  
            title="Pulsar TestFlow" 
            paragraphText="Generates execution flows to check proper behavior of your smart contract." 
            buttonText="Generate Now" 
            buttonLink="/pulsar-testflow"
          />

          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
