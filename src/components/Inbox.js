import React from 'react';
import PostItem from './Post';
import { Item } from 'semantic-ui-react';

const Inbox = React.createClass({

  componentDidMount() {
    // Fetch this components posts
    if (this.props.account)
      this.props.requestPosts(this.props.account.username);
  },

  render() {
    // const notEmpty = (this.props.posts && this.props.posts.length > 0)
    return (
      <Item.Group className="posts main">
        { this.props.posts.map((post, i) => <PostItem {...this.props} key={i} i={i} post={post} />) }
      </Item.Group>
    );
  }
})

export default Inbox;
