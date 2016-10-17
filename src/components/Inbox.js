import React, { Component } from 'react';
import Thread from './Thread';
import { Feed } from 'semantic-ui-react';

class Inbox extends Component {
  render() {
    return (
      <Feed size='large'>
        {this.props.threads.map((thread, i) => <Thread {...this.props} key={i} i={i} thread={thread} />)}
      </Feed>
    );
  }
}

export default Inbox;
