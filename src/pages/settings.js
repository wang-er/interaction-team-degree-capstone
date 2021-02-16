import React from 'react'
import Layout from '../components/layout'

class SettingsPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
            Settings
        </div>
      </Layout>
    )
  }
}

export default SettingsPage