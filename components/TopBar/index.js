import React from 'react';
import styled from 'styled-components';

import Logo from '~/components/Logo';
import NavBar from '~/components/NavBar';
import Button from '~/components/Button';

const index = () => {
  return (
    <TopBarStyle>
      <Logo />
      <NavBar />
      <Button title={'Request Invite'} />
    </TopBarStyle>
  )
}

const TopBarStyle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.color.white};
  width: 100%;
  height: 80px;
`;

export default index;