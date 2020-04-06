import React, { Component } from "react";
import styled from "styled-components";
import Aux from "./Auxiliary";
import { Link } from "react-router-dom";

import { Home } from "@styled-icons/boxicons-solid/Home";
import { News } from "@styled-icons/boxicons-regular/News";
import { ExclamationCircle } from "@styled-icons/heroicons-outline/ExclamationCircle";
import { TrendingUp } from "@styled-icons/boxicons-regular/TrendingUp";
import { InfoWithCircle } from "@styled-icons/entypo/InfoWithCircle";

class Login extends Component {
  render() {
    return (
      <Aux>
        <Backdrop
          show={this.props.show}
          onClick={this.props.backdropClicked}
        ></Backdrop>
        <Menyu>
          <div className="logo">
            COVID-19 STATISTIKA
            <br />
            uzkorona.info
          </div>
          <div className="ul">
            <Link to="/">
              <Hm /> Bosh sahifa
            </Link>

            <Link to="/yangiliklar">
              <Nw /> Yangiliklar
            </Link>

            <Link to="/covid19">
              <Ec /> Covid-19 haqida
            </Link>

            <Link to="/jadval">
              <Tu /> Jadval
            </Link>

            <Link to="/malumot">
              <Ic /> Ma`lumot
            </Link>
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
  box-sizing: border-box;
  .logo {
    width: 100%;
    height: 95px;
    color: white;

    background: linear-gradient(
      180deg,
      #5860a7 3.98%,
      rgba(88, 167, 162, 0.65) 95.59%
    );
    text-align: center;
    padding: 30px;
    box-sizing: border-box;
    border-bottom-left-radius: 30px;
  }

  .ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    box-sizing: border-box;

    a {
      text-decoration: none;
      padding: 10px;
      color: black;
      float: right;
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

const Hm = styled(Home)`
  height: 30px;
  width: 30px;
  color: #786cc2;
`;

const Nw = styled(News)`
  height: 30px;
  width: 30px;
  color: #3a7d44;
`;

const Ec = styled(ExclamationCircle)`
  height: 30px;
  width: 30px;
  color: #62726c;
`;

const Tu = styled(TrendingUp)`
  height: 30px;
  width: 30px;
  color: #fc440f;
`;

const Ic = styled(InfoWithCircle)`
  height: 30px;
  width: 30px;
  color: #656a73;
`;
