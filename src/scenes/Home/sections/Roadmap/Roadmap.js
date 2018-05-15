import React, { Component } from 'react';

import Tabs from './components/Tabs/Tabs';
import Item from './components/Item/Item';
import './roadmap.css';

import rightEllipse from './images/roadmapRightEllipse.png';

export default class Roadmap extends Component {
  constructor(props) {
    super(props);
    this.state = { active: 'Tab1' };
  }
  render() {
    const TabContent1 = [
      'Quillon Foundation Incorporation',
      'Quillon Team Expansion',
      'Self-Governance Budget Voting',
      'Transparency Reporting'
    ];
    const TabContent2 = [
      'Web Platform Launch',
      'Hosting as a Service',
      'Multi-currency Support',
      'Currency Exchange Facilities'
    ];
    const TabContent3 = [
      'LibZerocoin 2.0',
      'Double Anonymous Send and Receive',
      'TOR Network Integration',
      'Smart Contract Engine',
      'Atomic Swap Implementation'
    ];
    const TabContent4 = [
      'Decentralized Financial Reserve Bank',
      'Peer to Peer Lending',
      'Reputation Token Integration',
      'Additional Automatic Stabilizers',
      'Micro Finance Integrations'
    ];

    const content = {
      Tab1: TabContent1,
      Tab2: TabContent2,
      Tab3: TabContent3,
      Tab4: TabContent4
    };

    const description1 = [
      'description for Quillon Foundation Incorporation',
      'description for Quillon Team Expansion',
      'description for Self-Governance Budget Voting',
      'description for Transparency Reporting'
    ];
    const description2 = [
      'description for Web Platform Launch',
      'description for Hosting as a Service',
      'description for Multi-currency Support',
      'description for Currency Exchange Facilities'
    ];
    const description3 = [
      'description for LibZerocoin 2.0',
      'description for Double Anonymous Send and Receive',
      'description for TOR Network Integration',
      'description for Smart Contract Engine',
      'description for Atomic Swap Implementation'
    ];
    const description4 = [
      'description for Decentralized Financial Reserve Bank',
      'description for Peer to Peer Lending',
      'description for Reputation Token Integration',
      'description for Additional Automatic Stabilizers',
      'description for Micro Finance Integrations'
    ];

    const description = {
      Tab1: description1,
      Tab2: description2,
      Tab3: description3,
      Tab4: description4
    };
    return (
      <div className="roadmap-section pt-5">
        <div className="container text-center">
          <div className="title text-white">ROADMAP</div>
          <div className="description text-white">
            Take a look at our roadmap to see how we intent to fulfill our
            vision.
            <br />
            Over the coming weeks and months we have a lot in store to bring you
            the most successful currency possible
          </div>
          <div className="rightEllipse">
            <img src={rightEllipse} style={{ height: '50%' }} />
          </div>
          <div className="roadmapDetail">
            <Tabs
              active={this.state.active}
              onChange={active => this.setState({ active })}
            >
              <div key="Tab1"> GOVERNANCE </div>
              <div key="Tab2"> QUILLON PLATFORM </div>
              <div key="Tab3"> CORE BLOCKCHAIN </div>
              <div key="Tab4"> FINANCIAL SERVICES </div>
            </Tabs>
            <div className="tabContent mt-5 pb-5">
              <Item
                title={content[this.state.active][0]}
                content={description[this.state.active][0]}
              />
              <Item
                title={content[this.state.active][1]}
                content={description[this.state.active][1]}
              />
              <Item
                title={content[this.state.active][2]}
                content={description[this.state.active][2]}
              />
              <Item
                title={content[this.state.active][3]}
                content={description[this.state.active][3]}
              />
              {content[this.state.active].length > 4 ? (
                <Item
                  title={content[this.state.active][4]}
                  content={description[this.state.active][4]}
                />
              ) : (
                <div> </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
