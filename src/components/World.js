import React, { useState, useEffect } from "react";
import styled from "styled-components";
import WorldPic from "../assets/world.png";
import Moment from "react-moment";
import "moment/locale/uz-latn";
import Spinner from "../UI/Spinner/Spinner";

const World = () => {
  const [cases, setCases] = useState();
  const [deaths, setDeaths] = useState();
  const [recovered, setRecovered] = useState();
  const [active, setActive] = useState();
  const [tests, setTests] = useState();
  const [time, setTime] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://corona.lmao.ninja/v2/all")
      .then((response) => response.json())
      .then((responseData) => {
        setCases(responseData.cases.toLocaleString("fi-FI"));
        setDeaths(responseData.deaths.toLocaleString("fi-FI"));
        setRecovered(responseData.recovered.toLocaleString("fi-FI"));
        setActive(responseData.active.toLocaleString("fi-FI"));
        setTests(responseData.tests.toLocaleString("fi-FI"));
        setTime(responseData.updated);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <Container>
          <div className="title">
            <h1>Dunyo Bo`yicha</h1>
            <img src={WorldPic} alt="img" />
          </div>
          <div className="updatedTime">
            <Moment calendar>{time}</Moment>gi holat.
          </div>
          <div className="all-data">
            <div className="case-box">
              <div className="counter">{cases}</div>
              <div className="txt">Kasallangan</div>
            </div>

            <div className="case-box">
              <div className="counter">{deaths}</div>
              <div className="txt">O`limlar soni</div>
            </div>

            <div className="case-box">
              <div className="counter">{recovered}</div>
              <div className="txt">Sog`ayganlar</div>
            </div>
            <div className="case-box">
              <div className="counter">{active}</div>
              <div className="txt">Davolanmoqda</div>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
};

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

    .case-box {
      width: 185px;
      height: 85px;
      border-radius: 5px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 20px;

      align-items: center;
      box-shadow: 0px 0px 5px 5px rgba(164, 164, 164, 0.25);
      @media screen and (max-width: 428px) {
        width: 160px;
      }

      .txt {
        color: #838383;
        width: 100%;
        border-radius: 15px;
        height: 40px;
        box-sizing: border-box;
        text-transform: uppercase;
        font-size: 17px;
        font-weight: bold;
      }
      .counter {
        width: 100%;
        height: 50px;
        font-size: 20px;
        font-weight: bold;
        padding: 15px;
        box-sizing: border-box;
      }
    }
  }
`;
