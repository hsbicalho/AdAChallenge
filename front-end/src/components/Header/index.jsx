import React from 'react';
import * as S from './styles';
import LogoHorizontal from '../../assets/Logo-Horizontal.jpg';

export default function index() {
  return (
    <S.HeaderMainContainer>
      <S.HeaderLogo
        src={ LogoHorizontal }
      />
    </S.HeaderMainContainer>
  );
}
