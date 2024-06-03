import React from "react";

import { Circle, Container, DietText } from "./style";

interface Props {
  isDiet: boolean;
}
export function DietLabel({ isDiet }: Props) {
  return (
    <Container>
      <Circle isDiet={isDiet} />

      {isDiet === true ? (
        <DietText>dentro da dieta</DietText>
      ) : (
        <DietText>fora da dieta</DietText>
      )}
    </Container>
  );
}
