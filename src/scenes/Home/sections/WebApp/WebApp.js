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
          <div className="bigTitle">THE QUILLON PLATFORM</div>
          <p className="sectionDescription">
            Offering a fantastic experience for our users is of the utmost
            importance. We intend to do so by developing the Quilllon Platform.
            A multi-currency web wallet, lending platform and service provider
            for all things crypto.
          </p>
        </div>
      </Element>
    );
  }
}

export default WebApp;
