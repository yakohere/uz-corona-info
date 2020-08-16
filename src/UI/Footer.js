import React from "react";
import styled from "styled-components";

const footer = () => {
  return (
    <Container>
      uzkorona.info © 2020{" "}
      <div>
        Made by <a href="https://www.linkedin.com/in/yako-ism/">Yakhyo</a>
      </div>
    </Container>
  );
};

export default footer;

const Container = styled.div`
  width: 100%;
  color: grey;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  padding: 5px;
  font-size: 15px;
  box-sizing: border-box;
`;
