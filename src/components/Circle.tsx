import { useCallback, useState } from "react";
import styled from "styled-components";

type CircleProps = {
  bgColor?: string;
};

type ContainerProps = {
  bgColor: string;
};

type Counter = {
  number: number;
};

const Circle = ({ bgColor }: CircleProps) => {
  const [value, setValue] = useState<Counter>({ number: 1 });

  const plus = useCallback(() => {
    setValue({ number: value.number + 1 });
  }, [value]);

  return (
    <Container onClick={plus} bgColor={bgColor ?? ""}>
      {value.number}
    </Container>
  );
};

const Container = styled.div<ContainerProps>`
  width: 100px;
  height: 100px;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Circle;
