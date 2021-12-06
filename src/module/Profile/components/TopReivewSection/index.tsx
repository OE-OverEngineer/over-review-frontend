import React, { Dispatch } from 'react';

import TextHeader from 'common/components/TextHeader';
import { Review } from 'common/services/reponseInterface/review.interface';

import ReviewCard from '../ReviewCard';

const TopReviewSection: React.FC<{
  displayName: string;
  review: Review[];
  loading: boolean;
  setLoading: Dispatch<React.SetStateAction<boolean>>;
}> = ({ displayName, review, loading, setLoading }) => {
  return (
    <section className="top-review">
      <TextHeader className="mb-2">{displayName} Top Reviews</TextHeader>
      {review &&
        review.map((review: Review) => (
          <ReviewCard
            key={review.id}
            review={review}
            loading={loading}
            setLoading={setLoading}
          />
        ))}
    </section>
  );
};

export default TopReviewSection;
