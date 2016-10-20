import React, { Component } from 'react'
import TimeAgo from 'react-timeago'
import { Feed } from 'semantic-ui-react'
import Swipeout from 'rc-swipeout'
import 'rc-swipeout/assets/index.css';

class Comment extends Component {

  onDelete() {
    this.props.removeComment(this.props.comment.id)
  }

  onReply() {
    console.log('Replying', this.props.comment)
  }

  render() {
    const comment = this.props.comment
    return (
      <Swipeout
        autoClose
        left={[
          {
            text: 'Reply',
            onPress: () => this.onReply(),
            style: { backgroundColor: 'green', color: 'white' }
          }
        ]}
        right={[
          {
            text: 'Ignore',
            onPress: () => this.onDelete(),
            style: { backgroundColor: 'red', color: 'white' }
          }
        ]}>
        <div className='ui feed'>
          <Feed.Event>
            <Feed.Content>
              <Feed.Date><TimeAgo date={comment.time * 1000} /></Feed.Date>
              <Feed.Summary content={comment.username} />
              <Feed.Extra text content={comment.text} />
            </Feed.Content>
          </Feed.Event>
        </div>
      </Swipeout>
    )
  }
}

export default Comment
