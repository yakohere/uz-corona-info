import React from "react";
import Uzbekistan from "./components/Uzbekistan";
import World from "./components/World";
import styled from "styled-components";
import Navigation from "./UI/Navigation";
import TopTen from "./components/TopTen";
import Footer from "./UI/Footer";
import Pic from "./assets/backpic.jpg";

function App() {
  return (
    <Container>
      <Navigation />
      <Uzbekistan />
      <World />
      <TopTen />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  background-color: #f9f9f9;
`;

export default App;
