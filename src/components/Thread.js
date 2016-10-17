import React, { Component } from 'react';
import { Feed, Image, Icon } from 'semantic-ui-react';

class Thread extends Component {
  render() {
    const contact = this.props.contacts.find(c => { return c.id === this.props.thread.contact; });
    console.log("Contact", contact);
    return (
      <Feed.Event>
        <Feed.Label>
          <img src={ contact.picture } alt={contact.name} />
        </Feed.Label>
        <Feed.Content>
          <Feed.Summary>
            <Feed.User>{contact.name}</Feed.User>
          </Feed.Summary>
          <Feed.Extra text>
            { this.props.thread.lastMessage.text }
          </Feed.Extra>
          <Feed.Meta>
            <Feed.Like>
              <Icon name='like' />
              { this.props.thread.likes } likes
            </Feed.Like>
          </Feed.Meta>
        </Feed.Content>
      </Feed.Event>
    );
  }
  // render() {
  //   const contact = this.props.contacts.find(c => { return c.id === this.props.thread.contact; });
  //   console.log("Contact", contact);
  //   const lastUpdate = new Date(this.props.thread.lastActivityAt).toString();
  //   console.log("Update", lastUpdate);
  //   return (
  //     <div className="item thread">
  //       <div className="image">
  //         <img src={contact.picture} alt={contact.name}/>
  //       </div>
  //       <div className="content">
  //         <a className="header">
  //           { contact.name }
  //         </a>
  //         <div className="meta">
  //           <span>{ lastUpdate }</span>
  //         </div>
  //         <div className="description">
  //           <p>{ this.props.thread.lastMessage.text }</p>
  //         </div>
  //         <div className="extra">
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }
};

export default Thread;
