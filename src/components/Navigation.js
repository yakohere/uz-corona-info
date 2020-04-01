import React, { Component } from "react";
import styled from "styled-components";
import Virus from "../assets/virus.png";
import { Link } from "react-router-dom";

const navigation = () => {
  return (
    <Container>
      <div className="nav">
        <img src={Virus} />
        <p>COVID-19 STATISTIKA</p>
        <Link to="/malumot">MA`LUMOT</Link>
      </div>
    </Container>
  );
};
export default navigation;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid white;
  padding: 10px;
  box-sizing: border-box;

  .nav {
    width: 90%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
      width: 84px;
      height: 84px;
    }
    p {
      color: white;
    }
    a {
      text-decoration: none;
      color: white;
      border: 1px solid white;
      padding: 5px;
      border-radius: 5px;
    }
  }
`;
