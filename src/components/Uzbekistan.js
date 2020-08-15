import React, { useState, useEffect } from "react";
import styled from "styled-components";
import UzbekPic from "../assets/uzbekistan.jpg";
import CountUp from "react-countup";
import Moment from "react-moment";
import "moment/locale/uz-latn";
import * as styles from "../style/SameStyling";
import Spinner from "../UI/Spinner/Spinner";

const Uzbekistan = () => {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://corona.lmao.ninja/v2/countries/uzbekistan")
      .then((response) => response.json())
      .then((responseData) => {
        setCases(responseData);
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
            <h1>O`zbekiston</h1>
            <img src={UzbekPic} alt="img" />
          </div>
          <div className="updatedTime">
            <Moment calendar>{cases.updated}</Moment>
            gi holat.
          </div>

          <div className="all-data">
            <div className="case-box">
              <div className="counter">{cases.cases?.toLocaleString()}</div>
              <div className="txt">Kasallanganlar</div>
            </div>

            <div className="case-box">
              <div className="counter">
                +{cases.todayCases?.toLocaleString()}
              </div>

              <div className="txt">Bugun </div>
            </div>

            <div className="case-box">
              <div className="counter">{cases.deaths?.toLocaleString()}</div>
              <div className="txt">O`limlar soni</div>
            </div>

            <div className="case-box">
              <div className="counter">{cases.recovered?.toLocaleString()}</div>
              <div className="txt">Sog`ayganlar</div>
            </div>

            <div className="case-box">
              <div className="counter">{cases.active?.toLocaleString()}</div>
              <div className="txt">davolanmoqda</div>
            </div>
          </div>
        </Container>
      )}
    </div>
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

  .info {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

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
      width: 64px;
      height: auto;
      margin: 10px;
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
