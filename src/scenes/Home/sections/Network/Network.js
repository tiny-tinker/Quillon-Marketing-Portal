import React from 'react';
import { Element } from 'react-scroll';
import trade from './images/trade.png';
import tradesatoshiBadge from './images/tradesatoshi_badge.svg';
import tradesatoshiBadgeHover from './images/tradesatoshi_badge_hover.svg';
import cryptoPia from './images/cryptopia.svg';
import cryptoPiaHover from './images/cryptopia_hover.svg';
import earn from './images/earn.png';
import miningPool from './images/mining_pool.svg';
import miningPoolHover from './images/mining_pool_hover.svg';
import masterNode from './images/master_node.svg';
import masterNodeHover from './images/master_node_hover.svg';
import hold from './images/hold.png';
import windows from './images/windows.svg';
import windowsHover from './images/windows_hover.svg';
import apple from './images/apple.svg';
import appleHover from './images/apple_hover.svg';
import ubuntu from './images/ubuntu.svg';
import ubuntuHover from './images/ubuntu_hover.svg';
import chooseWallet from './images/choose_wallet.svg';
import ellipseDecorateH from './images/ellipseDecorateH.png';
import ellipseDecorateV from './images/ellipseDecorateV.png';
import './Network.css';

const sectionDescription =
  'Being a new cryptocurrency, Quillon offers a low barrier for entry. Join our network today and become one of the first to take advantage of our revolutionary monetary policy. You can trade, hold and earn our currency via the links below';
class Network extends React.Component {
  render() {
    return (
      <Element name="network-section" className="network-section">
        <div className="container">
          <div className="title">NETWORK</div>
          <p className="section-description">{sectionDescription}</p>
          <div className="row">
            <div className="col-md-4">
              <img className="trade-image" src={trade} role="presentation" />
              <div className="trade-title">TRADE</div>
              <div className="row hover12">
                <div className="d-block mx-auto">
                  <figure>
                    <img
                      className="bottom trade-subImage"
                      src={tradesatoshiBadge}
                      role="presentation"
                    />
                    <img
                      className="top trade-subImage"
                      src={tradesatoshiBadgeHover}
                      role="presentation"
                    />
                  </figure>
                </div>
              </div>
              <div className="row hover12">
                <div className="d-block mx-auto">
                  <figure>
                    <img
                      className="bottom trade-subImage"
                      src={cryptoPia}
                      role="presentation"
                    />
                    <img
                      className="top trade-subImage"
                      src={cryptoPiaHover}
                      role="presentation"
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-md-4 earn-block">
              <img className="earn-image" src={earn} role="presentation" />
              <div className="earn-title">EARN</div>
              <div className="row hover12">
                <div className="d-block mx-auto">
                  <figure>
                    <img
                      className="bottom earn-subImage"
                      src={miningPool}
                      role="presentation"
                    />
                    <img
                      className="top earn-subImage"
                      src={miningPoolHover}
                      role="presentation"
                    />
                  </figure>
                </div>
              </div>
              <div className="row hover12">
                <div className="d-block mx-auto">
                  <figure>
                    <img
                      className="bottom earn-subImage"
                      src={masterNode}
                      role="presentation"
                    />
                    <img
                      className="top earn-subImage"
                      src={masterNodeHover}
                      role="presentation"
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-md-4 hold-block">
              <img className="hold-image" src={hold} role="presentation" />
              <div className="hold-title">HOLD</div>
              <div className="row pl-3 pr-3 hold-subImage">
                <div className="hover12 ml-auto position-relative">
                  <div className="d-block">
                    <figure>
                      <img
                        className="bottom"
                        src={windows}
                        role="presentation"
                      />
                      <img
                        className="top"
                        src={windowsHover}
                        role="presentation"
                      />
                    </figure>
                  </div>
                </div>
                <div className="hover12 mx-auto position-relative">
                  <div className="d-block">
                    <figure>
                      <img className="bottom" src={apple} role="presentation" />
                      <img
                        className="top"
                        src={appleHover}
                        role="presentation"
                      />
                    </figure>
                  </div>
                </div>
                <div className="hover12 mr-auto position-relative">
                  <div className="d-block">
                    <figure>
                      <img
                        className="bottom"
                        src={ubuntu}
                        role="presentation"
                      />
                      <img
                        className="top"
                        src={ubuntuHover}
                        role="presentation"
                      />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="row chooseWallet-image">
                <div className="d-block mx-auto">
                  <figure>
                    <img
                      className="bottom"
                      src={chooseWallet}
                      role="presentation"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src={ellipseDecorateH}
          className="ellipseDecorateH"
          role="presentation"
        />
        <img
          src={ellipseDecorateV}
          className="ellipseDecorateV"
          role="presentation"
        />
      </Element>
    );
  }
}

export default Network;
