import React from "react";
import { Box, QuoteText, Reference } from "./styles";

export default function QuoteBox(props) {
  const { text, reference } = props;
  return (
    <Box>
      <QuoteText>{text}</QuoteText>
      <Reference>{reference}</Reference>
    </Box>
  );
}
