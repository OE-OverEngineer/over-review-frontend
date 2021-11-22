import React from 'react';

import TextHeader from 'common/components/TextHeader';

import ReviewCard from '../ReviewCard';

const RecentReviewSection: React.FC = () => {
  return (
    <section className="recent-review">
      <TextHeader className="mb-2">Recent Nawa-lee’s Reviews</TextHeader>
      <ReviewCard />
    </section>
  );
};

export default RecentReviewSection;
