// React Imports
import React, { Fragment } from 'react';

// import { ReactComponent as HeroLogo } from './svg/logo.svg';
import HeroLogo from './svg/logo.svg';

import waveTop from './svg/wavesTop.svg';
import waveBot from './svg/wavesBot.svg';

//  CSS Import
import './style.css';

// Content import

function Hero() {
  return (
    <Fragment>
      <header className="hero" id="hero">
        <img src={waveTop} class="waves" alt="" />
        <div class="container">
          <div class="hero__item">
            <img src={HeroLogo} class="hero__item__img" alt="" />
            <div>
              <h1>ModernKiwi LTD</h1>
              <p>Gaming, Streaming, and Web Development live</p>
            </div>
          </div>
        </div>
        <img src={waveBot} class="waves waves--bot" alt="" />
      </header>
    </Fragment>
  );
}

export default Hero;
