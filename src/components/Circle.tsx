import styled from "styled-components";

type ContainerProps = {
  bgColor: string;
};

type CircleProps = {
  bgColor: string;
};

const Circle = ({ bgColor }: CircleProps) => {
  return <Container bgColor={bgColor}></Container>;
};

const Container = styled.div<ContainerProps>`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
`;

export default Circle;
