import React, { useState, useEffect } from "react";
import styled from "styled-components";
import WorldPic from "../assets/world.png";
import Moment from "react-moment";
import "moment/locale/uz-latn";
import * as styles from "../style/SameStyling";

const World = () => {
  const [cases, setCases] = useState();
  const [deaths, setDeaths] = useState();
  const [recovered, setRecovered] = useState();
  const [active, setActive] = useState();
  const [affectedCountries, setAffectedCountries] = useState();
  const [tests, setTests] = useState();
  const [time, setTime] = useState(null);

  useEffect(() => {
    fetch("https://corona.lmao.ninja/v2/all")
      .then((response) => response.json())
      .then((responseData) => {
        setCases(responseData.cases.toLocaleString("fi-FI"));
        setDeaths(responseData.deaths.toLocaleString("fi-FI"));
        setRecovered(responseData.recovered.toLocaleString("fi-FI"));
        setActive(responseData.active.toLocaleString("fi-FI"));
        setTests(responseData.tests.toLocaleString("fi-FI"));
        setAffectedCountries(responseData.affectedCountries);
        setTime(responseData.updated);
      });
  }, []);

  return (
    <Container>
      <div className="title">
        <h1>Dunyo Bo`yicha</h1>
        <img src={WorldPic} alt="img" />
      </div>
      <div className="updatedTime">
        <Moment calendar>{time}</Moment>gi holat.
      </div>
      <div className="all-data">
        <div className="cases">
          <div className="counter">{cases}</div>
          <div className="txt">Kasallangan</div>
        </div>

        <div className="deaths">
          <div className="counter">{deaths}</div>
          <div className="txt">O`limlar soni</div>
        </div>

        <div className="recovered">
          <div className="counter">{recovered}</div>
          <div className="txt">Sog`ayganlar</div>
        </div>
        <div className="atHospital">
          <div className="counter">{active}</div>
          <div className="txt">Davolanmoqda</div>
        </div>
        <div className="effectedCountry">
          <div className="counter">{affectedCountries}</div>
          <div className="txt">Kasallangan davlatlar</div>
        </div>
        <div className="test">
          <div className="counter">{tests}</div>
          <div className="txt">Test Topshirganlar</div>
        </div>
      </div>
    </Container>
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
      background: rgba(63, 167, 214, 0.17);
      ${styles.sameStylingBox}
      .txt {
        background: rgba(130, 189, 216, 0.18);
        color: #3fa7d6;
        ${styles.sameStylingText}
      }
      .counter {
        color: #3fa7d6;
        ${styles.sameStylingCounter}
      }
    }

    .deaths {
      background: rgba(252, 68, 15, 0.17);
      ${styles.sameStylingBox}
      .txt {
        color: #fc440f;
        background: rgba(219, 142, 120, 0.18);
        ${styles.sameStylingText}
      }
      .counter {
        color: #fc440f;
        ${styles.sameStylingCounter}
      }
    }

    .recovered {
      background: rgba(58, 125, 68, 0.17);
      ${styles.sameStylingBox}
      .txt {
        color: #3a7d44;
        background: rgba(118, 173, 127, 0.18);
        ${styles.sameStylingText}
      }
      .counter {
        color: #3a7d44;
        ${styles.sameStylingCounter}
      }
    }
    .atHospital {
      background: rgba(129, 150, 143, 0.17);
      ${styles.sameStylingBox}
      .txt {
        color: #3c4642;
        background: rgba(129, 150, 143, 0.18);
        ${styles.sameStylingText}
      }
      .counter {
        color: #3c4642;
        ${styles.sameStylingCounter}
      }
    }
    .effectedCountry {
      background: rgba(203, 121, 58, 0.17);
      ${styles.sameStylingBox}
      .txt {
        color: #c55a08;
        background: rgba(203, 121, 58, 0.18);
        ${styles.sameStylingText}
        padding: 3px;
      }
      .counter {
        color: #c55a08;
        ${styles.sameStylingCounter}
      }
    }

    .test {
      background: rgba(58, 125, 68, 0.17);
      ${styles.sameStylingBox}
      .txt {
        color: #3a7d44;
        background: rgba(118, 173, 127, 0.18);
        ${styles.sameStylingText}
        padding: 3px;
      }
      .counter {
        color: #3a7d44;
        ${styles.sameStylingCounter}
      }
    }
  }
`;
