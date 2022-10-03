import React from 'react';
import styled from 'styled-components';
import EasyBankLogo from '~/static/Logo.svg';

const index = () => {
  return (
    <LogoStyle><EasyBankLogo /></LogoStyle>
  )
}

const LogoStyle = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
`;

export default index;