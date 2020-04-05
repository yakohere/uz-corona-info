import React, { Component } from "react";
import styled from "styled-components";

class History extends Component {
  state = {
    cases: [],
  };

  async componentDidMount() {
    const url = "https://corona.lmao.ninja/v2/historical";
    const response = await fetch(url);
    const upcomingCases = await response.json();
    const uzbekData = upcomingCases.find(
      (element) => element.country === "Uzbekistan"
    );

    console.log(uzbekData);
  }
  render() {
    return (
      <Container>
        <div className="history"></div>
      </Container>
    );
  }
}

export default History;

const Container = styled.div`
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .history {
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    @media screen and (max-width: 1290px) {
      width: 70%;
    }

    @media screen and (max-width: 1100px) {
      width: 80%;
    }
    @media screen and (max-width: 1000px) {
      width: 90%;
    }
  }
`;
