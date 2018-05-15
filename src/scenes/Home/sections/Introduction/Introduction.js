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
  'Quillon. A new stable cryptocurrency with an algorithm based central bank supporting a user friendly business to consumer software as a service platform. Featuring state-of-the-art privacy, self-governance, masternodes and a superior user experience';
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
              Our Stable Foundation
              <Typist.Backspace count={21} delay={200} />
              YOUR STRONG INVESTMENT
            </Typist>
          </div>
          <p className="subtitle">{sectionDescription}</p>
          <BorerDecoratedButton label="EXPLORE" />
          <div className="scrollIndicatorContainer">
            <ScrollIndicator />
          </div>
        </div>
      </Element>
    );
  }
}

export default Introduction;
