import React, { Component } from "react";
import styled from "styled-components";

class TopTen extends Component {
  state = {
    totalCases: []
  };

  async componentDidMount() {
    const url = "https://corona.lmao.ninja/countries?sort=country";
    const response = await fetch(url);
    const upcomingCases = await response.json();
    this.setState({ totalCases: upcomingCases });
    console.log(this.state.totalCases[(0, 1, 2, 3)]);
  }
  render() {
    return (
      <Container>
        <div className="top-cases"></div>
      </Container>
    );
  }
}

export default TopTen;

const Container = styled.div`
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
