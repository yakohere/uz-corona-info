import React, { Component } from "react";
import styled from "styled-components";

class TopTen extends Component {
  state = {
    totalCases: [],
    countries: [
      "Amerika",
      "Italiya",
      "Ispaniya",
      "Germaniya",
      "Fransiya",
      "Eron",
      "Buyuk Biritaniya",
      "Shvetsariya",
      "Turkiya"
    ]
  };

  async componentDidMount() {
    const url = "https://corona.lmao.ninja/countries";
    const response = await fetch(url);
    const upcomingCases = await response.json();
    this.setState({ totalCases: upcomingCases.slice(0, 9) });
    console.log(this.state.totalCases);
  }
  render() {
    return (
      <Container>
        <div className="top-cases">
          <div className="title">Eng ko`p aniqlangan davlatlar</div>
          <div className="case-container">
            <div className="country">
              {this.state.countries.map(country => (
                <div style={{ marginBottom: "5px" }} key={country}>
                  {country}{" "}
                </div>
              ))}
            </div>
            <div className="numbers">
              {this.state.totalCases.map(case1 => (
                <div style={{ marginBottom: "5px" }} key={case1.country}>
                  {case1.cases}{" "}
                </div>
              ))}
            </div>
          </div>
        </div>
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

  .top-cases {
    background-color: white;
    color: black;
    width: 250px;
    border-radius: 10px;
    @media screen and (max-width: 428px) {
      width: 80%;
    }
  }

  .title {
    background-color: #3f8980;
    padding: 10px;
    box-sizing: border-box;
    color: white;
    text-transform: uppercase;
  }

  .case-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 5px;

    .country {
      font-size: 17px;
    }

    .numbers {
      font-size: 17px;
      color: #3f8980;
    }
  }
`;
