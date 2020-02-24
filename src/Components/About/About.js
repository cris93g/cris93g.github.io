import React, { Component } from "react";
import { AboutWrapper, TopWraper, BotWraper } from "./About.styled";
class About extends Component {
  render() {
    return (
      <AboutWrapper>
        <TopWraper></TopWraper>
        <BotWraper></BotWraper>
      </AboutWrapper>
    );
  }
}

export default About;
