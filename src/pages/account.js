import React from 'react'
import Layout from '../components/layout'

class AccountPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
            Account details
        </div>
      </Layout>
    )
  }
}

export default AccountPage