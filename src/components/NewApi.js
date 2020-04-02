import React, { Component } from "react";
import styled from "styled-components";
import UzbekPic from "../assets/uzbekistan.png";
import CountUp from "react-countup";
import Moment from "react-moment";

class NewApi extends Component {
  state = {
    cases: [],
    updatedTime: "",
    atHospital: null,
    critical: null
  };

  async componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://www.trackcorona.live/api/countries/"; // site that doesn’t send Access-Control-*
    const response = await fetch(proxyurl + url); // https://cors-anywhere.herokuapp.com/https://example.com
    const cases = await response.json();
    const updatedArray = cases.data.filter(
      element => element.location === "Uzbekistan"
    );
    this.setState({
      cases: updatedArray[0],
      updatedTime: updatedArray[0].updated
    });
    const atHospital = this.state.cases.confirmed - this.state.cases.recovered;
    this.setState({
      atHospital: atHospital
    });

    const criticalUrl = "https://corona.lmao.ninja/countries/uzbekistan";
    const criticalResponse = await fetch(criticalUrl);
    const critCases = await criticalResponse.json();
    this.setState({ critical: critCases.critical });
  }

  render() {
    return (
      <Container>
        <div className="title">
          <h1>O`zbekiston</h1>
          <img src={UzbekPic} alt="img" />
        </div>
        <div className="updatedTime">
          <Moment format="MMMM Do YYYY, h:mm:ss a">
            {this.state.updatedTime}
          </Moment>{" "}
          dagi holat.
        </div>
        <div className="all-data">
          <div className="total">
            <div className="txt">Kasallanganlar</div>
            <div className="counter">
              <CountUp
                start={0}
                end={
                  this.state.cases.confirmed ? this.state.cases.confirmed : 0
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
                end={this.state.cases.dead ? this.state.cases.dead : 0}
                duration={3}
              />
            </div>
          </div>

          <div className="death">
            <div className="txt">Ahvoli og`irlar</div>
            <div className="counter">
              <CountUp
                start={0}
                end={this.state.critical ? this.state.critical : 0}
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
                end={this.state.atHospital ? this.state.atHospital : 0}
                duration={3}
              />
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default NewApi;

const Container = styled.div`
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .updatedTime {
    color: #b5b038;
  }

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
