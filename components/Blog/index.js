import React from 'react';
import styled from 'styled-components';

import imgCurrency from '~/static/image-currency.jpg';
import imgRestaurant from '~/static/image-restaurant.jpg';
import imgPlane from '~/static/image-plane.jpg';
import imgConfetti from '~/static/image-confetti.jpg';

const index = () => {
  return (
    <BlogStyle>
      <Heading>
        <h2>Latest Articles</h2>
      </Heading>
      <Main>
        <BlogItem>
          <Thumbnail image={imgCurrency.src}></Thumbnail>
          <Description>
            <span>By Claire Robinson</span>
            <a href="/"><h6>Receive money in any currency with no fees</h6></a>
            <p>The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
          </Description>
        </BlogItem>

        <BlogItem>
          <Thumbnail image={imgRestaurant.src}></Thumbnail>
          <Description>
            <span>By Wilson Hutton</span>
            <a href="/"><h6>Treat yourself without worrying about money</h6></a>
            <p>Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …</p>
          </Description>
        </BlogItem>

        <BlogItem>
          <Thumbnail image={imgPlane.src}></Thumbnail>
          <Description>
            <span>By Wilson Hutton</span>
            <a href="/"><h6>Take your Easybank card wherever you go</h6></a>
            <p>We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …</p>
          </Description>
        </BlogItem>

        <BlogItem>
          <Thumbnail image={imgConfetti.src}></Thumbnail>
          <Description>
            <span>By Claire Robinson</span>
            <a href="/"><h6>Our invite-only Beta accounts are now live!</h6></a>
            <p>After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...</p>
          </Description>
        </BlogItem>
      </Main>
    </BlogStyle>
  )
}

const BlogStyle = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.color.lightGray};
  padding: 10rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 4rem;
`;

const Heading = styled.div`
  min-width: 1400px;
  margin: 0 auto;
`;

const Main = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  gap: 3rem;
`;

const BlogItem = styled.div`
  width: 310px;
  height: 500px;
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
  }
`;

const Thumbnail = styled.div`
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  flex: 1;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const Description = styled.div`
  flex: 1;
  background-color: ${(props) => props.theme.color.white};
  padding: 30px 20px;
  max-height: 250px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: space-between;

  span {
    font-size: ${(props) => props.theme.fontSizes.font_body_small};
    color: ${(props) => props.theme.color.bodyLightColor};
  }

  p {
    color: ${(props) => props.theme.color.bodyLightColor};
    margin: 0;
  }
`;

export default index;