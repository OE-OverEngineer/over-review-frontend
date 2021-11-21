import React from 'react';

interface ISvg {
  className?: string;
  Icon: React.ReactNode;
}

const Svg: React.FC<ISvg> = ({ className, Icon }) => (
  <div className={className}>{Icon}</div>
);

export default Svg;
