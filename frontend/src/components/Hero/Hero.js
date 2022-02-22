// React Imports
import React, { Fragment } from 'react';
// import { Link } from 'react-router-dom';

// React - Bootstrap Imports
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Nav from 'react-bootstrap/Nav';
// import Image from 'react-bootstrap/Image';
// import { LinkContainer } from 'react-router-bootstrap';

//  CSS Import
import './style.css';

// Content import
import heroLogo from './img/heroLogo.png';

function Hero(props) {
  //  Variables
  const showFullPageHero = props.fullscreen ?? false;
  const showNavBar = props.showNavBar ?? false;

  //  Style Variables
  const styles = {
    hero: {
      height: showFullPageHero ? (showNavBar ? `calc(100vh - 56px)` : '100vh') : '60vh',
    },
    heroMainContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',

      width: '100%',
    },
    heroLogoImage: {
      width: '13rem',
    },
  };

  //  Functions
  return (
    <Fragment>
      <section className="hero" id="heroAnchor" style={styles.hero}>
        <div className="herocontainer">
          <div style={styles.heroMainContent}>
            <img src={heroLogo} style={styles.heroLogoImage} alt={'Alt text'} />
            <h2>ModernKiwi LTD</h2>
            <h5>Content Creation, Good vibes, and web development</h5>
            <p>Under Development</p>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Hero;
