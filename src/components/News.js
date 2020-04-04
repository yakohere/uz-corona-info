import React, { Component } from "react";
import styled from "styled-components";
import newsData from "../static/newsData";
import BlackNavigation from "../UI/BlackNav";

class News extends Component {
  render() {
    return (
      <Container>
        <BlackNavigation path="/malumot" pathName="MA`LUMOT" />
        <div className="scnd-cont">
          {newsData.map((news) => (
            <div key={news.id} className="news">
              <div className="img">
                <img src={news.img} alt="img" />
              </div>
              <div className="text">
                <div className="title">{news.title}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    );
  }
}

export default News;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  box-sizing: border-box;

  .scnd-cont {
    width: 80%;
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    flex-wrap: wrap;

    @media screen and (max-width: 428px) {
      width: 95%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  .news {
    width: 250px;
    height: auto;
    border: 1px solid grey;
    border-radius: 5px;
    overflow: hidden;
    @media screen and (max-width: 428px) {
      width: 90%;
      margin-bottom: 10px;
    }

    .img {
      width: 250px;
      height: 150px;
      @media screen and (max-width: 428px) {
        width: 100%;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .text {
      padding: 10px;

      .title {
      }
      .article {
        font-size: 15px;
      }
    }
  }
`;
