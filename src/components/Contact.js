import React, { Component } from 'react';
import { Item, Icon, Segment } from 'semantic-ui-react';

class Contact extends Component {
  render() {
    const contactId = this.props.params.contactId;
    const contact = this.props.contacts.find(c => { return c.id === contactId; });

    return (
      <Item.Group className="contact">
        <Item>
          <Item.Image className="avatar" size='tiny' src={contact.picture} />
          <Item.Content>
            <Item.Header>{contact.name}</Item.Header>
            <Item.Description>
              { contact.bio }
            </Item.Description>

            <Segment.Group horizontal>
              <Segment>
                <Icon name='announcement' />
                { contact.followerCount } posts
              </Segment>
              <Segment>
                <Icon name='like' />
                { contact.followerCount } followers
              </Segment>
              <Segment>
                <Icon name='like' />
                3 likes
              </Segment>
            </Segment.Group>
          </Item.Content>
        </Item>
      </Item.Group>
    )
    // return (
    //   <Card className="contacts">
    //     <Image src={contact.picture} />
    //     <Card.Content>
    //       <Card.Header>
    //         { contact.name }
    //       </Card.Header>
    //     </Card.Content>
    //   </Card>
    // )
  }
}

export default Contact;
