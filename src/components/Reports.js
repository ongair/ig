import React, { Component } from 'react'

class Reports extends Component {

  componentDidMount() {
    // Load the data
    if (this.props.account)
      this.props.requestPosts(this.props.account.username);
  }
  
  render() {
    return (
      <div>
      </div>
    )
  }
}

export default Reports
