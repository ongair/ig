import React, { Component } from 'react'
import { Icon, Statistic } from 'semantic-ui-react'
var numeral = require('numeral')

class Reports extends Component {

  componentDidMount() {
    // Load the data
    if (this.props.account)
      this.props.requestPosts(this.props.account.username);
  }

  render() {
    const { Group, Label, Value } = Statistic

    const numPosts = numeral(this.props.posts.length).format('0a')
    var comments = this.props.posts.map(function(p) { return p.comments })
    const numComments = comments.reduce(function(p,c) { return p+c}, 0)
    const numCommentsFormatted = numeral(numComments).format('0a')
    const numReplies = numeral(numComments / 4).format('0a')

    return (
      <div className="main reports">
        <div className="overview">
          <span className="title">Overview</span>
          <Group>
            <Statistic>
              <Value>
                <Icon name='camera retro' />
                { numPosts }
              </Value>
              <Label>POSTS</Label>
            </Statistic>
            <Statistic>
              <Value>
                <Icon name='comment outline' />
                { numCommentsFormatted }
              </Value>
              <Label>COMMENTS</Label>
            </Statistic>
            <Statistic>
              <Value>
                <Icon name='reply' />
                { numReplies }
              </Value>
              <Label>REPLIES</Label>
            </Statistic>
          </Group>
        </div>
      </div>
    )
  }
}

export default Reports
