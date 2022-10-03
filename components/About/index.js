import React from 'react';
import styled from 'styled-components';

import OnlineBanking from '~/static/icon-online.svg';
import Budgeting from '~/static/icon-budgeting.svg';
import Onboarding from '~/static/icon-onboarding.svg';
import API from '~/static/icon-api.svg';

const index = () => {
  return (
    <AboutStyle>
      <Heading>
        <h2>Why choose Easybank?</h2>
        <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
      </Heading>
      <Main>
        <AboutItem>
          <OnlineBanking />
          <h5>Online Banking</h5>
          <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
        </AboutItem>

        <AboutItem>
          <Budgeting />
          <h5>Simple Budgeting</h5>
          <p>See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
        </AboutItem>

        <AboutItem>
          <Onboarding />
          <h5>Fast Onboarding</h5>
          <p>We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
        </AboutItem>

        <AboutItem>
          <API />
          <h5>Open API</h5>
          <p>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
        </AboutItem>
      </Main>
    </AboutStyle>
  )
}

const AboutStyle = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.color.mediumLightGray};
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  padding: 10rem 0;
`;

const Heading = styled.div`
  min-width: 1400px;
  margin: 0 auto;
  p {
    color: ${(props) => props.theme.color.bodyLightColor};
    font-size: ${(props) => props.theme.fontSizes.font_lead};
    margin: 15px 0 0 0;
  }
`;

const Main = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  gap: 3rem;
  justify-content: space-evenly;
`;

const AboutItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  p {
    color: ${(props) => props.theme.color.bodyLightColor};
    font-size: ${(props) => props.theme.fontSizes.font_lead};
    margin: 0;
  }
`;

export default index;