import styles from '../styles/pages/Home.module.css';
import LayoutCard from '../components/LayoutCard';

import { useUserContext } from '../UserProvider';
import Head from 'next/head';
import Layout from '../components/Layout';
import isAuth from '../components/isAuth';

const Home = () => {
  const { user } = useUserContext();
  

  return (
    <Layout>
      <Head>
        <title>Dashboard - Nhost</title>
      </Head>
      <LayoutCard />
     sss
    </Layout>
  );
}

export default isAuth(Home);