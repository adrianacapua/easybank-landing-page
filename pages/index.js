import Layout from '~/styles/layout';
import TopBar from '~/components/TopBar';
import HomePage from '~/components/Home';
import AboutPage from '~/components/About';

export default function Home() {
  return (
    <Layout>
      <TopBar />
      <HomePage />
      <AboutPage />
    </Layout>
  )
}
