import React, { Component } from 'react'
import TimeAgo from 'react-timeago'
import { Feed } from 'semantic-ui-react'
import Swipeout from 'rc-swipeout'
import 'rc-swipeout/assets/index.css'
var classNames = require('classnames')

class Comment extends Component {

  onDelete() {
    this.props.removeComment(this.props.comment.id, this.props.comment)
  }

  onReply() {
    console.log('Replying', this.props.comment)
  }

  render() {
    const comment = this.props.comment
    const isReply = comment.username === this.props.account.username;

    const classes = classNames('ui feed', { 'reply' : isReply })
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
        <div className={ classes }>
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
