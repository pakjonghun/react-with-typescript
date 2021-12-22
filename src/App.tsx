import React from "react";
import styled from "styled-components";
import Circle from "./components/Circle";
import Form from "./components/Form";
import GlobalStyle from "./styles/Global";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Circle bgColor="black" />
      <Form />
      <Container>11</Container>;
    </>
  );
};
export default App;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.textColor};
  color: white;
`;
