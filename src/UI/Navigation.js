import React from "react";
import styled from "styled-components";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { MenuAltRight } from "@styled-icons/boxicons-regular/MenuAltRight";

import { BarGraph } from "@styled-icons/entypo/BarGraph";
import { Table } from "@styled-icons/boxicons-regular/Table";
import { InfoCircle } from "@styled-icons/boxicons-regular/InfoCircle";

const Graph = styled(BarGraph)`
  color: red;
  width: 25px;
  height: auto;
`;

const Tb = styled(Table)`
  color: red;
  width: 25px;
  height: auto;
`;

const In = styled(InfoCircle)`
  color: red;
  width: 25px;
  height: auto;
`;

const navigation = () => {
  return (
    <Container>
      <div className="nav">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="links">
          <Link to="/">
            <Graph /> Statistika
          </Link>
          <Link to="/jadval">
            <Tb /> Jadval
          </Link>
          <Link to="/malumot">
            <In /> Malumot
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
  padding: 10px;
  box-sizing: border-box;
  color: black;
  font-size: 15px;

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

    .links {
      width: 40%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      @media screen and (max-width: 728px) {
        display: none;
      }

      a {
        text-align: center;
        font-size: 17px;
        text-decoration: none;
        color: black;
        padding: 3px;
      }
    }

    .logo {
      align-items: center;
      display: flex;

      img {
        width: 200px;
        height: auto;
      }
    }
  }
`;

const MenuLogo = styled(MenuAltRight)`
  width: 55px;
  height: 55px;
  color: white;
`;
