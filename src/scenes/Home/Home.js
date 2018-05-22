import React from 'react';
import Menu from './components/Menu/Menu';
import Introduction from './sections/Introduction/Introduction';
import BenefitSection from './sections/Benefits/BenefitSection';
import Explorer from './sections/Explorer/Explorer';
import Network from './sections/Network/Network';
import WebApp from './sections/WebApp/WebApp';
import Stay from './sections/Stay/Stay';
import Journey from './sections/Journey/Journey';
import Roadmap from './sections/Roadmap/Roadmap';
import WhitePaper from './sections/WhitePaper/WhitePaper';
import Team from './sections/Team/Team';

const Home = props => (
  <React.Fragment>
    <Menu />
    <Introduction />
    <BenefitSection />
    <Explorer />
    <Network />
    <WebApp />
    <Stay />
    <Journey />
    <Roadmap />
    <WhitePaper />
    <Team />
  </React.Fragment>
);

export default Home;
