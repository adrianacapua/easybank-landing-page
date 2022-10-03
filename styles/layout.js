import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import AppTheme, { GlobalCSS } from './theme';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={AppTheme}>
      <Head>
        <title>EasyBank</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>
      <GlobalCSS />
      { children }
    </ThemeProvider>
  )
}

export default Layout;
