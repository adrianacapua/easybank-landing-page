import React from 'react';
import styled from 'styled-components';

import BgIntroDesktop from '~/static/bg-intro-desktop.svg';
import ImageMockups from '~/static/image-mockups.png';
import Button from '~/components/Button';

const index = () => {
  return (
    <HomeStyle>
      <HeaderWrapper>
        <Header>
          <h1>Next generation digital banking</h1>
          <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
          <Button title={'Request Invite'} />
        </Header>
      </HeaderWrapper>
      <BgIntroDesktopStyle>
        <BgIntroDesktop />
        <img src={ImageMockups.src} />
      </BgIntroDesktopStyle>
    </HomeStyle>
  )
}

const HomeStyle = styled.div`
  height: calc(100vh - 50px);
  background-color: ${(props) => props.theme.color.lightGray};
  /* position: relative; */
  overflow: hidden;
  display: flex;

  > div {
    flex: 1;
    height: 100%;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;

  p {
    color: ${(props) => props.theme.color.bodyLightColor};
    font-size: ${(props) => props.theme.fontSizes.font_lead};
    margin: 0;
  }
`;

const BgIntroDesktopStyle = styled.div`
  position: relative;
  
  svg {
    position: absolute;
    top: -200px;
    left: 50px;
  }

  img {
    position: absolute;
    top: -80px;
    right: -80px;
  }
`;

export default index;