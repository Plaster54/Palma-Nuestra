import React from 'react';

import Layout from '../components/layout';
import LandingPage from '../components/landing-page';
import Carousell from '../components/carousel';
import IndexCard from '../components/index-card';
import Categories from '../components/shared/categories';

const IndexPage = () => (
  <Layout>
    <LandingPage />
    <Categories />
  </Layout>
);

export default IndexPage;
