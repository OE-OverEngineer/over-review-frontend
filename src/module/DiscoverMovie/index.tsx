import React from 'react';

import Head from 'next/head';

import BannerSlider from 'common/components/BannerSlider';
import Layouts from 'common/components/Layouts';

import DiscoverAllMovieSection from './components/DiscoverAllMovieSection';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Discover Movie</title>
        <link rel="icon" href="/over_icon.svg" />
      </Head>
      <Layouts>
        <BannerSlider className="mt-16" />
        <DiscoverAllMovieSection />
      </Layouts>
    </div>
  );
};

export default Home;
