import React, { useEffect, useState } from 'react';

import TextHeader from 'common/components/TextHeader';
import reviewsController from 'common/services/Controllers/reviewsControllers';

import ReviewCard from '../ReviewCard';

const RecentReviewSection: React.FC = () => {
  const [review, setReview] = useState<any>();

  const { getReviews } = reviewsController();

  useEffect(() => {
    getReviews().then((res) => {
      console.log(res);
      setReview(res);
    });
  }, []);

  return (
    <section className="recent-review">
      <TextHeader className="mb-2">Recent Nawa-lee’s Reviews</TextHeader>
      {review &&
        review.map((review: any) => <ReviewCard key={review.id} review={review} />)}
    </section>
  );
};

export default RecentReviewSection;
