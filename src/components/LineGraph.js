import React, { Component } from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";

const state = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Rainfall",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "blue",
      borderColor: "white",
      borderWidth: 2,
      data: [65, 59, 80, 81, 56],
    },
  ],
};

class LineGraph extends Component {
  state = {
    cases: [],
    deaths: [],
    recovered: [],
  };

  render() {
    return (
      <Container>
        <div className="line">
          <Line
            data={state}
            options={{
              title: {
                display: true,
                text: "Average Rainfall per month",
                fontSize: 20,
              },
              legend: {
                display: true,
                position: "right",
              },
            }}
          />
        </div>
      </Container>
    );
  }
}

export default LineGraph;

const Container = styled.div``;
