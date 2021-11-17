import React from 'react';

const TopReviewCard: React.FC = () => {
  return (
    <section className="top-reivew-card">
      <div className="max-w-xs w-80 h-full rounded-2xl bg-primary-defaultDark px-4 py-8">
        <div className="text-lg text-center mb-8">Nawa-lee’s Top Reviews</div>
        <div className="flex flex-col gap-y-4">
          <div className="w-full h-12 bg-primary-default bg-opacity-50 rounded-2xl"></div>
          <div className="w-full h-12 bg-primary-default bg-opacity-50 rounded-2xl"></div>
          <div className="w-full h-12 bg-primary-default bg-opacity-50 rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default TopReviewCard;
