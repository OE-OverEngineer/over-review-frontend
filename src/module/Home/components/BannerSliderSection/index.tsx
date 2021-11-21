/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import BannerSlider from 'common/components/BannerSlider';

const BannerSliderSection: React.FC = () => {
  return (
    <section className="slider-banner py-16">
      <div className="text-center text-2xl font-poppins">
        # Your weekend buddy for this week
      </div>
      <div className="mt-16">
        <BannerSlider />
      </div>
    </section>
  );
};

export default BannerSliderSection;
