import React from 'react';

import TextHeader from 'common/components/TextHeader';

import ReviewCard from '../ReviewCard';

const RecentReviewSection: React.FC<{
  id: string | number;
  firstName: string;
  review: any[];
}> = ({ id, firstName, review }) => {
  return (
    <section className="recent-review">
      <TextHeader className="mb-2">Recent {firstName} Reviews</TextHeader>
      {review &&
        review.map((review: any) => <ReviewCard key={review.id} review={review} />)}
    </section>
  );
};

export default RecentReviewSection;
