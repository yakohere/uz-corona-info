import React, { Component } from "react";
import styled from "styled-components";
import WorldPic from "../assets/world.png";
import CountUp from "react-countup";
import Moment from "react-moment";
import "moment/locale/uz-latn";

class World extends Component {
  state = {
    cases: "",
    deaths: "",
    recovered: "",
    atHospital: "",
    affectedCountries: "",
    time: null
  };

  async componentDidMount() {
    const url = "https://corona.lmao.ninja/all";
    const response = await fetch(url);
    const cases = await response.json();
    this.setState({
      cases: cases.cases.toLocaleString("fi-FI"),
      deaths: cases.deaths.toLocaleString("fi-FI"),
      recovered: cases.recovered.toLocaleString("fi-FI"),
      atHospital: cases.active.toLocaleString("fi-FI"),
      affectedCountries: cases.affectedCountries,
      time: cases.updated
    });
  }
  render() {
    return (
      <Container>
        <div className="title">
          <h1>Dunyo Bo`yicha</h1>
          <img src={WorldPic} alt="img" />
        </div>
        <div className="updatedTime">
          <Moment calendar>{this.state.time}</Moment>gi holat.
        </div>
        <div className="all-data">
          <div className="total">
            <div className="txt">Kasallanganlar</div>
            <div className="num">{this.state.cases}</div>
          </div>

          <div className="death">
            <div className="txt">Qurbonlar</div>
            <div className="num">{this.state.deaths}</div>
          </div>

          <div className="recovered">
            <div className="txt">Sog`ayganlar</div>
            <div className="num">{this.state.recovered}</div>
          </div>
          <div className="total">
            <div className="txt">Kasalxonada</div>
            <div className="num">{this.state.atHospital}</div>
          </div>
          <div className="total">
            <div className="txt">Tasir qilgan davlatlar</div>
            <div className="num">
              <CountUp
                start={0}
                end={
                  this.state.affectedCountries
                    ? this.state.affectedCountries
                    : 0
                }
                duration={3}
              />
            </div>
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

  .updatedTime {
    color: #b5b038;
    @media screen and (max-width: 428px) {
      margin-bottom: 10px;
    }
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
        right: 50px;
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
