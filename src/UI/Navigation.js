import React from "react";
import styled from "styled-components";
import Virus from "../assets/virus.png";
import { Link } from "react-router-dom";

const navigation = (props) => {
  return (
    <Container>
      <div className="nav">
        <div className="logo">
          <img src={Virus} alt="corona-logo" />
          COVID-19 <br />
          STATISTIKA
        </div>
        <div onClick={props.menyuClicked} className="menu">
          MENYU
        </div>
        <div className="ul">
          <Link to="/">BOSH SAHIFA</Link>
          <Link to="/yangiliklar">YANGILIKLAR</Link>
          <Link to="/malumot">MA`LUMOT</Link>
          <Link to="/jadval">JADVAL</Link>
        </div>
      </div>
    </Container>
  );
};
export default navigation;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid grey;
  padding: 10px;
  box-sizing: border-box;
  color: black;
  font-size: 15px;
  background: linear-gradient(
    90deg,
    rgba(104, 88, 167, 0.82) -2.13%,
    #58a7a2 98%
  );

  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  .nav {
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    color: white;
    @media screen and (max-width: 428px) {
      width: 100%;
      padding: 5px;
    }

    .menu {
      border: 1px solid white;
      padding: 5px;
      border-radius: 5px;
      display: none;
      @media screen and (max-width: 428px) {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .ul {
      width: 40%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      @media screen and (max-width: 428px) {
        display: none;
      }

      a {
        text-align: center;
        font-size: 15px;
        text-decoration: none;
        color: white;
        padding: 3px;
        margin-bottom: 5px;
      }
    }
    .logo {
      align-items: center;
      display: flex;
      color: white;

      img {
        width: 64px;
        height: 64px;
      }
    }
  }
`;
