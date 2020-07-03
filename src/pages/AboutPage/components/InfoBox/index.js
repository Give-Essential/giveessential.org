import React from 'react';
import { CenteredFlex } from '../../styles';
import { WhiteBox, Title, NumberPic, IconPic, Reference } from './styles';

export default function InfoBox(props) {
  const { numsrc, reference, iconsrc, title } = props;
  return (
    <CenteredFlex style={{ marginRight: 16, marginLeft: 16 }}>
      <WhiteBox>
        <NumberPic src={numsrc} alt="" />
        <Title>{title}</Title>
        <Reference>{reference}</Reference>
        <IconPic src={iconsrc} alt="" />
      </WhiteBox>
    </CenteredFlex>
  );
}
