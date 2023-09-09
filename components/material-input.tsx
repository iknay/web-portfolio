import TextField, { StandardTextFieldProps } from "@mui/material/TextField";
import { alpha, styled } from "@mui/material/styles";
import { ChangeEventHandler } from "react";

export interface MaterialInputProps extends StandardTextFieldProps {
  colorTheme: "white" | "black";
  onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  value: string | null;
  name: string;
}

export const MaterialInput = styled(
  (props: MaterialInputProps) => <TextField {...props} />,
  {
    shouldForwardProp: (prop) => prop !== "colorTheme",
  }
)(({ colorTheme, theme }) => ({
  ...(colorTheme === "white" && {
    "& input": {
      color: "#333333 !important",
      "-webkit-text-fill-color": "#333333 !important",
    },
    "& label": {
      color: "#333333!important",
    },
    "& fieldset": {
      borderColor: "#333333 !important",
    },
    "&:hover fieldset": {
      borderColor: "#333333 !important",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#333333 !important",
    },
    ".MuiSvgIcon-root ": {
      fill: "#333333 !important",
    },
    "& .MuiInputBase-input": {
      color: "#333333 !important",
      "-webkit-text-fill-color": "#333333 !important",
    },
  }),


}));
