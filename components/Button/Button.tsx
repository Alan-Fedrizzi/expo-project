import * as React from "react";
import { styled } from "@mui/material/styles";
import { Button, ButtonProps } from "@mui/material";

interface ButtonStyleProps extends ButtonProps {
  teste?: boolean;
}

// funcionar na web
// NÃO funciona no android

const ButtonContainer = styled(Button)<ButtonStyleProps>(
  ({ theme, teste = false }) => ({
    color: teste ? "red" : "yellow",
    variants: [
      {
        props: {
          teste: true,
        },
        style: {
          background: "orange",
        },
      },
      {
        props: {
          variant: "outlined",
        },
        style: {
          color: teste ? "green" : "violet",
        },
      },
      {
        props: {
          variant: "contained",
        },
        style: {
          color: "blue",
        },
      },
    ],
  })
);

export default function TpButton(props: ButtonStyleProps) {
  const { children, ...otherProps } = props;

  return <ButtonContainer {...otherProps}>{children}</ButtonContainer>;
}
