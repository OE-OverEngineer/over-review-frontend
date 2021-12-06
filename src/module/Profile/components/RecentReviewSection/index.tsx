import React from 'react';

import { Button, Empty } from 'antd';
import { useRouter } from 'next/dist/client/router';

import TextHeader from 'common/components/TextHeader';
import { Review } from 'common/services/reponseInterface/review.interface';

import ReviewCard from '../ReviewCard';

const RecentReviewSection: React.FC<{
  id: string | number;
  firstName: string;
  review: Review[];
}> = ({ id, firstName, review }) => {
  const Router = useRouter();

  return (
    <section className="recent-review">
      <TextHeader className="mb-2">Recent {firstName} Reviews</TextHeader>
      {review &&
        review.map((review: Review) => <ReviewCard key={review.id} review={review} />)}
      {review && review.length === 0 && (
        <div className="w-full h-full rounded-2xl bg-primary-defaultDark opacity-90 p-4 mb-4">
          <Empty
            image={Empty.PRESENTED_IMAGE_DEFAULT}
            className="my-4"
            description={<span>There hasn&apos;t been any review yet.</span>}>
            <Button
              type="primary"
              onClick={() => {
                Router.push('/discover-movie');
              }}>
              Review now
            </Button>
          </Empty>
        </div>
      )}
    </section>
  );
};

export default RecentReviewSection;
