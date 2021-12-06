import React, { Dispatch } from 'react';

import { Button, Empty } from 'antd';
import { useRouter } from 'next/dist/client/router';

import TextHeader from 'common/components/TextHeader';
import { Review } from 'common/services/reponseInterface/review.interface';

import ReviewCard from '../ReviewCard';

const RecentReviewSection: React.FC<{
  displayName: string;
  review: Review[];
  loading: boolean;
  setLoading: Dispatch<React.SetStateAction<boolean>>;
}> = ({ displayName, review, loading, setLoading }) => {
  const Router = useRouter();

  return (
    <section className="recent-review">
      <TextHeader className="mb-2">Recent {displayName} Reviews</TextHeader>
      {review &&
        review.map((review: Review) => (
          <ReviewCard
            key={review.id}
            review={review}
            loading={loading}
            setLoading={setLoading}
          />
        ))}
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
