import React from "react";
import { Box, Text, CenteredFlex } from "./styles";

export default function TextButton(props) {
  const { id, text, selected, state, toggle } = props;
  return (
    <Box id={id} onClick={toggle(id, state)} selected={selected}>
      <CenteredFlex>
        <Text selected={selected}>{text}</Text>
      </CenteredFlex>
    </Box>
  );
}
