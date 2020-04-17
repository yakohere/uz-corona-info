import React, { Component } from "react";
import styled from "styled-components";

class TopTen extends Component {
  state = {
    topCases: [],
    topDeaths: [],
    topRecovered: [],
  };

  async componentDidMount() {
    const url = "https://corona.lmao.ninja/v2/countries";
    const response = await fetch(url);
    const upcomingCases = await response.json();

    const topCases = upcomingCases
      .sort((a, b) => (a.cases < b.cases ? 1 : -1))
      .slice(0, 10);

    topCases.find((element) => element.country === "USA").country = "AQSH";
    topCases.find((element) => element.country === "Italy").country = "Italiya";
    topCases.find((element) => element.country === "Spain").country =
      "Ispaniya";
    topCases.find((element) => element.country === "Germany").country =
      "Germaniya";
    topCases.find((element) => element.country === "France").country =
      "Fransiya";
    topCases.find((element) => element.country === "Iran").country = "Eron";
    topCases.find((element) => element.country === "UK").country =
      "Buyuk Britaniya";

    topCases.find((element) => element.country === "Turkey").country =
      "Turkiya";

    const topDeaths = upcomingCases
      .sort((a, b) => (a.deaths < b.deaths ? 1 : -1))
      .slice(0, 10);

    topDeaths.find((element) => element.country === "Netherlands").country =
      "Niderlandiya";
    topDeaths.find((element) => element.country === "China").country = "Xitoy";

    topDeaths.find((element) => element.country === "Belgium").country =
      "Belgiya";

    const topRecovered = upcomingCases
      .sort((a, b) => (a.recovered < b.recovered ? 1 : -1))
      .slice(0, 10);

    topRecovered.find((element) => element.country === "Switzerland").country =
      "Shveytsariya";

    topRecovered.find((element) => element.country === "Canada").country =
      "Kanada";

    topRecovered.find((element) => element.country === "Brazil").country =
      "Brazilya";

    this.setState({
      topCases: topCases,
      topDeaths: topDeaths,
      topRecovered: topRecovered,
    });
  }
  render() {
    return (
      <Container>
        <div className="top-ten">
          <div className="top-cases">
            <div className="title-cases">Eng ko`p kasallanganlar</div>
            <div className="cases-container">
              {this.state.topCases.map((cased) => (
                <div className="case" key={cased.country}>
                  <div className="country">{cased.country}</div>
                  <div className="numbers-case">
                    {cased.cases.toLocaleString("fi-FI")}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="top-deaths">
            <div className="title-deaths">Eng ko`p o`limlar soni</div>
            <div className="cases-container">
              {this.state.topDeaths.map((cased) => (
                <div className="case" key={cased.country}>
                  <div className="country">{cased.country}</div>
                  <div className="numbers-death">
                    {cased.deaths.toLocaleString("fi-FI")}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="top-recovered">
            <div className="title-recovered">eng ko`p Sog`ayganlar</div>
            <div className="cases-container">
              {this.state.topRecovered.map((cased) => (
                <div className="case" key={cased.country}>
                  <div className="country">{cased.country}</div>
                  <div className="numbers-recovered">
                    {cased.recovered.toLocaleString("fi-FI")}
                  </div>
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
  font-size: 15px;

  .top-ten {
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    @media screen and (max-width: 1290px) {
      width: 70%;
    }

    @media screen and (max-width: 1100px) {
      width: 80%;
    }
    @media screen and (max-width: 1000px) {
      width: 90%;
    }
  }

  .top-cases {
    background-color: white;
    color: black;
    width: 250px;
    border-radius: 20px;
    margin-bottom: 10px;
    -webkit-box-shadow: 10px 10px 11px 0px rgba(186, 186, 186, 1);
    -moz-box-shadow: 10px 10px 11px 0px rgba(186, 186, 186, 1);
    box-shadow: 10px 10px 11px 0px rgba(186, 186, 186, 1);
    @media screen and (max-width: 428px) {
      width: 100%;
    }

    .title-cases {
      background-color: #3f8980;
      padding: 10px;
      box-sizing: border-box;
      color: white;
      text-transform: uppercase;
      border-radius: 20px;
    }

    .numbers-case {
      font-size: 17px;
      @media screen and (max-width: 428px) {
        font-size: 20px;
      }
    }
  }

  .country {
    font-size: 16px;
    @media screen and (max-width: 428px) {
      font-size: 19px;
    }
  }
  .top-deaths {
    background-color: white;
    color: black;
    width: 250px;
    border-radius: 20px;
    margin-bottom: 10px;
    -webkit-box-shadow: 10px 10px 11px 0px rgba(186, 186, 186, 1);
    -moz-box-shadow: 10px 10px 11px 0px rgba(186, 186, 186, 1);
    box-shadow: 10px 10px 11px 0px rgba(186, 186, 186, 1);
    @media screen and (max-width: 428px) {
      width: 100%;
    }

    .title-deaths {
      background-color: #a83434;
      padding: 10px;
      box-sizing: border-box;
      color: white;
      text-transform: uppercase;
      border-radius: 20px;
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
        font-size: 17px;
        color: #a83434;
        @media screen and (max-width: 428px) {
          font-size: 20px;
        }
      }
    }
  }

  .top-recovered {
    background-color: white;
    color: black;
    width: 250px;
    border-radius: 20px;
    margin-bottom: 10px;
    -webkit-box-shadow: 10px 10px 11px 0px rgba(186, 186, 186, 1);
    -moz-box-shadow: 10px 10px 11px 0px rgba(186, 186, 186, 1);
    box-shadow: 10px 10px 11px 0px rgba(186, 186, 186, 1);
    @media screen and (max-width: 428px) {
      width: 100%;
    }

    .title-recovered {
      background-color: #3b7a24;
      padding: 10px;
      box-sizing: border-box;
      color: white;
      text-transform: uppercase;
      border-radius: 20px;
    }
    .numbers-recovered {
      color: #3b7a24;
      font-size: 17px;
      @media screen and (max-width: 428px) {
        font-size: 20px;
      }
    }
  }
`;
