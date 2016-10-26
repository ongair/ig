import React from 'react';
import PostItem from './Post';
import { Item, Button } from 'semantic-ui-react';

const Inbox = React.createClass({

  componentDidMount() {
    // Fetch this components posts
    if (this.props.account)
      this.props.requestPosts(this.props.account.username)
  },

  render() {

    const posts = this.props.posts.filter(p => p.comments > 0)

    return (
      <div className='posts main'>
        <Button.Group basic labeled widths='3'>
          <Button icon='mail outline' active={true} content='Inbox'/>
          <Button icon='list layout' content='All' />
        </Button.Group>
        <Item.Group>
          { posts.map((post, i) => <PostItem {...this.props} key={i} i={i} post={post} />) }
        </Item.Group>
      </div>
    );
  }
})

export default Inbox;
