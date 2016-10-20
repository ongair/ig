import React, { Component } from 'react'
import { Item, Icon } from 'semantic-ui-react'
import TimeAgo from 'react-timeago'
import { Link } from 'react-router'
var numeral = require('numeral')

class PostItem extends Component {
  render() {
    const p = this.props.post
    const likes = numeral(p.likes).format('0a')
    const comments = numeral(p.comments).format('0a')
    
    return (
      <Item className='post'>
        <div className='tiny image'>
          <Link to={`/posts/${p.id}`}>
            <img src={ p.media } alt={ p.text } />
          </Link>
        </div>
        <Item.Content>
          <Item.Meta><TimeAgo date={p.time * 1000} /></Item.Meta>
          <Item.Description>
            { p.text }
          </Item.Description>
          <div className="stats">
            <div className="stat likes">
              <Icon name='like' className='large' />
              <span className="count">
                { likes }
              </span>
            </div>
            <div className="stat likes">
              <Icon name='comment' className='large' />
              <span className="count">
                { comments }
              </span>
            </div>
          </div>
        </Item.Content>
      </Item>
    );
  }
};

export default PostItem;
