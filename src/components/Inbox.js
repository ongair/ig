import React from 'react';
import Thread from './Thread';
import { Feed } from 'semantic-ui-react';

const Inbox = React.createClass({

  componentDidMount() {
    // Fetch this components posts
    // this.props.requestPosts(this.props.account.username);
  },

  componentWillReceiveProps(newProps) {
    console.log("Inbox: We have received new props", newProps)
  },

  render() {
    // console.log("Looking for threads for ", this.props.account)
    // // this.props.requestPosts(this.props.account.username)
    const notEmpty = (this.props.posts && this.props.posts.length > 0);
    // debugger
    // if (!notEmpty)
    //   {this.props.posts.map((thread, i) => <Thread {...this.props} key={i} i={i} thread={thread} />)}

    return (
      <Feed size='large'>

      </Feed>
    );
  }
})

export default Inbox;
