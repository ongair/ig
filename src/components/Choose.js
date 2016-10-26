import React, { Component } from 'react';
import { Link } from 'react-router';
import { Input, Label, Menu } from 'semantic-ui-react';

export default class Choose extends Component {
  state = { activeItem: 'inbox' }
  componentDidMount() {
    // Fetch this components posts
    if (this.props.account)
      this.props.requestPosts(this.props.account.username);
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render() {
    const { activeItem } = this.state

    return (
      <div className="before ">
      <center>
        <Menu size='small' className="fluid" vertical>
          <Link to="/inbox">
            <Menu.Item name='posts' active={activeItem === 'posts'} onClick={this.handleItemClick}>
              <Label color='teal'>{this.props.posts.length}</Label>
            Posts
            </Menu.Item>
          </Link>

          <Link to="/inbox">
            <Menu.Item name='inbox' active={activeItem === 'inbox'} onClick={this.handleItemClick}>
              <Label>{this.props.posts.length}</Label>
              Direct Inbox
            </Menu.Item>
          </Link>

          <Link to="/reports">
            <Menu.Item name='reports' active={activeItem === 'reports'} onClick={this.handleItemClick}>
              <Label>1</Label>
              Reports
            </Menu.Item>
          </Link>
        </Menu>
      </center>
    </div>
    )
  }
}
