import React, { Component } from "react";
import styled from "styled-components";
import UzbekPic from "../assets/uzbekistan.png";
import CountUp from "react-countup";
import Moment from "react-moment";
import "moment/locale/uz-latn";

class Uzbekistan extends Component {
  state = {
    cases: [],
    time: null,
  };

  async componentDidMount() {
    const url = "https://corona.lmao.ninja/countries/uzbekistan";
    const response = await fetch(url);
    const cases = await response.json();
    this.setState({ cases: cases, time: cases.updated });
  }
  render() {
    return (
      <Container>
        <div className="title">
          <h1>O`zbekiston</h1>
          <img src={UzbekPic} alt="img" />
        </div>
        <div className="updatedTime">
          <Moment calendar>{this.state.time}</Moment>
          gi holat.
        </div>
        <div className="all-data">
          <div className="cases">
            <div className="counter">
              <CountUp
                start={0}
                end={this.state.cases.cases ? this.state.cases.cases : 0}
                duration={3}
              />
            </div>
            <div className="txt">Kasallanganlar</div>
          </div>
          <div className="today-case">
            <div className="counter">
              +{" "}
              <CountUp
                start={0}
                end={
                  this.state.cases.todayCases ? this.state.cases.todayCases : 0
                }
                duration={3}
              />
            </div>

            <div className="txt">Bugun </div>
          </div>
          <div className="deaths">
            <div className="counter">
              <CountUp
                start={0}
                end={this.state.cases.deaths ? this.state.cases.deaths : 0}
                duration={3}
              />
            </div>
            <div className="txt">O`limlar soni</div>
          </div>

          <div className="critical">
            <div className="counter">
              <CountUp
                start={0}
                end={this.state.cases.critical ? this.state.cases.critical : 0}
                duration={3}
              />
            </div>
            <div className="txt">Ahvoli og`irlar</div>
          </div>
          <div className="recovered">
            <div className="counter">
              <CountUp
                start={0}
                end={
                  this.state.cases.recovered ? this.state.cases.recovered : 0
                }
                duration={3}
              />
            </div>
            <div className="txt">Sog`ayganlar</div>
          </div>
          <div className="atHospital">
            <div className="counter">
              <CountUp
                start={0}
                end={this.state.cases.active ? this.state.cases.active : 0}
                duration={3}
              />
            </div>

            <div className="txt">davolanmoqda</div>
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
  border-bottom: 1px solid grey;

  .updatedTime {
    color: red;
    @media screen and (max-width: 428px) {
      margin-bottom: 10px;
    }
  }

  .title {
    display: flex;
    color: grey;
    align-items: center;

    img {
      width: 50px;
      margin: 5px;
      position: relative;
      animation: spin 4s infinite;
    }

    @keyframes spin {
      0% {
        transform: rotate(360deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  }

  .all-data {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px;
    box-sizing: border-box;
    @media screen and (max-width: 428px) {
      width: 100%;
      padding: 5px;
    }

    .cases {
      width: 170px;
      height: 100px;
      margin-bottom: 10px;
      border-radius: 15px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      -webkit-box-shadow: 10px 10px 11px 0px rgba(186, 186, 186, 1);
      -moz-box-shadow: 10px 10px 11px 0px rgba(186, 186, 186, 1);
      box-shadow: 10px 10px 11px 0px rgba(186, 186, 186, 1);
      background: rgba(63, 167, 214, 0.17);
      @media screen and (max-width: 428px) {
        width: 160px;
      }

      .txt {
        width: 100%;
        background: rgba(130, 189, 216, 0.13);
        border-radius: 15px;
        height: 40px;
        padding: 10px;
        box-sizing: border-box;
        text-transform: uppercase;
        font-size: 15px;
        font-weight: bold;
        color: #3fa7d6;
      }

      .counter {
        width: 100%;
        height: 60px;
        font-size: 20px;
        color: #3f8980;
        font-weight: bold;
        padding: 20px;
        color: #3fa7d6;
        box-sizing: border-box;
      }
    }

    .recovered {
      width: 170px;
      height: 100px;
      margin-bottom: 10px;
      border-radius: 15px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      background: rgba(58, 125, 68, 0.17);
      -webkit-box-shadow: 10px 10px 11px 0px rgba(186, 186, 186, 1);
      -moz-box-shadow: 10px 10px 11px 0px rgba(186, 186, 186, 1);
      box-shadow: 10px 10px 11px 0px rgba(186, 186, 186, 1);
      @media screen and (max-width: 428px) {
        width: 160px;
      }

      .txt {
        width: 100%;
        height: 40px;
        padding: 10px;
        box-sizing: border-box;
        text-transform: uppercase;
        font-size: 15px;
        font-weight: bold;
        color: #3a7d44;

        background: rgba(118, 173, 127, 0.18);
        border-radius: 15px;
      }
      .counter {
        width: 100%;
        height: 60px;
        font-size: 20px;
        color: #d1a636;
        font-weight: bold;
        padding: 20px;
        color: #3a7d44;
        box-sizing: border-box;
      }
    }
    .atHospital {
      width: 170px;
      height: 100px;
      margin-bottom: 10px;
      border-radius: 15px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      background: rgba(129, 150, 143, 0.17);
      -webkit-box-shadow: 10px 10px 11px 0px rgba(186, 186, 186, 1);
      -moz-box-shadow: 10px 10px 11px 0px rgba(186, 186, 186, 1);
      box-shadow: 10px 10px 11px 0px rgba(186, 186, 186, 1);
      @media screen and (max-width: 428px) {
        width: 160px;
      }

      .txt {
        width: 100%;
        height: 40px;
        padding: 10px;
        box-sizing: border-box;
        text-transform: uppercase;
        font-size: 15px;
        font-weight: bold;

        border-radius: 15px;

        color: #3c4642;

        background: rgba(129, 150, 143, 0.18);
      }
      .counter {
        width: 100%;
        height: 60px;
        font-size: 20px;
        color: #d1a636;
        font-weight: bold;
        padding: 20px;
        color: #3c4642;
        box-sizing: border-box;
      }
    }

    .deaths {
      width: 170px;
      height: 100px;
      margin-bottom: 10px;
      border-radius: 15px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      background: rgba(252, 68, 15, 0.17);
      -webkit-box-shadow: 10px 10px 11px 0px rgba(186, 186, 186, 1);
      -moz-box-shadow: 10px 10px 11px 0px rgba(186, 186, 186, 1);
      box-shadow: 10px 10px 11px 0px rgba(186, 186, 186, 1);
      @media screen and (max-width: 428px) {
        width: 160px;
      }

      .txt {
        width: 100%;
        height: 40px;
        padding: 10px;
        box-sizing: border-box;
        text-transform: uppercase;
        font-size: 15px;
        font-weight: bold;
        color: #fc440f;
        background: rgba(219, 142, 120, 0.17);
        border-radius: 15px;
      }
      .counter {
        width: 100%;
        height: 60px;
        font-size: 20px;
        color: #d1a636;
        font-weight: bold;
        padding: 20px;
        color: #fc440f;
        box-sizing: border-box;
      }
    }

    .critical {
      width: 170px;
      height: 100px;
      margin-bottom: 10px;
      border-radius: 15px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      background: rgba(203, 121, 58, 0.17);
      -webkit-box-shadow: 10px 10px 11px 0px rgba(186, 186, 186, 1);
      -moz-box-shadow: 10px 10px 11px 0px rgba(186, 186, 186, 1);
      box-shadow: 10px 10px 11px 0px rgba(186, 186, 186, 1);
      @media screen and (max-width: 428px) {
        width: 160px;
      }

      .txt {
        width: 100%;
        height: 40px;
        padding: 5px;
        box-sizing: border-box;
        padding: 10px;
        text-transform: uppercase;
        font-size: 15px;
        border-radius: 15px;
        font-weight: bold;
        color: #c55a08;
        background: rgba(203, 121, 58, 0.18);
      }
      .counter {
        width: 100%;
        height: 60px;
        font-size: 20px;
        color: #d1a636;
        font-weight: bold;
        padding: 20px;
        color: #c55a08;
        box-sizing: border-box;
      }
    }
    .today-case {
      width: 170px;
      height: 100px;
      margin-bottom: 10px;
      border-radius: 15px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background: rgba(171, 171, 171, 0.29);
      -webkit-box-shadow: 10px 10px 11px 0px rgba(186, 186, 186, 1);
      -moz-box-shadow: 10px 10px 11px 0px rgba(186, 186, 186, 1);
      box-shadow: 10px 10px 11px 0px rgba(186, 186, 186, 1);
      @media screen and (max-width: 428px) {
        width: 160px;
      }

      .txt {
        width: 100%;
        height: 40px;
        box-sizing: border-box;
        text-transform: uppercase;
        font-size: 15px;
        padding: 10px;
        font-weight: bold;
        color: #494e73;
        background: rgba(144, 146, 163, 0.16);
        border-radius: 15px;
      }
      .counter {
        width: 100%;
        height: 60px;
        font-size: 20px;
        font-weight: bold;
        padding: 20px;
        color: #494e73;
        box-sizing: border-box;
      }
    }
  }
`;
