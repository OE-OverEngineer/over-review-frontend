import React from 'react';

const TextHeader: React.FC<{ className?: string }> = ({ children, className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className=" w-2 h-5 bg-primary-gradient mr-2" />
      <div className="text-lg">{children}</div>
    </div>
  );
};
export default TextHeader;
