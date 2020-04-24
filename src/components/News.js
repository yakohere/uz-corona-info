import React, { Component } from "react";
import styled from "styled-components";
import Navigation from "../UI/Navigation";
import Menyu from "../UI/Menyu";
import axios from "axios";
import Spinner from "../UI/Spinner/Spinner";

class News extends Component {
  state = {
    showMenyu: false,
    posts: [],
    loading: false,
  };
  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get("https://corona-uzb-news.firebaseio.com/posts.json")
      .then((res) => {
        const fetchedPosts = [];
        for (let key in res.data) {
          fetchedPosts.push({
            ...res.data[key],
            id: key,
          });
        }

        const reversePosts = fetchedPosts.sort((a, b) =>
          a.id < b.id ? 1 : -1
        );
        this.setState({ loading: false, posts: reversePosts });
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  }

  menyuToggleHandler = () => {
    this.setState({ showMenyu: true });
  };

  menyuCloseHandler = () => {
    this.setState({ showMenyu: false });
  };
  render() {
    let news;
    if (this.state.loading) {
      news = <Spinner />;
    } else {
      news = (
        <Container>
          {this.state.showMenyu ? (
            <Menyu backdropClicked={this.menyuCloseHandler} />
          ) : null}
          <Navigation
            menyuClicked={this.menyuToggleHandler}
            path="/malumot"
            pathName="MA`LUMOT"
            path2="/jadval"
            pathName2="JADVAL"
          />
          <div className="scnd-cont">
            {this.state.posts.map((post) => (
              <div key={post.id} className="news">
                <div className="img">
                  <img src={post.postData.imgUrl} alt="img" />
                </div>
                <div className="text">
                  <div className="title">
                    <strong>{post.time}:</strong> {post.postData.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      );
    }

    return <div>{news}</div>;
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
    height: auto;
    display: flex;
    justify-content: space-around;

    align-items: center;
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
    margin-bottom: 10px;
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
    }
  }
`;
