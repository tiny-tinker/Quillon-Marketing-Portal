import React from 'react';
import flow from './images/flow.png';
import iMacPCS from './images/iMacs.png';
import { Element } from 'react-scroll';
import './WebApp.css';

class WebApp extends React.Component {
  render() {
    return (
      <Element id="webApp-section" className="webApp-section">
        <img src={flow} className="flow" role="presentation" />
        <div className="container">
          <img src={iMacPCS} className="iMacPCS" role="presentation" />
          <div className="smallTitle">INTRODUCING</div>
          <div className="bigTitle">QUILLON WEB APP</div>
          <p className="sectionDescription">
            Lorem ipsum dolor sit ameto quisquam est, qui dolorem ipsum quia
            dolor sit amet, consectetur, adipisci velit, sed quia non numquam
            eius modi tempora incidunt ut labore et dolore magnam aliquam
            quaerat voluptatem
          </p>
        </div>
      </Element>
    );
  }
}

export default WebApp;
