import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import './readmore.css';

class ReadMore extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div className="collapseDiv">
        <Button
          className="readMoreButton"
          onClick={this.toggle}
          style={{ marginBottom: '1rem' }}
        >
          Read More +
        </Button>
        <Collapse className="contentDiv" isOpen={this.state.collapse}>
          <Card className="readMoreDetail">
            <CardBody className="cardBody">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default ReadMore;
