import React, { useEffect, useState } from 'react';

import TextHeader from 'common/components/TextHeader';
import reviewsController from 'common/services/Controllers/reviewsControllers';
import userController from 'common/services/Controllers/userController';

import ReviewCard from '../ReviewCard';

const RecentReviewSection: React.FC<{
  id: string | number;
  firstName: string;
}> = ({ id, firstName }) => {
  const [review, setReview] = useState<any>();

  const { getUsersIdReviews } = userController();

  useEffect(() => {
    getUsersIdReviews(id, 10, 1).then((res) => {
      console.log(res);
      setReview(res);
    });
  }, []);

  return (
    <section className="recent-review">
      <TextHeader className="mb-2">Recent {firstName} Reviews</TextHeader>
      {review &&
        review.map((review: any) => <ReviewCard key={review.id} review={review} />)}
    </section>
  );
};

export default RecentReviewSection;
