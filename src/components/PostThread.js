import React, { Component } from 'react';
import { Feed, Icon } from 'semantic-ui-react';
import TimeAgo from 'react-timeago';
import { Link } from 'react-router';

class PostThread extends Component {

  componentDidMount() {
    const postId = this.props.params.postId;
    console.log("Post id", postId);
  }

  render() {
    // const contact = this.props.contacts.find(c => { return c.id === this.props.thread.contact; });
    return (
      <div></div>
    );
  }
};

export default PostThread;
