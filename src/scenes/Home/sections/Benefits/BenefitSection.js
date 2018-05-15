import React from 'react'
import {Element} from 'react-scroll'
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
    title: 'PRIVACY CONSCIOUS',
    description: 'Lorem ipsum dolor sit ameto quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
  },
  {
    id: 2,
    imageUrl: userFocused,
    title: 'USER FOCUSED',
    description: 'Lorem ipsum dolor sit ameto quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
  },
  {
    id: 3,
    imageUrl: monetaryStable,
    title: 'MONETARY STABLE',
    description: 'Lorem ipsum dolor sit ameto quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
  },
  {
    id: 4,
    imageUrl: decentralizedGovernance,
    title: 'DECENTRALIZED GOVERNANCE',
    description: 'Lorem ipsum dolor sit ameto quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
  },
];

class BenefitSection extends React.Component {

  renderFeatures(features) {
    return features.map(feature => <div key={feature.id} className="col-sm-6"> <Feature imageUrl={feature.imageUrl} title={feature.title} description={feature.description} /> </div>);
  }

  render() {
    return (
      <Element name="benefit-section" className="benefit-section">
        <div className="container">
          <div className="title">OUR BENEFITS</div>
          <div className="row">
            {this.renderFeatures(features)}
          </div>
        </div>
        <img className="benefitBottomImage" src={benefitBottomBorder}/>
      </Element>
    )
  }
}

export default BenefitSection;