import React from 'react';
import { CenteredFlex } from '../../styles';
import { ProfilePic, NameText, TitleText } from './styles';

export default function Profile(props) {
  const { src, name, title } = props;
  return (
    <CenteredFlex style={{ marginRight: 8, marginLeft: 8 }}>
      <ProfilePic src={src} alt="" />
      <NameText>{name}</NameText>
      <TitleText>{title}</TitleText>
    </CenteredFlex>
  );
}
