import React from 'react';
import styled from 'styled-components';
import EasyBankLogo from '~/static/logo.svg';
import EasyBankLogoWhite from '~/static/logo-white.svg';

const index = (props) => {
  return (
    <LogoStyle>
      {props.white ? <EasyBankLogoWhite /> : <EasyBankLogo />}
    </LogoStyle>
  )
}

const LogoStyle = styled.div`
  display: flex;
  justify-content: center;
`;

export default index;