import React from "react";
import styled from "styled-components";
import Virus from "../assets/virus.png";
import { Link } from "react-router-dom";

const navigation = () => {
  return (
    <Container>
      <div className="nav">
        <div className="logo">
          <img src={Virus} alt="corona-logo" />
          COVID-19 <br />
          STATISTIKA
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Link to="/news">YANGILIKLAR</Link>
          <Link to="/malumot" style={{ textAlign: "center" }}>
            MA`LUMOT
          </Link>
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
  .nav {
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    color: black;

    @media screen and (max-width: 428px) {
      width: 100%;
      padding: 5px;
    }
    .logo {
      color: black;
      align-items: center;
      display: flex;
      color: black;

      img {
        width: 64px;
        height: 64px;
      }
    }
    a {
      text-decoration: none;
      color: black;
      border: 1px solid black;
      padding: 5px;
      border-radius: 5px;
      margin-bottom: 5px;
    }
  }
`;
