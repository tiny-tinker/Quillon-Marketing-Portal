import React, { Component } from 'react';
import { Element } from 'react-scroll';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import FaGithub from 'react-icons/lib/fa/github';
import FaSlack from 'react-icons/lib/fa/slack';
import FaMedium from 'react-icons/lib/fa/medium';
import FaCopyright from 'react-icons/lib/fa/copyright';

import './footer.css';

export default class Footer extends Component {
  render() {
    return (
      <Element name="contact-section" className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12 mt-4">
              <div className="menu-title mt-2 mb-3"> website menu </div>
              <div className="row menu-content">
                <div className="col-6 col-md-5">
                  <div className="menu-item">
                    <a href="#introduction-section">Introduction</a>
                  </div>
                  <div className="menu-item">
                    <a href="#benefits-section">Benefits</a>
                  </div>
                  <div className="menu-item">
                    <a href="#explore-section">Explore</a>
                  </div>
                  <div className="menu-item">
                    <a href="#network-section">Network</a>
                  </div>
                  <div className="menu-item">
                    <a href="#webapp-section">Web App</a>
                  </div>
                </div>
                <div className="col-6 col-md-5">
                  <div className="menu-item">
                    <a href="#roadmap-section">Roadmap</a>
                  </div>
                  <div className="menu-item">
                    <a href="#whitepaper-section">Whitepaper</a>
                  </div>
                  <div className="menu-item">
                    <a href="#team-section">Team</a>
                  </div>
                  <div className="menu-item">
                    <a href="#">Connect</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 mt-4">
              <div className="social-title mt-2 mb-3"> follow us </div>
              <div className="row">
                <div className="col-3 col-md-2">
                  <div>
                    <a
                      href="https://www.facebook.com/quilloncurrency/"
                      target="blank"
                    >
                      <FaFacebook color="white" size="35" />
                    </a>
                  </div>
                </div>
                <div className="col-3 col-md-2">
                  <a
                    href="https://www.instagram.com/QuillonCurrency"
                    target="blank"
                  >
                    <FaInstagram color="white" size="35" />
                  </a>
                </div>
                <div className="col-3 col-md-2">
                  <a href="https://twitter.com/QuillonCurrency" target="blank">
                    <FaTwitter color="white" size="35" />
                  </a>
                </div>
                <div className="col-3 col-md-2">
                  <a href="https://github.com/QuillonCurrency" target="blank">
                    <FaGithub color="white" size="35" />
                  </a>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-3 col-md-2">
                  <a
                    href="https://www.linkedin.com/company/quillonfoundation/"
                    target="blank"
                  >
                    <FaLinkedin color="white" size="35" />
                  </a>
                </div>
                <div className="col-3 col-md-2">
                  <a href="https://quilloncurrency.slack.com" target="blank">
                    <FaSlack color="white" size="35" />
                  </a>
                </div>
                <div className="col-3 col-md-2">
                  <a href="https://medium.com/quillon" target="blank">
                    <FaMedium color="white" size="35" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 mt-4">
              <div className="newsletter-title mt-2 mb-3"> newsletter </div>
              <div className="newsletter-description mb-3">
                Get Exclusive Content <br /> offers and more
              </div>
              <div id="newsletterSignUpDiv" />
            </div>
          </div>
          <div className="copyright">
            <div className="line"> </div>
            <div className="text">
              {' '}
              <FaCopyright />2018 quillon.co{' '}
            </div>
          </div>
        </div>
      </Element>
    );
  }
}
