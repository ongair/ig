import React, { Component } from 'react'
import Comment from './Comment'

class PostThread extends Component {

  componentDidMount() {
    const postId = this.props.params.postId
    this.props.requestComments(postId)
  }

  render() {
    return (
      <div className='thread main'>
        { this.props.comments.map((comment, i) => <Comment {...this.props} key={i} i={i} comment={comment} />) }
      </div>
    );
  }
};

export default PostThread;
