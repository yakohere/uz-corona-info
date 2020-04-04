import React, { Component } from "react";
import styled from "styled-components";
import WorldPic from "../assets/world.png";
import Moment from "react-moment";
import "moment/locale/uz-latn";

class World extends Component {
  state = {
    cases: "",
    deaths: "",
    recovered: "",
    atHospital: "",
    affectedCountries: "",
    time: null,
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
      time: cases.updated,
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
          <div className="cases">
            <div className="counter">{this.state.cases}</div>
            <div className="txt">Tasdiqlandi</div>
          </div>

          <div className="deaths">
            <div className="counter">{this.state.deaths}</div>
            <div className="txt">Qurbonlar</div>
          </div>

          <div className="recovered">
            <div className="counter">{this.state.recovered}</div>
            <div className="txt">Sog`ayganlar</div>
          </div>
          <div className="atHospital">
            <div className="counter">{this.state.atHospital}</div>
            <div className="txt">Kasalxonada</div>
          </div>
          <div className="effectedCountry">
            <div className="counter">{this.state.affectedCountries}</div>
            <div className="txt">Kassalangan davlatlar</div>
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
      100% {
        transform: rotate(0deg);
      }
      0% {
        transform: rotate(360deg);
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
    .cases {
      width: 170px;
      height: 100px;
      background-color: white;
      margin-bottom: 10px;
      border-radius: 5px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      -webkit-box-shadow: 10px 10px 11px 0px rgba(186, 186, 186, 1);
      -moz-box-shadow: 10px 10px 11px 0px rgba(186, 186, 186, 1);
      box-shadow: 10px 10px 11px 0px rgba(186, 186, 186, 1);
      @media screen and (max-width: 428px) {
        width: 150px;
      }

      .txt {
        width: 100%;
        background: rgba(63, 167, 214, 0.23);
        height: 40px;
        padding: 10px;
        box-sizing: border-box;
        text-transform: uppercase;
        font-size: 16px;
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
        background: rgba(63, 167, 214, 0.17);
      }
    }
    .deaths {
      width: 170px;
      height: 100px;
      background-color: white;
      margin-bottom: 10px;
      border-radius: 5px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      -webkit-box-shadow: 10px 10px 11px 0px rgba(186, 186, 186, 1);
      -moz-box-shadow: 10px 10px 11px 0px rgba(186, 186, 186, 1);
      box-shadow: 10px 10px 11px 0px rgba(186, 186, 186, 1);
      @media screen and (max-width: 428px) {
        width: 150px;
      }

      .txt {
        width: 100%;
        height: 40px;
        padding: 10px;
        box-sizing: border-box;
        text-transform: uppercase;
        font-size: 16px;
        font-weight: bold;
        color: #fc440f;
        background: rgba(252, 68, 15, 0.23);
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
        background: rgba(252, 68, 15, 0.17);
      }
    }
    .recovered {
      width: 170px;
      height: 100px;
      background-color: white;
      margin-bottom: 10px;
      border-radius: 5px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      -webkit-box-shadow: 10px 10px 11px 0px rgba(186, 186, 186, 1);
      -moz-box-shadow: 10px 10px 11px 0px rgba(186, 186, 186, 1);
      box-shadow: 10px 10px 11px 0px rgba(186, 186, 186, 1);
      @media screen and (max-width: 428px) {
        width: 150px;
      }

      .txt {
        width: 100%;
        height: 40px;
        padding: 10px;
        box-sizing: border-box;
        text-transform: uppercase;
        font-size: 16px;
        font-weight: bold;
        color: #3a7d44;
        background: rgba(58, 125, 68, 0.23);
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
        background: rgba(58, 125, 68, 0.17);
      }
    }
    .atHospital {
      width: 170px;
      height: 100px;
      background-color: white;
      margin-bottom: 10px;
      border-radius: 5px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      -webkit-box-shadow: 10px 10px 11px 0px rgba(186, 186, 186, 1);
      -moz-box-shadow: 10px 10px 11px 0px rgba(186, 186, 186, 1);
      box-shadow: 10px 10px 11px 0px rgba(186, 186, 186, 1);
      @media screen and (max-width: 428px) {
        width: 150px;
      }

      .txt {
        width: 100%;
        height: 40px;
        padding: 10px;
        box-sizing: border-box;
        text-transform: uppercase;
        font-size: 16px;
        font-weight: bold;

        color: #62726c;

        background: rgba(129, 150, 143, 0.23);
      }
      .counter {
        width: 100%;
        height: 60px;
        font-size: 20px;
        color: #d1a636;
        font-weight: bold;
        padding: 20px;

        color: #81968f;

        box-sizing: border-box;

        background: rgba(129, 150, 143, 0.17);
      }
    }
    .effectedCountry {
      width: 170px;
      height: 100px;
      background-color: white;
      margin-bottom: 10px;
      border-radius: 5px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      -webkit-box-shadow: 10px 10px 11px 0px rgba(186, 186, 186, 1);
      -moz-box-shadow: 10px 10px 11px 0px rgba(186, 186, 186, 1);
      box-shadow: 10px 10px 11px 0px rgba(186, 186, 186, 1);
      @media screen and (max-width: 428px) {
        width: 150px;
      }

      .txt {
        width: 100%;
        height: 40px;
        padding: 3px;
        box-sizing: border-box;
        text-transform: uppercase;
        font-size: 16px;
        font-weight: bold;
        color: #cb793a;
        background: rgba(203, 121, 58, 0.23);
      }
      .counter {
        width: 100%;
        height: 60px;
        font-size: 20px;
        color: #d1a636;
        font-weight: bold;
        padding: 20px;
        color: #cb793a;
        box-sizing: border-box;
        background: rgba(203, 121, 58, 0.17);
      }
    }
  }
`;
