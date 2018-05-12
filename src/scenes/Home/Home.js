import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Stay from './scenes/Stay/Stay';
import Journey from './scenes/Journey/Journey';
import Roadmap from './scenes/Roadmap/Roadmap';
import WhitePaper from './scenes/WhitePaper/WhitePaper';
import Team from './scenes/Team/Team';
import Connect from './scenes/Connect/Connect';
import Footer from './components/Footer/Footer';

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>Welcome home!</p>
    <Stay />
    <Journey />
    <Roadmap />
    <WhitePaper />
    <Team />
    <Connect />
    <Footer />
  </div>
);

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push('/about-us')
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(Home);
