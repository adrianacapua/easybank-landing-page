import React from 'react';
import styled from 'styled-components';

const index = () => {
  return (
    <HomeStyle>index</HomeStyle>
  )
}

const HomeStyle = styled.div`
  height: calc(100vh - 50px);
  background-color: ${(props) => props.theme.color.lightGray};
`;

export default index;