import React from 'react';

import Layout from '../components/layout';
import LandingPage from '../components/landing-page';
import Categories from '../components/shared/categories';

const IndexPage = () => (
  <Layout>
    <LandingPage />
    <Categories />
  </Layout>
);

export default IndexPage;
