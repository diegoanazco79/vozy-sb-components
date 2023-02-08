import React from 'react';

interface ArrowIconProps {
  className?: string;
  style?: React.CSSProperties
};

const ArrowIcon = ({ className, style }: ArrowIconProps) => {
  return (
    <svg
      className={className}
      style={style}
      width='11'
      height='7'
      viewBox='0 0 11 7'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1 1L5.5 5.5L10 1'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
        fill='none'
      />
    </svg>
  );
};

ArrowIcon.defaultProps = {
  className: '',
  style: {}
};

export default ArrowIcon;
