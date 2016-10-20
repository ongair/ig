import React, { Component } from 'react';
// import { Link } from 'react-router';
import { Menu } from 'semantic-ui-react';

class Nav extends Component {
  componentWillReceiveProps(newProps) {
    console.log("Nav: We have received new props", newProps)
  }

  render() {
    return (
      <Menu>
        <Menu.Item header>Ongair</Menu.Item>
      </Menu>
    );
  }
};

export default Nav;
