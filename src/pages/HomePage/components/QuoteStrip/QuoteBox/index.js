import React from 'react';
import { Box, QuoteText, Reference, Picture } from './styles';
import quoteImg from '../../../../../assets/icons/items/q.png';

export default function QuoteBox(props) {
  const { text, reference } = props;
  return (
    <Box>
      <Picture src={quoteImg} alt="Quotation icon" />
      <QuoteText>{text}</QuoteText>
      <Reference>{reference}</Reference>
    </Box>
  );
}
