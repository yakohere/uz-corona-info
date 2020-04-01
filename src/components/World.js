import React, { Component } from "react";
import styled from "styled-components";

class World extends Component {
  state = {
    cases: [],
    time: new Date()
  };

  async componentDidMount() {
    const url = "https://corona.lmao.ninja/all";
    const response = await fetch(url);
    const cases = await response.json();
    this.setState({ cases: cases });
    console.log(this.state.cases);
  }
  render() {
    return (
      <Container>
        <h1 style={{ color: "white" }}>Dunyo Bo`yicha</h1>
        <p style={{ color: "#B5B038" }}>
          {this.state.time.toLocaleDateString()}
        </p>
        <p style={{ color: "#B5B038" }}>
          {this.state.time.toLocaleTimeString()}
        </p>
        <div className="all-data">
          <div className="total">
            <div className="txt">Kassallanganlar</div>
            <div className="num">{this.state.cases.cases}</div>
          </div>

          <div className="death">
            <div className="txt">O`lganlar</div>
            <div className="num">{this.state.cases.deaths}</div>
          </div>

          <div className="recovered">
            <div className="txt">Sog`ayganlar</div>
            <div className="num">{this.state.cases.recovered}</div>
          </div>
          <div className="total">
            <div className="txt">Kasalhonada</div>
            <div className="num">{this.state.cases.active}</div>
          </div>
        </div>
      </Container>
    );
  }
}

export default World;

const Container = styled.div`
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .all-data {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px;
    box-sizing: border-box;
    @media screen and (max-width: 428px) {
      width: 100%;
    }

    .total {
      width: 170px;
      height: 80px;
      background-color: white;
      margin-bottom: 10px;
      border-radius: 10px;
      padding: 5px;
      text-align: center;
      @media screen and (max-width: 428px) {
        width: 200px;
      }

      .txt {
        text-transform: uppercase;
        font-size: 16px;
        font-weight: bold;
      }

      .num {
        font-size: 20px;
        color: #3f8980;
        font-weight: bold;
        padding: 10px;
        box-sizing: border-box;
      }
    }
    .death {
      width: 170px;
      height: 80px;
      background-color: white;
      margin-bottom: 10px;
      padding: 5px;
      border-radius: 10px;

      @media screen and (max-width: 428px) {
        width: 200px;
      }
      .txt {
        text-transform: uppercase;
        font-size: 16px;
        font-weight: bold;
      }
      .num {
        font-size: 20px;
        color: #a83434;
        font-weight: bold;
        padding: 10px;
        box-sizing: border-box;
      }
    }
    .recovered {
      padding: 5px;
      width: 170px;
      height: 80px;
      background-color: white;
      margin-bottom: 10px;

      border-radius: 10px;
      @media screen and (max-width: 428px) {
        width: 200px;
      }
      .txt {
        text-transform: uppercase;
        font-size: 16px;
        font-weight: bold;
      }
      .num {
        font-size: 20px;
        color: #3b7a24;
        font-weight: bold;
        padding: 10px;
        box-sizing: border-box;
      }
    }
  }
`;
