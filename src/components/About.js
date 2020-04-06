import React, { Component } from "react";
import styled from "styled-components";
import Me from "../assets/me.png";
import Virus from "../assets/virus.png";
import Navigation from "../UI/Navigation";
import Menyu from "../UI/Menyu";

import { FacebookSquare } from "@styled-icons/boxicons-logos/FacebookSquare";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";
import { Email } from "@styled-icons/material-outlined/Email";

class About extends Component {
  state = {
    showMenyu: false,
  };

  menyuToggleHandler = () => {
    this.setState({ showMenyu: true });
  };

  menyuCloseHandler = () => {
    this.setState({ showMenyu: false });
  };

  render() {
    return (
      <Container>
        {this.state.showMenyu ? (
          <Menyu backdropClicked={this.menyuCloseHandler} />
        ) : null}
        <Navigation
          menyuClicked={this.menyuToggleHandler}
          path="./yangiliklar"
          pathName="YANGILIKLAR"
          path2="/jadval"
          pathName2="JADVAL"
        />
        <div className="about-site">
          <img className="spinned" src={Virus} alt="corona-logo" />
          <div className="txt">
            Ushbu web sayt sizga yangi kirib kelgan COVID-19 ya`ni korona
            virusini O`zbekiston va Dunyo bo`yicha ishonarli raqamlar bilan
            ko`rsatadi. Barcha ma`lumotlar Jahon Sog`liqni Saqlash Vazirligi
            ma`lumotlar bazasidan olinadi shu sababli O`zbekistondagi raqamlar
            JSSV tomonidan tasdiqlanmaguncha statistikalar yangilanishi 10 yoki
            20 minutga kechikishi mumkin. Dasturlash jarayoni hali ham davom
            etmoqda tez orada yana yangi bo`lim va ma`lumotlar kiritiladi.
          </div>
        </div>
        <div className="about-me">
          <img className="me" src={Me} alt="me" />
          <div className="txt">
            Web sayt Yakhyo Ismoiljonov tomonidan tayyorlandi.
            <br />
            <a href="https://www.facebook.com/yakhyo.ismoildjanov">
              <Fb />
            </a>
            <a href="mailto:yakhyoismoildjonov@gmail.com?subject=subject text">
              <Mail />
            </a>
            <a href="https://www.linkedin.com/in/yako-ism/">
              <In />
            </a>
            <a href="https://github.com/devyako/">
              <Git />
            </a>
          </div>
        </div>
      </Container>
    );
  }
}

export default About;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 20px;
  flex-direction: column;
  box-sizing: border-box;
  background-color: #f9f9f9;
  @media screen and (max-width: 428px) {
    padding: 5px;
  }

  .about-site {
    padding: 20px;
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    @media screen and (max-width: 428px) {
      width: 100%;
      flex-direction: column;
    }

    .spinned {
      width: 20%;
      border-radius: 50%;
      animation: rotation 10s infinite linear;
      @media screen and (max-width: 428px) {
        width: 50%;
      }

      @keyframes rotation {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(359deg);
        }
      }

      @media screen and (max-width: 428px) {
        width: 50%;
      }
    }

    .txt {
      width: 70%;
      padding: 20px;
      text-align: center;
      @media screen and (max-width: 428px) {
        width: 90%;
      }
    }
  }

  .about-me {
    padding: 20px;
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    @media screen and (max-width: 428px) {
      width: 100%;
      flex-direction: column;
    }

    .me {
      width: 20%;
      border-radius: 50%;

      @media screen and (max-width: 428px) {
        width: 50%;
      }
    }

    .txt {
      width: 70%;
      padding: 20px;
      text-align: center;
      @media screen and (max-width: 428px) {
        width: 90%;
      }
    }
  }
`;

const Fb = styled(FacebookSquare)`
  color: #4267b2;
  height: 50px;
  width: 50px;
  /* padding: 5px; */
`;
const In = styled(LinkedinSquare)`
  height: 50px;
  width: 50px;
  color: #2867b2;
`;

const Git = styled(Github)`
  height: 50px;
  width: 50px;
  color: black;
`;

const Mail = styled(Email)`
  height: 50px;
  width: 50px;
  color: #db4437;
`;
