import React from 'react';
import Typist from 'react-typist';
import { Element } from 'react-scroll';
import BorerDecoratedButton from '../../components/BorderDecoratedButton/BorderDecoratedButton';
import ScrollIndicator from './components/ScrollIndicator/ScrollIndicator';
import './introduction.css';
import logo from '../../../../assets/images/logo.png';

const typistCursor = {
  show: true,
  blink: true,
  element: '|',
  hideWhenDone: true,
  hideWhenDoneDelay: 500
};

const sectionDescription =
  'Quillon. A new cryptocurrency focusing on providing a superior user experience, including a focus on reducing volatility through financial services while retaining the independent spirit cryptocurrencies were created with. Featuring state-of-the-art privacy, self-governance and masternodes.';
class Introduction extends React.Component {
  //
  render() {
    return (
      <Element id="home-section" className="intro-section">
        <div className="container">
          <a href="#" className="logo-container">
            <img src={logo} className="logo" />
          </a>
          <div className="title">
            <Typist cursor={typistCursor}>
              Our Solid Foundation
              <Typist.Backspace count={21} delay={200} />
              Your Sound Currency
            </Typist>
          </div>
          <p className="subtitle">{sectionDescription}</p>
          <div className="scrollIndicatorContainer">
            <ScrollIndicator />
          </div>
        </div>
      </Element>
    );
  }
}

export default Introduction;
