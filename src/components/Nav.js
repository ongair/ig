import React, { Component } from 'react'
import { Link } from 'react-router'
import { Menu, Icon } from 'semantic-ui-react'

class Nav extends Component {

  getPath(location) {
    return location.pathname.split('/')[1]
  }

  getIconForLocation(location) {
    switch (this.getPath(location)) {
      case 'inbox':
        return 'home'
      case 'posts':
        return 'arrow left'
      case '':
      default:
        return 'instagram'
    }
  }

  getLinkForLocation(location) {
    switch (this.getPath(location)) {
      case 'posts':
        return '/inbox'
      case 'inbox':
      default:
        return null
    }
  }

  getTitleForLocation(location) {
    switch (this.getPath(location)) {
      case 'inbox':
      case 'posts':
        return this.props.account.name
      default:
        return 'Ongair'
    }

  }

  render() {
    const { location } = this.props
    const iconClass = this.getIconForLocation(location)
    const title = this.getTitleForLocation(location)
    const link = this.getLinkForLocation(location)
    return (
      <Menu>
        <Menu.Item>
          <Link to={link}>
            <Icon name={ iconClass } />
          </Link>
        </Menu.Item>
        <Menu.Item header>{ title }</Menu.Item>
      </Menu>
    );
  }
};

export default Nav;
