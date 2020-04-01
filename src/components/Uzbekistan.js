import React, { Component } from "react";
import styled from "styled-components";
import UzbekPic from "../assets/uzbekistan.png";

class Uzbekistan extends Component {
  state = {
    cases: [],
    time: new Date()
  };

  async componentDidMount() {
    const url = "https://corona.lmao.ninja/countries/uzbekistan";
    const response = await fetch(url);
    const cases = await response.json();
    this.setState({ cases: cases });
  }
  render() {
    return (
      <Container>
        <div className="title">
          <h1>O`zbekiston</h1>
          <img src={UzbekPic} />
        </div>
        <p style={{ color: "#B5B038" }}>
          {this.state.time.toLocaleDateString()}
        </p>
        <p style={{ color: "#B5B038" }}>
          {this.state.time.toLocaleTimeString()}
        </p>
        <div className="all-data">
          <div className="total">
            <div className="txt">Kasallanganlar</div>
            <div className="num">{this.state.cases.cases}</div>
          </div>
          <div className="total">
            <div className="txt">Bugun aniqlanganlar</div>
            <div className="num">{this.state.cases.todayCases}</div>
          </div>
          <div className="death">
            <div className="txt">Qurbonlar</div>
            <div className="num">{this.state.cases.deaths}</div>
          </div>
          <div className="death">
            <div className="txt">Bugun olamdan o`tganlar</div>
            <div className="num">{this.state.cases.todayDeaths}</div>
          </div>
          <div className="death">
            <div className="txt">Ahvoli og`irlar</div>
            <div className="num">{this.state.cases.critical}</div>
          </div>
          <div className="recovered">
            <div className="txt">Sog`ayganlar</div>
            <div className="num">{this.state.cases.recovered}</div>
          </div>
          <div className="total">
            <div className="txt">Kasalxonada</div>
            <div className="num">{this.state.cases.active}</div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Uzbekistan;

const Container = styled.div`
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    display: flex;
    color: white;
    align-items: center;

    img {
      width: 50px;
      margin: 5px;
    }
  }

  .all-data {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px;
    box-sizing: border-box;
    @media screen and (max-width: 428px) {
      width: 100%;
      padding: 5px;
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
        width: 150px;
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
        width: 150px;
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
        width: 150px;
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
