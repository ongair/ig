import React, { Component } from 'react';
import { Feed, Icon } from 'semantic-ui-react';
import TimeAgo from 'react-timeago';
import { Link } from 'react-router';

class Thread extends Component {
  render() {
    const contact = this.props.contacts.find(c => { return c.id === this.props.thread.contact; });
    return (
      <Feed.Event>
        <Feed.Label>
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
        </Feed.Content>
      </Feed.Event>
    );
  }
};

export default Thread;
