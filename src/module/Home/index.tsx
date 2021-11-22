import React from 'react';

import Head from 'next/head';

import Layouts from 'common/components/Layouts';

import BannerSliderSection from './components/BannerSliderSection';
import DiscoverMovieSection from './components/DiscoverMovieSection';
import HallOfFameSection from './components/HallOfFameSection';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/over_icon.svg" />
      </Head>
      <Layouts>
        <BannerSliderSection />
        <DiscoverMovieSection />
        <HallOfFameSection />
      </Layouts>
    </div>
  );
};

export default Home;
