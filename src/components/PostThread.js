import React, { Component } from 'react'
import Comment from './Comment'
import { Button } from 'semantic-ui-react'

class PostThread extends Component {

  componentDidMount() {
    const postId = this.props.params.postId
    this.props.requestComments(postId)
  }

  isAll() {
    return this.props.filter === 'all'
  }

  isDeleted() {
    return this.props.filter === 'deleted'
  }

  isReplied() {
    return this.props.filter === 'replied'
  }

  render() {

    const filter = this.props.filter
    var self = this
    const comments = this.props.comments.filter(function(comment) {
      // return ( self.isAll() )
      switch (filter) {
        case 'all':
          return true
        case 'deleted':
          return comment.deleted
        case 'replied':
          return false
      }
    })

    return (
      <div className='thread main'>
        <Button.Group basic labeled widths='3'>
          <Button icon='mail outline' active={ this.isAll() } content='All' onClick={ this.props.filterComments.bind(null,'all') } />
          <Button icon='trash outline' active={ this.isDeleted() } content='Deleted' onClick={ this.props.filterComments.bind(null,'deleted') } />
          <Button icon='reply' active={ this.isReplied() } content='Replied' onClick={ this.props.filterComments.bind(null,'replied') } />
        </Button.Group>
        { comments.map((comment, i) => <Comment {...this.props} key={i} i={i} comment={comment} />) }
      </div>
    );
  }
};

export default PostThread;
