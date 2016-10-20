import React from 'react';
import Thread from './Thread';
import { Feed } from 'semantic-ui-react';

const Inbox = React.createClass({
  componentWillReceiveProps(newProps) {
    const { account } = newProps.account
    if (account && account.selected) {
      this.props.requestPosts(account.username)
    }
  },

  render() {
    // console.log("Looking for threads for ", this.props.account)
    // // this.props.requestPosts(this.props.account.username)
    return (
      <Feed size='large'>
        {this.props.threads.map((thread, i) => <Thread {...this.props} key={i} i={i} thread={thread} />)}
      </Feed>
    );
  }
})

export default Inbox;
