import React, { Component } from "react";
import styled from "styled-components";

class TopTen extends Component {
  state = {
    topCases: [],
    topDeaths: [],
    topRecovered: []
  };

  async componentDidMount() {
    const url = "https://corona.lmao.ninja/countries";
    const response = await fetch(url);

    const upcomingCases = await response.json();
    const topCases = upcomingCases.slice(0, 10);
    const topDeaths = upcomingCases
      .sort((a, b) => (a.deaths < b.deaths ? 1 : -1))
      .slice(0, 10);
    const topRecovered = upcomingCases
      .sort((a, b) => (a.recovered < b.recovered ? 1 : -1))
      .slice(0, 10);
    this.setState({
      topCases: topCases,
      topDeaths: topDeaths,
      topRecovered: topRecovered
    });
  }
  render() {
    return (
      <Container>
        <div className="top-cases">
          <div className="title-cases">Top 10 aniqlanganlar</div>
          <div className="cases-container">
            {this.state.topCases.map(cased => (
              <div className="case" key={cased.country}>
                <div className="country">{cased.country}</div>
                <div className="numbers-case">{cased.cases}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="top-deaths">
          <div className="title-deaths">Top 10 Qurbonlar</div>
          <div className="cases-container">
            {this.state.topDeaths.map(cased => (
              <div className="case" key={cased.country}>
                <div className="country">{cased.country}</div>
                <div className="numbers-death">{cased.deaths}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="top-recovered">
          <div className="title-recovered">Top 10 Sog`ayganlar</div>
          <div className="cases-container">
            {this.state.topRecovered.map(cased => (
              <div className="case" key={cased.country}>
                <div className="country">{cased.country}</div>
                <div className="numbers-recovered">{cased.recovered}</div>
              </div>
            ))}
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
    margin-bottom: 10px;
    @media screen and (max-width: 428px) {
      width: 80%;
    }

    .title-cases {
      background-color: #3f8980;
      padding: 10px;
      box-sizing: border-box;
      color: white;
      text-transform: uppercase;
    }
  }

  .top-deaths {
    background-color: white;
    color: black;
    width: 250px;
    border-radius: 10px;
    margin-bottom: 10px;
    @media screen and (max-width: 428px) {
      width: 80%;
    }

    .title-deaths {
      background-color: #a83434;
      padding: 10px;
      box-sizing: border-box;
      color: white;
      text-transform: uppercase;
    }
  }

  .cases-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;

    .case {
      width: 80%;
      font-size: 20px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .numbers-case {
        color: #3f8980;
      }

      .numbers-death {
        color: #a83434;
      }
    }
  }

  .top-recovered {
    background-color: white;
    color: black;
    width: 250px;
    border-radius: 10px;
    margin-bottom: 10px;
    @media screen and (max-width: 428px) {
      width: 80%;
    }

    .title-recovered {
      background-color: #3b7a24;
      padding: 10px;
      box-sizing: border-box;
      color: white;
      text-transform: uppercase;
    }
    .numbers-recovered {
      color: #3b7a24;
    }
  }
`;
