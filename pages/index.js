import styles from '../styles/pages/Home.module.css';
import LayoutCard from '../components/LayoutCard';
import MatchCards from '../components/MatchCards';
import BottomIcons from '../components/BottomIcons';

import { useUserContext } from '../UserProvider';
import Head from 'next/head';
import Layout from '../components/Layout';
import isAuth from '../components/isAuth';

const Home = () => {
  const { user } = useUserContext();
  

  return (
    <Layout>
      <Head>
        <title>Winder Home</title>
      </Head>
      <MatchCards />
      <BottomIcons />
     
    </Layout>
  );
}

export default isAuth(Home);