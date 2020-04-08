import React, { Component } from "react";
import Uzbekistan from "./components/Uzbekistan";
import World from "./components/World";
import styled from "styled-components";
import Navigation from "./UI/Navigation";
import TopTen from "./components/TopTen";
import Footer from "./UI/Footer";
import MenyuComponent from "./UI/Menyu";

class App extends Component {
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
        <Navigation menyuClicked={this.menyuToggleHandler} />
        {this.state.showMenyu ? (
          <MenyuComponent
            backdropClicked={this.menyuCloseHandler}
            menyuShow={this.state.showMenyu}
          />
        ) : null}
        <Uzbekistan />
        <World />
        <TopTen />
        <Footer />
      </Container>
    );
  }
}

const Container = styled.div`
  background-color: #f9f9f9;
`;

export default App;
