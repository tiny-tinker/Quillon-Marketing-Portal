import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Footer from './components/Footer/Footer';
import Connect from './scenes/Connect/Connect';
import Team from './scenes/Team/Team';

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>Welcome home!</p>
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
