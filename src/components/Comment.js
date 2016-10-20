import React, { Component } from 'react'
import TimeAgo from 'react-timeago'
import { Feed, Icon } from 'semantic-ui-react'

class Comment extends Component {

  render() {
    const comment = this.props.comment
    return (
      <Feed.Event>
        <Feed.Content>
          <Feed.Date><TimeAgo date={comment.time * 1000} /></Feed.Date>
          <Feed.Summary content={comment.username} />
          <Feed.Extra text content={comment.text} />
        </Feed.Content>
      </Feed.Event>
    )
  }
}

export default Comment
