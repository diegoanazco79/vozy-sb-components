import React from 'react';

interface HeaderIconProps {
  className?: string;
  style?: React.CSSProperties
};

export const HeaderIcon = React.memo(({ className = '', style = { marginLeft: 2 } }: HeaderIconProps) => (
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
      d='M5.10684 6.49962L0.635573 0.808911C0.377808 0.480846 0.611517 0 1.02873 0H9.97127C10.3885 0 10.6222 0.480846 10.3644 0.80891L5.89316 6.49962C5.69297 6.7544 5.30703 6.7544 5.10684 6.49962Z'
      fill='#D5D5D5'
    />
  </svg>
), (prevProps, nextProps) => (
  prevProps.className === nextProps.className &&
  prevProps.style === nextProps.style
));