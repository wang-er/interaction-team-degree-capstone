import React from 'react'
import Layout from '../components/layout'

class FAQPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
            FAQ
        </div>
      </Layout>
    )
  }
}

export default FAQPage