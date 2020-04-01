import React, { Component } from "react";
import styled from "styled-components";
import UzbekPic from "../assets/uzbekistan.png";
import CountUp from "react-countup";

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
        <div>
          <p style={{ color: "#B5B038" }}>
            {this.state.time.toLocaleDateString()}
          </p>
          <p style={{ color: "#B5B038" }}>
            {this.state.time.toLocaleTimeString()}
          </p>
        </div>
        <div className="all-data">
          <div className="total">
            <div className="txt">Kasallanganlar</div>
            <div className="counter">
              <CountUp
                start={0}
                end={this.state.cases.cases ? this.state.cases.cases : 0}
                duration={3}
              />
            </div>
          </div>
          <div className="total">
            <div className="txt">Bugun aniqlanganlar</div>
            <div className="counter">
              <CountUp
                start={0}
                end={
                  this.state.cases.todayCases ? this.state.cases.todayCases : 0
                }
                duration={3}
              />
            </div>
          </div>
          <div className="death">
            <div className="txt">Qurbonlar</div>
            <div className="counter">
              <CountUp
                start={0}
                end={this.state.cases.deaths ? this.state.cases.deaths : 0}
                duration={3}
              />
            </div>
          </div>
          <div className="death">
            <div className="txt">Bugun olamdan o`tganlar</div>
            <div className="counter">
              <CountUp
                start={0}
                end={
                  this.state.cases.todayDeaths
                    ? this.state.cases.todayDeaths
                    : 0
                }
                duration={3}
              />
            </div>
          </div>
          <div className="death">
            <div className="txt">Ahvoli og`irlar</div>
            <div className="counter">
              <CountUp
                start={0}
                end={this.state.cases.critical ? this.state.cases.critical : 0}
                duration={3}
              />
            </div>
          </div>
          <div className="recovered">
            <div className="txt">Sog`ayganlar</div>
            <div className="counter">
              <CountUp
                start={0}
                end={
                  this.state.cases.recovered ? this.state.cases.recovered : 0
                }
                duration={3}
              />
            </div>
          </div>
          <div className="total">
            <div className="txt">Kasalxonada</div>
            <div className="counter">
              <CountUp
                start={0}
                end={this.state.cases.active ? this.state.cases.active : 0}
                duration={3}
              />
            </div>
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
      position: relative;
      animation-name: slide;
      animation-duration: 3s;
      animation-iteration-count: 1;
    }

    @keyframes slide {
      0% {
        right: 0px;
        top: 0px;
      }
      50% {
        right: 100px;
        top: 0px;
      }
      100% {
        right: 0px;
        top: 0px;
      }
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

      .counter {
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
      .counter {
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
      .counter {
        font-size: 20px;
        color: #3b7a24;
        font-weight: bold;
        padding: 10px;
        box-sizing: border-box;
      }
    }
  }
`;
