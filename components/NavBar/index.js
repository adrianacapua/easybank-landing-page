import React from 'react';
import styled from 'styled-components';

const index = () => {
  return (
    <NavBarStyle>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Contact</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Careers</a></li>
      </ul>
    </NavBarStyle>
  )
}

export default index;

const NavBarStyle = styled.div`
  font-size: ${(props) => props.theme.fontSizes.font_body};
  color: ${(props) => props.theme.color.bodyLightColor};

  ul, li {
    list-style: none;
    display: flex;
    gap: 50px;
    padding: 0;
    margin: 0;
  }

  li {
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li:hover {
    border-bottom: 5px solid ${(props) => props.theme.color.linkColor};
  }

  a {
    text-decoration: none;
    height: 20px;
  }
`;
