import React from 'react';
import styled from 'styled-components';

const index = () => {
  return (
    <TopBarStyle>TopBar Here</TopBarStyle>
  )
}

const TopBarStyle = styled.div`
  background-color: ${(props) => props.theme.color.white};
`;

export default index;