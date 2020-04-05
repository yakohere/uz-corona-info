import React, { Component } from "react";
import styled from "styled-components";
import Aux from "./Auxiliary";
import { Link } from "react-router-dom";
import Virus from "../assets/virus.png";

class Login extends Component {
  render() {
    return (
      <Aux>
        <Backdrop onClick={this.props.backdropClicked}></Backdrop>
        <Menyu>
          <div className="logo">
            <img src={Virus} alt="corona-logo" />
            COVID-19 <br />
            STATISTIKA
          </div>
          <div className="ul">
            <Link to="/">Bosh sahifa</Link>
            <hr />
            <Link to="/yangiliklar">Yangiliklar</Link>
            <hr />
            <Link to="/malumot">Covid-19 haqida</Link>
            <hr />
            <Link to="/jadval">Jadval</Link>
            <hr />
            <Link to="/malumot">Ma`lumot</Link>
          </div>
        </Menyu>
      </Aux>
    );
  }
}

export default Login;

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 200;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Menyu = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  background-color: #f9f9f9;
  width: 75%;
  z-index: 300;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;

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

  .ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;

    a {
      text-decoration: none;
      padding: 5px;
      color: black;
    }

    hr {
      width: 70%;
      color: grey;
    }
  }

  .closer {
    background-color: white;
    opacity: 0.6;
    left: 0;
    top: 0;
    width: 15px;
    cursor: pointer;
    border: 1px solid grey;
  }
`;
