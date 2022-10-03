import Layout from '~/styles/layout';
import TopBar from '~/components/TopBar';
import HomePage from '~/components/Home';

export default function Home() {
  return (
    <Layout>
      <TopBar />
      <HomePage />
    </Layout>
  )
}
