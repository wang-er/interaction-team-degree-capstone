import React from 'react'
import { Button, SmallButton, LoginButton, HyperLink } from '../components/base/buttons'
import { Label, Select, Input } from '../components/base/forms'
import Layout from '../components/layout'

class FAQPage extends React.Component {
  render() {
    return (
      <Layout location={"settings"}>
        <div style={{ background: '#fff' }}>
            FAQ
        </div>
        <Button>omg hurrah</Button>
        <Button type="danger">Hello</Button>
            <SmallButton>huh</SmallButton>
            <LoginButton>
                <img src="https://ai.devoteam.com/wp-content/uploads/sites/91/2018/05/google-logo-icon-png-transparent-background.png"/>
                <div>Continue with Google</div>
                </LoginButton>
            <HyperLink type="danger" to="/login">noooo</HyperLink>
            <Label>
                <Input shadowed type="checkbox" placeholder="XXX-XXX-XXXX"/>
                Hello
            </Label>
            
            
            <Select id="cars" name="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
            </Select>
      </Layout>
    )
  }
}

export default FAQPage