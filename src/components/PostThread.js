import React, { Component } from 'react'
import { Feed, Icon } from 'semantic-ui-react'
import TimeAgo from 'react-timeago'
import { Link } from 'react-router'
import Comment from './Comment'
var numeral = require('numeral')

class PostThread extends Component {

  componentDidMount() {
    const postId = this.props.params.postId
    console.log("Post id", postId)
    this.props.requestComments(postId)
  }

  render() {
    const postId = this.props.params.postId
    return (
      <Feed className='main'>
        { this.props.comments.map((comment, i) => <Comment {...this.props} key={i} i={i} comment={comment} />) }
      </Feed>
    );
  }
};

// <div className='thread main'>
//   <div className='picture'>
//     <img src={ post.media } />
//   </div>
//
//   <Feed>
//     <Feed.Event>
//       <Feed.Content>
//         <Feed.Date><TimeAgo date={post.time * 1000} /></Feed.Date>
//         <Feed.Extra text>{ post.text }</Feed.Extra>
//           <Feed.Meta>
//             <Feed.Like><Icon name='like' className='large' />{post.likes} Likes</Feed.Like>
//             <Feed.Like><Icon name='comment' className='large' />{post.comments} Comments</Feed.Like>
//           </Feed.Meta>
//       </Feed.Content>
//     </Feed.Event>
//   </Feed>
// </div>

export default PostThread;
