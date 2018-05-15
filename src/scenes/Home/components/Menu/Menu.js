import React from 'react';
import { Link } from 'react-scroll';
import './menu.css';
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.onClickMenu = this.onClickMenu.bind(this);
    this.state = {
      menuOpen: false
    };
  }

  onClickMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    return (
      <div
        id="st-nav"
        ref={stNav => {
          this.stNav = stNav;
        }}
      >
        <a
          className={
            this.state.menuOpen
              ? 'st-nav-trigger menu-is-open'
              : 'st-nav-trigger'
          }
          onClick={this.onClickMenu}
        >
          Menu<span> </span>
        </a>

        <nav
          id="st-main-nav"
          ref={stMainNav => {
            this.stMainNav = stMainNav;
          }}
        >
          <ul
            ref={navUl => {
              this.navUl = navUl;
            }}
            className={this.state.menuOpen ? 'is-visible' : ''}
          >
            <li>
              <Link
                to="home-section"
                className="page-scroll hvr-underline-from-center"
                spy={true}
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="benefit-section"
                className="page-scroll hvr-underline-from-center"
                spy={true}
                smooth={true}
                duration={500}
              >
                Benefits
              </Link>
            </li>
            <li>
              <Link
                to="explore-section"
                className="page-scroll hvr-underline-from-center"
                spy={true}
                smooth={true}
                duration={500}
              >
                Statistics
              </Link>
            </li>
            <li>
              <Link
                to="network-section"
                className="page-scroll hvr-underline-from-center"
                spy={true}
                smooth={true}
                duration={500}
              >
                Network
              </Link>
            </li>
            <li>
              <Link
                to="roadmap-section"
                className="page-scroll hvr-underline-from-center"
                spy={true}
                smooth={true}
                duration={500}
              >
                Roadmap
              </Link>
            </li>
            <li>
              <Link
                to="team-section"
                className="page-scroll hvr-underline-from-center"
                spy={true}
                smooth={true}
                duration={500}
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                to="connect-section"
                className="page-scroll hvr-underline-from-center"
                spy={true}
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Menu;
