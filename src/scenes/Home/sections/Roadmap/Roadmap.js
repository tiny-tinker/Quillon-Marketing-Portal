import React, { Component } from 'react';
import { Element } from 'react-scroll';
import Tabs from './components/Tabs/Tabs';
import Item from './components/Item/Item';
import './roadmap.css';

export default class Roadmap extends Component {
  constructor(props) {
    super(props);
    this.state = { active: 'Tab1' };
  }
  render() {
    const TabTitle = [
      'GOVERNANCE  ',
      'QUILLON PLATFORM',
      'CORE BLOCKCHAIN',
      'FINANCIAL SERVICES'
    ];
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
      'Smart Contract Engine'
    ];
    const TabContent4 = [
      'Decentralized Financial Reserve Bank',
      'Peer to Peer Lending',
      'Reputation Token Integration',
      'Additional Automatic Stabilizers'
    ];

    const content = {
      Tab1: TabContent1,
      Tab2: TabContent2,
      Tab3: TabContent3,
      Tab4: TabContent4
    };

    const description1 = [
      'Quillon is in the process of incorporating as a Foundation in Zug, Switzerland. The so-called Crypto Valley will provide the perfect environment to create a base for lasting success.',
      'One of the primary priorities is to grow the Quillon core development team over the coming weeks and months. If you would like to contribute, feel free to get in touch.',
      'Implementing the budget function of the Quillon blockchain and allowing our members to contribute both to changes of the quillon protocol and in choosing which measures are getting funded.',
      'The importance and value of blockchain governance cannot be underestimated. As described Quillon intends to implement cubic root coin lock voting which will further the health of Quillon’s ecosystem.'
    ];
    const description2 = [
      'At the heart of Quillon will be its web platform which will offer unparalleled access and usability to the cryptocurrency community. As we Accelerate development in the coming weeks and month, we will keep you updated on our progress.',
      'Simplifying access to services focused on allowing users to earn, hold and use cryptocurrencies is vital for mainstream adoption. Offering Masternode hosting as a service is a vital first step on the journey.',
      'Allowing users the freedom to choose the currencies they prefer is a long term aspiration of our service. Support of multiple currencies will begin with Ethereum and Bitcoin and expand over time.',
      'Closely related to our intent to support many different currencies we plan to feature exchanging them as well. Quillon will achieve this by facilitating the integration of third party exchanges and fiat onramps.'
    ];
    const description3 = [
      'Ensuring the privacy of our users means we constantly need to reevaluate the features related to it. Starting out Quillon will ensure to deepen its implementation of the library and associated features.',
      'Quillon will over a anonymized mailbox service which will feature an implementation specific discovery mechanism, strengthening our privacy features and further obfuscating both senders and recipients.',
      'Quillon will provide the option to perform transactions, host a node or access the blockchain over the Tor network. This will add an additional layer of security for our users.',
      'To be able to offer the financial service required for the Quillon monetary policy, Quillon will adapt the Ethereum Virtual Machine as well as the Solidity language and its compiler solc. '
    ];
    const description4 = [
      'Fundamental our monetary policy, Quillon will offer a smart contract serving as a decentralized fractional reserve bank. It will help expand and contract the money supply of quillon and help reduce volatility.',
      'Similar to the fractional reserve bank, Quillon will also offer collateralized peer to peer lending which will further allow our users to earn a return on their investment.',
      'During the use of our lending platforms, Quillon will over time begin to integrate or create a reputation token which will allow to fulfill a purpose both in terms of potential interest rates and governance vote weight',
      'To achieve a long term successful cryptocurrency Quillon will have to continuously evaluate additional automatic stabilizer and adjust its monetary policy as those become available. Stay tuned and watch this space!'
    ];

    const description = {
      Tab1: description1,
      Tab2: description2,
      Tab3: description3,
      Tab4: description4
    };

    const progressValue1 = [50, 30, 20, 10];
    const progressValue2 = [30, 40, 10, 10];
    const progressValue3 = [10, 10, 40, 20];
    const progressValue4 = [10, 0, 0, 30];

    const value = {
      Tab1: progressValue1,
      Tab2: progressValue2,
      Tab3: progressValue3,
      Tab4: progressValue4
    };

    return (
      <Element name="roadmap-section" className="roadmap-section pt-5">
        <div className="container text-center">
          <div className="title text-white">ROADMAP</div>
          <div className="description text-white">
            Take a look at our roadmap to see how we intent to fulfill our
            vision.
            <br />
            Over the coming weeks and months we have a lot in store to bring you
            the most successful currency possible
          </div>
          <div className="roadmapDetail">
            <Tabs
              active={this.state.active}
              onChange={active => this.setState({ active })}
            >
              <div key="Tab1"> {TabTitle[0]} </div>
              <div key="Tab2"> {TabTitle[1]} </div>
              <div key="Tab3"> {TabTitle[2]} </div>
              <div key="Tab4"> {TabTitle[3]} </div>
            </Tabs>
            <div className="tabContent mt-5 pb-5">
              {content[this.state.active].map((content, index) => (
                <Item
                  title={content}
                  content={description[this.state.active][index]}
                  progressValue={value[this.state.active][index]}
                />
              ))}
            </div>
          </div>
        </div>
      </Element>
    );
  }
}
