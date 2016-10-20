import React from 'react';
import { Dropdown, Message, Button } from 'semantic-ui-react';
import Logo from './logo.png';

const Login = React.createClass({

  selectAccount(e) {
    e.preventDefault();
    const selected = this.refs.selectAccountDd.getSelectedItem();

    if (selected) {
      const account = this.props.user.accounts.find(function(acc) { return acc.id === selected.value });
      account.selected = true;
      this.props.selectAccount(account);
    }
  },

  componentWillReceiveProps(newProps) {
    console.log("Login: We have received new props", newProps)
    const { account } = newProps;
    if (account && account.selected) {
      this.context.router.push('/inbox')
    }
  },

  render() {
    const accounts = this.props.user.accounts.map(function(account) {
      return { text: account.name, value: account.id }
    });

    return (
      <div className="login main">
        <a href="/">
          <img src={Logo} className='logo' alt="Ongair" />
        </a>

        <Message
          icon='lock'
          header='Login'
          content='Select a profile to manage' />

        <Dropdown
          selection
          options={accounts}
          placeholder='Choose an account'
          ref='selectAccountDd'
        />

        <Button icon='right arrow' labelPosition='right' content='Select' onClick={this.selectAccount}></Button>

      </div>
    );
  }
});

Login.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Login;
