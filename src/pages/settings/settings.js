import React from "react";
import Layout from "../../components/layout";
import { H1, Body } from "../../components/base/fonts";
import { purple, red } from "../../components/base/colors";
import { HeaderContainer } from "../home";
import styled from "styled-components";

export const Body1 = styled(Body)`
  border-style: solid;
  border-width: medium;
  border-radius: 10px;
  line-height: 50px;
  padding-left: 20px;
`;

class SettingsPage extends React.Component {
  render() {
    return (
      <Layout location="settings">
        <HeaderContainer>
          <H1>Settings</H1>
        </HeaderContainer>
        <br></br>
        <Body1 border-weight="gray" color={purple}>
          Account Information
        </Body1>
        <br></br>
        <Body1 color={purple}>Password</Body1>
        <br></br>
        <Body1 color={purple}>Push Notifications</Body1>
        <br></br>
        <Body1 color={red}>Emergency Transfer</Body1>
        <br></br>
        <Body1 color={purple}>Sign Out</Body1>
      </Layout>
    );
  }
}

export default SettingsPage;
