import React, { Component } from 'react';

import './tabs.css';

export default class Tabs extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="Tabs">
        {React.Children.map(this.props.children, (child, i) => {
          let className = 'Tabs_Tab';
          if (child.key === this.props.active) {
            className = 'Tabs_Tab Tabs_Tab-active';
          }
          return (
            <div
              className={className}
              onClick={() => {
                this.props.onChange(child.key);
              }}
            >
              {child}
              <div className="TabLine mt-3" />
            </div>
          );
        })}
      </div>
    );
  }
}
