import React from 'react';
import { Element } from 'react-scroll';
import Feature from './components/Feature/Feature';
import privacyConscious from './images/privacy_conscious.png';
import userFocused from './images/user_focused.png';
import monetaryStable from './images/monetary_stable.png';
import decentralizedGovernance from './images/decentralized_governance.png';
import benefitBottomBorder from './images/benefit_border.png';
import './BenefitSection.css';

const features = [
  {
    id: 1,
    imageUrl: privacyConscious,
    title: 'Protecting Privacy',
    description:
      'A focus on ensuring the privacy of users is at the heart of quillon’s Foundation. Both the Quillon platform and the quillon blockchain will always prioritize the protection of the privacy of its users.'
  },
  {
    id: 2,
    imageUrl: userFocused,
    title: 'User Focused',
    description:
      'For a modern application to find lasting success it needs to radically focus on the needs of users. Quillon minimizes the barriers of entry, and provide an outstanding user experience.'
  },
  {
    id: 3,
    imageUrl: monetaryStable,
    title: 'Monetary Stable',
    description:
      'Cryptocurrencies need to become more than a store of value and object of speculation. Reducing volatility and ensuring the validity of quillon as a unit of account as well as a means of payment will be a big step towards mainstream adoption.'
  },
  {
    id: 4,
    imageUrl: decentralizedGovernance,
    title: 'Decentralized Governance',
    description:
      'Allowing quillon’s community to actively contribute to the future of the currency is key to ongoing success. Through the use of novel governance mechanisms, quillon allows both autonomous funding and implementation of changes to the underlying blockchain.'
  }
];

class BenefitSection extends React.Component {
  renderFeatures(features) {
    return features.map(feature => (
      <div key={feature.id} className="col-sm-6">
        {' '}
        <Feature
          imageUrl={feature.imageUrl}
          title={feature.title}
          description={feature.description}
        />{' '}
      </div>
    ));
  }

  render() {
    return (
      <Element name="benefit-section" className="benefit-section">
        <div className="container">
          <div className="title">OUR BENEFITS</div>
          <div className="row">{this.renderFeatures(features)}</div>
        </div>
        <img className="benefitBottomImage" src={benefitBottomBorder} />
      </Element>
    );
  }
}

export default BenefitSection;
