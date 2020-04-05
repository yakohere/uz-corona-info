import React, { Component } from "react";
import styled from "styled-components";
import Navigation from "../UI/Navigation";
import Menyu from "../UI/Menyu";

class History extends Component {
  state = {
    cases: [],
    deaths: [],
    recovered: [],
    showMenyu: false,
  };

  menyuToggleHandler = () => {
    this.setState({ showMenyu: true });
  };

  menyuCloseHandler = () => {
    this.setState({ showMenyu: false });
  };

  async componentDidMount() {
    const url = "https://corona.lmao.ninja/v2/historical";
    const response = await fetch(url);
    const upcomingCases = await response.json();

    const uzbekCases = upcomingCases.find(
      (element) => element.country === "Uzbekistan"
    ).timeline.cases;
    const uzbekDeaths = upcomingCases.find(
      (element) => element.country === "Uzbekistan"
    ).timeline.deaths;
    const uzbekRecovered = upcomingCases.find(
      (element) => element.country === "Uzbekistan"
    ).timeline.recovered;

    const uzCases = Object.entries(uzbekCases);
    const uzDeaths = Object.entries(uzbekDeaths);
    const uzRecovered = Object.entries(uzbekRecovered);

    this.setState({ cases: uzCases, deaths: uzDeaths, recovered: uzRecovered });
  }
  render() {
    return (
      <Container>
        {this.state.showMenyu ? (
          <Menyu backdropClicked={this.menyuCloseHandler} />
        ) : null}
        <Navigation
          menyuClicked={this.menyuToggleHandler}
          path="/malumot"
          pathName="MA`LUMOT"
          path2="/yangiliklar"
          pathName2="YANGILIKLAR"
        />
        <div className="history">
          <div className="title">
            Bu jadval sizga O`zbekistonda kunlik kasallanganlar, qurbonlar va
            sog`ayganlarning kunlik o`sish tarixini ko`rsatadi.
          </div>
          <div className="table">
            <div className="dates">
              Kun
              <br />
              {this.state.cases.map((cased) => (
                <div className="date" key={cased[0]}>
                  {cased[0]}
                </div>
              ))}
            </div>
            <div className="listCases">
              Kasallar
              {this.state.cases.map((cased) => (
                <div className="case" key={cased[0]}>
                  {cased[1]}
                </div>
              ))}
            </div>
            <div className="listDeaths">
              Qurbonlar
              {this.state.deaths.map((dead) => (
                <div className="death" key={dead[0]}>
                  {dead[1]}
                </div>
              ))}
            </div>
            <div className="listRecovered">
              Tuzalganlar
              {this.state.recovered.map((recovered) => (
                <div className="recovered" key={recovered[0]}>
                  {recovered[1]}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default History;

const Container = styled.div`
  text-align: center;
  padding: 5px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .history {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title {
      color: #3a7d44;
      margin-top: 10px;
      margin-bottom: 10px;
    }

    .table {
      width: 40%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      border: 1px solid grey;
      font-size: 15px;
      padding: 10px;
      box-sizing: border-box;
      @media screen and (max-width: 428px) {
        width: 100%;
      }
    }
    .dates {
      width: 25%;
      display: flex;
      flex-direction: column;
      border-right: 1px solid grey;
      color: #62726c;

      .date {
        border-bottom: 1px solid grey;
        padding: 5px;
        box-sizing: border-box;
        font-weight: bold;
        color: #62726c;
      }
    }
    .listCases {
      width: 25%;
      display: flex;
      flex-direction: column;
      border-right: 1px solid grey;
      color: #3fa7d6;
      .case {
        border-bottom: 1px solid grey;
        padding: 5px;
        box-sizing: border-box;
        font-weight: bold;
        color: #3fa7d6;
      }
    }
    .listDeaths {
      width: 25%;
      display: flex;
      flex-direction: column;
      border-right: 1px solid grey;
      color: #fc440f;
      .death {
        border-bottom: 1px solid grey;
        padding: 5px;
        box-sizing: border-box;
        font-weight: bold;
        color: #fc440f;
      }
    }
    .listRecovered {
      width: 25%;
      display: flex;
      flex-direction: column;
      color: #3a7d44;
      .recovered {
        border-bottom: 1px solid grey;
        padding: 5px;
        box-sizing: border-box;
        font-weight: bold;
        color: #3a7d44;
      }
    }
  }
`;
