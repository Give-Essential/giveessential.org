import React from 'react';
import { Box, Text, Icon, CenteredFlex } from './styles';

export default function IconButton(props) {
  const { id, text, icon, selected, state, toggle } = props;
  return (
    <Box id={id} onClick={toggle(id, state)} selected={selected}>
      <CenteredFlex>
        <Icon src={icon} alt="" selected={selected}></Icon>
        <Text selected={selected}>{text}</Text>
      </CenteredFlex>
    </Box>
  );
}
