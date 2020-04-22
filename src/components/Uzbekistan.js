import React, { useState, useEffect } from "react";
import styled from "styled-components";
import UzbekPic from "../assets/uzbekistan.png";
import CountUp from "react-countup";
import Moment from "react-moment";
import "moment/locale/uz-latn";
import * as styles from "../UI/SameStyling";

const Uzbekistan = () => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    fetch("https://corona.lmao.ninja/v2/countries/uzbekistan")
      .then((response) => response.json())
      .then((responseData) => {
        setCases(responseData);
        console.log(responseData);
      });
  }, []);

  return (
    <Container>
      <div className="title">
        <h1>O`zbekiston</h1>
        <img src={UzbekPic} alt="img" />
      </div>
      <div className="updatedTime">
        <Moment calendar>{cases.updated}</Moment>
        gi holat.
      </div>
      <div className="all-data">
        <div className="cases">
          <div className="counter">
            <CountUp
              start={0}
              end={cases.cases ? cases.cases : 0}
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
              end={cases.todayCases ? cases.todayCases : 0}
              duration={3}
            />
          </div>

          <div className="txt">Bugun </div>
        </div>
        <div className="deaths">
          <div className="counter">
            <CountUp
              start={0}
              end={cases.deaths ? cases.deaths : 0}
              duration={3}
            />
          </div>
          <div className="txt">O`limlar soni</div>
        </div>

        <div className="critical">
          <div className="counter">
            <CountUp
              start={0}
              end={cases.critical ? cases.critical : 0}
              duration={3}
            />
          </div>
          <div className="txt">Ahvoli og`irlar</div>
        </div>

        <div className="recovered">
          <div className="counter">
            <CountUp
              start={0}
              end={cases.recovered ? cases.recovered : 0}
              duration={3}
            />
          </div>
          <div className="txt">Sog`ayganlar</div>
        </div>
        <div className="atHospital">
          <div className="counter">
            <CountUp
              start={0}
              end={cases.active ? cases.active : 0}
              duration={3}
            />
          </div>
          <div className="txt">davolanmoqda</div>
        </div>
      </div>
    </Container>
  );
};
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
      background: rgba(63, 167, 214, 0.17);
      ${styles.sameStylingBox}
      .txt {
        background: rgba(130, 189, 216, 0.13);
        color: #3fa7d6;
        ${styles.sameStylingText}
      }
      .counter {
        color: #3fa7d6;
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

    .deaths {
      background: rgba(252, 68, 15, 0.17);
      ${styles.sameStylingBox}
      .txt {
        color: #fc440f;
        background: rgba(219, 142, 120, 0.17);
        ${styles.sameStylingText}
      }
      .counter {
        color: #fc440f;
        ${styles.sameStylingCounter}
      }
    }

    .critical {
      background: rgba(203, 121, 58, 0.17);
      ${styles.sameStylingBox}
      .txt {
        color: #c55a08;
        background: rgba(203, 121, 58, 0.18);
        ${styles.sameStylingText}
      }
      .counter {
        color: #c55a08;
        ${styles.sameStylingCounter}
      }
    }
    .today-case {
      background: rgba(171, 171, 171, 0.29);
      ${styles.sameStylingBox}
      .txt {
        color: #494e73;
        background: rgba(129, 150, 143, 0.18);
        ${styles.sameStylingText}
      }
      .counter {
        color: #494e73;
        ${styles.sameStylingCounter}
      }
    }
  }
`;
