import { createGlobalStyle } from 'styled-components';

const AppTheme = {
  // z-index
  zIndex: {
    z1: 100,
    z2: 200,
    z3: 300,
    z4: 400,
    z5: 500,
    z6: 600,
    z7: 700,
    z8: 800,
    z9: 900,
    z10: 1000,
    z11: 1100,
    z12: 1200,
    z13: 1300,
    z14: 1400,
    overlapChatBox: 2147483640,
  },

  // colour
  color: {
    //primary:
    darkBlue: 'hsl(233, 26%, 24%)',
    limeGreen: 'hsl(136, 65%, 51%)',
    brightCyan: 'hsl(192, 70%, 51%)',

    // neutral
    grayishBlue: 'hsl(233, 8%, 62%)',
    lightGrayishBlue: 'hsl(220, 16%, 96%)',
    veryLightGray: 'hsl(0, 0%, 98%)',

    buttonColor: '#33D35E',
    linkColor: '#30C88F',
    bodyColor: '#2D314D',
    bodyLightColor: '#9597A5',

    white: '#FFFFFF',
    lightGray: '#F2F2F2',
    mediumLightGray: '#F4F5F7',
  },

  // font-sizes
  fontSizes: {
    font_s: '0.75rem', // 12px
    font_body_small: '0.875rem', // 14px
    font_body: '1rem', // 16px
    font_med: '1.125rem', // 18px
    font_lead: '1.25rem', // 20px
    font_heading_light: '1.375rem', //22px
    font_lge: '2rem', // 32px
    font_x_lge: '2.25rem', // 36px
  },

  // breakpoint
  breakpoint: {
    xs: 0,
    xsm: '420px',
    sm: '768px',
    md: '1024px',
    lg: '1216px',
    xl: '1408px',
  },

  // fonts
  fonts: "'Public Sans', sans-serif",
};

export const GlobalCSS = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    overflow-y: auto;
    font-size: 100%;
    padding: 0;
    margin: 0;
  }

  body {
    text-rendering: optimizeLegibility;
    font-size: ${AppTheme.fontSizes.font_med};
    line-height: 1.5;
    font-family: ${AppTheme.fonts};
    color: ${AppTheme.color.bodyColor};
    background-color: ${AppTheme.color.white};
    padding: 0;
    margin: 0;
  }

  h1 { font-size: 3.25rem; margin-top: 0.9em;margin-bottom: 0.45em; font-weight: 300; line-height: 1.5; letter-spacing: -.006em;}
  h2 { font-size: 2.313rem; margin-top: 0.60em;margin-bottom: 0.45em; font-weight: 400; line-height: 1.5; letter-spacing: -.006em;}
  h3 { font-size: 2rem; margin-top: 0.60em;margin-bottom: 0.45em; font-weight: 400; line-height: 1.5; letter-spacing: -.006em;}
  h4 { font-size: 1.563rem; margin-top: 0.60em;margin-bottom: 0.45em; font-weight: 400; line-height: 1.5;}
  h5 { font-size: 1.375rem; margin-top: 0.60em;margin-bottom: 0.45em; font-weight: 400; line-height: 1.5;}
  h6 { font-size: 0.875rem;margin-bottom: 0.45em; font-weight: 400; line-height: 1.5;}

  p {
    font-size: 1rem;
    margin: 0.55rem 0;
    color: ${AppTheme.color.bodyColor};
  }

  a {
    color: ${AppTheme.color.bodyColor};
    cursor: pointer;
  }

  a:hover {
    color: ${AppTheme.color.linkColor};
    text-decoration: none;
  }

  a:focus {
    outline: none;
    text-decoration: none;
  }

  b { font-weight: 600; }

  hr { opacity: .2; }


  @media (max-width: ${AppTheme.breakpoint.sm}) {

    body {
      font-size: 0.875rem;
    }

    h1 { font-size: 3.2rem; }
    h2 { font-size: 2.6rem; }
    h3 { font-size: 2.4rem; }
    h4 { font-size: 1.125rem; }
    h5 { 
      font-size: 1rem;
      font-weight: 500;
      }
    h6 {
        font-size: 0.875rem;
        font-weight: 500;
        }
    p {
      font-size: ${AppTheme.fontSizes.font_body_small};
      }

  }
`;

export default AppTheme;
