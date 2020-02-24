import React, { Component } from "react";
import { StyledCard, ProjectWrapper } from "./projects.styled";

class Projects extends Component {
  render() {
    return (
      <ProjectWrapper>
        <StyledCard />
        <StyledCard />
        <StyledCard />
        <StyledCard />
      </ProjectWrapper>
    );
  }
}

export default Projects;
