import React from 'react';
import Nav  from './Nav';

const Main = React.createClass({

  componentDidMount() {
    // hide the loader
    // document.getElementById('loader').setAttribute('hidden', null)
  },

  render() {
    return (
      <div>
        <Nav {...this.props} />
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

export default Main;
