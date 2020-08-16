import React, { useState, useEffect } from "react";
import styled from "styled-components";
import WorldPic from "../assets/world.png";
import Moment from "react-moment";
import "moment/locale/uz-latn";

const World = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://corona.lmao.ninja/v2/all")
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? null : (
        <Container>
          <div className="title">
            <h1>Dunyo Bo`yicha</h1>
            <img src={WorldPic} alt="img" />
          </div>

          <div className="updatedTime">
            <Moment calendar>{data.time}</Moment>gi holat.
          </div>
          <div className="all-data">
            <div className="case-box">
              <div className="counter" style={{ color: "#0B8DA9" }}>
                {data.cases?.toLocaleString()}
              </div>
              <div className="txt">Kasallanganlar</div>
            </div>

            <div className="case-box">
              <div className="counter" style={{ color: "#DC9916" }}>
                +{data.todayCases?.toLocaleString()}
              </div>
              <div className="txt">Bugun</div>
            </div>

            <div className="case-box">
              <div className="counter" style={{ color: "#CB4432" }}>
                {data.deaths?.toLocaleString()}
              </div>
              <div className="txt">Vafot erganlar</div>
            </div>

            <div className="case-box">
              <div className="counter" style={{ color: "#3C7B31" }}>
                {data.recovered?.toLocaleString()}
              </div>
              <div className="txt">Sog`ayganlar</div>
            </div>
            <div className="case-box">
              <div className="counter" style={{ color: "#A57548" }}>
                {data.active?.toLocaleString()}
              </div>
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
  padding: 5px;
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
      box-shadow: 0px 0px 7px rgba(54, 49, 49, 0.25);
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
