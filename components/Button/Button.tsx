import * as React from "react";
import styled, { css } from "styled-components/native";
import { Button, ButtonProps } from "@mui/material";

interface ButtonStyleProps extends ButtonProps {
  teste?: boolean;
}

// funcionar na web
// NÃO funciona no android
// tentei remover o styled emotion e colocar o styled-components... não funciona geral agora...

const ButtonContainer = styled(Button)<ButtonStyleProps>`
  ${({ theme, teste = false }) => css`
    color: teste ? "red" : "yellow",
  `}
`;

export default function TpButton(props: ButtonStyleProps) {
  const { children, ...otherProps } = props;

  return <ButtonContainer {...otherProps}>{children}</ButtonContainer>;
}
