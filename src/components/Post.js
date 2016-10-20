import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';
import TimeAgo from 'react-timeago';
import { Link } from 'react-router';

class Post extends Component {
  render() {
    // const contact = this.props.contacts.find(c => { return c.id === this.props.thread.contact; });
    const p = this.props.post
    console.log("Post", p)
    return (
      <Item>
        <Item.Image size='tiny' src={p.media} />
        <Item.Content>
          <Item.Meta><TimeAgo date={p.time * 1000} /></Item.Meta>
          <Item.Description>
            { p.text }
          </Item.Description>
        </Item.Content>
        {/*<Feed.Label>
          <Link to={`/contacts/${contact.id}`}>
            <img src={ contact.picture } alt={contact.name} />
          </Link>
        </Feed.Label>
        <Feed.Content>
          <Feed.Summary>
            <Feed.User>{contact.name}</Feed.User>
            <Feed.Date><TimeAgo date={this.props.thread.lastActivityAt} /></Feed.Date>
          </Feed.Summary>
          <Feed.Extra text>
            { this.props.thread.lastMessage.text }
          </Feed.Extra>
          <Feed.Meta>
            <Feed.Like>
              <Icon name='like' />
              { this.props.thread.likes } likes
            </Feed.Like>
          </Feed.Meta>
        </Feed.Content>*/}
      </Item>
    );
  }
};

export default Post;
