import React from "react";
import Uzbekistan from "./components/Uzbekistan";
import World from "./components/World";
import styled from "styled-components";
import Navigation from "./UI/Navigation";

function App() {
  return (
    <Container>
      <Navigation />
      <Uzbekistan />
      <World />
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
`;

export default App;
