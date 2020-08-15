import React, { useState, useEffect } from "react";
import styled from "styled-components";
import transilations from "./Transilations";

const TopTen = () => {
  const [topCases, setTopCases] = useState([]);
  const [topDeaths, setTopDeaths] = useState([]);
  const [topRecovered, setTopRecovered] = useState([]);

  useEffect(() => {
    fetch("https://corona.lmao.ninja/v2/countries")
      .then((response) => response.json())
      .then((responseData) => {
        transilations(responseData);
        setTopCases(
          responseData.sort((a, b) => (a.cases < b.cases ? 1 : -1)).slice(0, 10)
        );
        setTopDeaths(
          responseData
            .sort((a, b) => (a.deaths < b.deaths ? 1 : -1))
            .slice(0, 10)
        );
        setTopRecovered(
          responseData
            .sort((a, b) => (a.recovered < b.recovered ? 1 : -1))
            .slice(0, 10)
        );
      });
  }, []);

  return (
    <Container>
      <div className="top-ten">
        <div className="container">
          <div className="title-cases">Eng ko`p kasallanganlar</div>
          <div className="cases-container">
            {topCases.map((e) => (
              <div className="case" key={e.country}>
                <div className="country">{e.country}</div>
                <div className="numbers-case">
                  {e.cases.toLocaleString("fi-FI")}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container">
          <div className="title-deaths">Eng ko`p o`limlar soni</div>
          <div className="cases-container">
            {topDeaths.map((e) => (
              <div className="case" key={e.country}>
                <div className="country">{e.country}</div>
                <div className="numbers-death">
                  {e.deaths.toLocaleString("fi-FI")}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container">
          <div className="title-recovered">eng ko`p Sog`ayganlar</div>
          <div className="cases-container">
            {topRecovered.map((e) => (
              <div className="case" key={e.country}>
                <div className="country">{e.country}</div>
                <div className="numbers-recovered">
                  {e.recovered.toLocaleString("fi-FI")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

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

  .container {
    background-color: white;
    color: black;
    width: 250px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 5px 5px rgba(164, 164, 164, 0.25);

    @media screen and (max-width: 428px) {
      width: 100%;
    }

    .country {
      font-size: 16px;
      @media screen and (max-width: 428px) {
        font-size: 19px;
      }
    }

    .title-cases {
      background-color: #3f8980;
      padding: 10px;
      box-sizing: border-box;
      color: white;
      text-transform: uppercase;
    }

    .numbers-case {
      font-size: 17px;
      color: #3f8980;
      @media screen and (max-width: 428px) {
        font-size: 20px;
      }
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
      font-size: 17px;
      @media screen and (max-width: 428px) {
        font-size: 20px;
      }
    }

    .title-deaths {
      background-color: #a83434;
      padding: 10px;
      box-sizing: border-box;
      color: white;
      text-transform: uppercase;
    }

    .numbers-death {
      font-size: 17px;
      color: #a83434;
      @media screen and (max-width: 428px) {
        font-size: 20px;
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
      }
    }
  }
`;
