import React from 'react';
import styled from 'styled-components';

import Logo from '~/components/Logo';
import Button from '~/components/Button';

import FacebookLogo from '~/static/icon-facebook.svg';
import InstagramLogo from '~/static/icon-instagram.svg';
import PinterestLogo from '~/static/icon-pinterest.svg';
import TwitterLogo from '~/static/icon-twitter.svg';
import YoutubeLogo from '~/static/icon-youtube.svg';

const index = () => {
  return (
    <FooterStyle>
      <Footer>
        <div>
          <Logo white={true} />
          <SocialMedias>
            <a href="/"><FacebookLogo /></a>
            <a href="#"><YoutubeLogo /></a>
            <a href="#"><TwitterLogo /></a>
            <a href="#"><PinterestLogo /></a>
            <a href="#"><InstagramLogo /></a>
          </SocialMedias>
        </div>

        <Nav>
          <ul>
            <li><a href="/">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </Nav>

        <CTA>
          <Button title={'Request Invite'} />
          <span>© Easybank. All Rights Reserved</span>
        </CTA>
      </Footer>
    </FooterStyle>
  )
}

const FooterStyle = styled.div`
  height: 200px;
  background-color: ${(props) => props.theme.color.bodyColor};
  padding: 4rem 0;
`;

const Footer = styled.div`
  max-width: 1400px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  color: ${(props) => props.theme.color.white};

  > div {
    display: flex;
    flex-direction: column;
    height: 100px;
    justify-content: space-between;
  }

  span {
    font-size: ${(props) => props.theme.fontSizes.font_body_small};
  }
`;

const SocialMedias = styled.div`
  display: flex;
  gap: 15px;

  svg:hover path {
    fill: ${(props) => props.theme.color.linkColor};
  }
`;

const Nav = styled.div`
  color: ${(props) => props.theme.color.white};
  font-size: ${(props) => props.theme.fontSizes.font_body};

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    columns: 2;
  }

  li {
    margin: 0 100px 10px 0;
  }

  a {
    color: ${(props) => props.theme.color.white};
    text-decoration: none;
  }

  a:hover {
    color: ${(props) => props.theme.color.linkColor};
  }
`;

const CTA = styled.div`
  text-align: right;
`;

export default index;