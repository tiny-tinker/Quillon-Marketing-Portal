import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Menu from './components/Menu/Menu'
import Introduction from './sections/Introduction/Introduction'
import BenefitSection from './sections/Benefits/BenefitSection'
import Explorer from './sections/Explorer/Explorer'
import Network from './sections/Network/Network'
import WebApp from './sections/WebApp/WebApp'

const Home = props => (
    <React.Fragment>
      <Menu/>
      <Introduction/>
      <BenefitSection/>
      <Explorer/>
      <Network/>
      <WebApp/>
    </React.Fragment>
);

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/about-us')
}, dispatch);

export default connect(
    null,
    mapDispatchToProps
)(Home)