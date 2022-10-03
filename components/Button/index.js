import React from 'react';
import styled from 'styled-components';

const index = (props) => {
  const { title } = props;

  return (
    <ButtonStyle>
      <button>{title}</button>
    </ButtonStyle>
  )
}

const ButtonStyle = styled.div`
  button {
    border: none;
    background: linear-gradient(to right bottom, #67D333, #2AB6D9);
    padding: 14px 35px;
    color: ${(props) => props.theme.color.white};
    font-weight: bold;
    border-radius: 20px;
    font-size: ${(props) => props.theme.fontSizes.font_body_small};;
  }
`;

export default index;