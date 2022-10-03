import Layout from '~/styles/layout';
import TopBar from '~/components/TopBar';
import HomePage from '~/components/Home';
import AboutPage from '~/components/About';
import BlogPage from '~/components/Blog';
import Footer from '~/components/Footer';

export default function Home() {
  return (
    <Layout>
      <TopBar />
      <HomePage />
      <AboutPage />
      <BlogPage />
      <Footer />
    </Layout>
  )
}
