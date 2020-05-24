import React from 'react';

import Layout from '../components/layout';
import LandingPage from '../components/landing-page';
import Carousell from '../components/carousel';
import IndexCard from '../components/index-card';

const IndexPage = () => (
  <Layout>
    <LandingPage />
    <Carousell />
    <IndexCard />
  </Layout>
);

export default IndexPage;
