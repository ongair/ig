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

  hasAccount() {
    return this.props.account != null
  }

  getLinkForLocation(location) {
    switch (this.getPath(location)) {
      case 'posts':
        return '/inbox'
      case 'inbox':
        return '/'
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

  getRightMenu() {
    return (
      <Menu.Menu position='right'>
        <Menu.Item name='dashoard'>
          Reports
        </Menu.Item>
      </Menu.Menu>
    )
  }

  getMenu() {
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
        <Menu.Item>
          <Link to='/reports'>Reports</Link>
        </Menu.Item>
      </Menu>
    )
  }

  render() {
    return this.getMenu();
  }
};

export default Nav;
