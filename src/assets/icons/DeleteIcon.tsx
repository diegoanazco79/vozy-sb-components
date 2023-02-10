interface ArrowIconProps {
  className?: string;
  style?: React.CSSProperties
};

const DeleteIcon = ({ className, style }: ArrowIconProps) => (
  <svg
    className={className}
    style={style}
    width='20'
    height='19'
    viewBox='0 0 20 19'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M14.376 17.852H4.68369C4.31646 17.852 3.96428 17.7061 3.70462 17.4465C3.44495 17.1868 3.29907 16.8346 3.29907 16.4674V4.00586H15.7606V16.4674C15.7606 16.8346 15.6147 17.1868 15.3551 17.4465C15.0954 17.7061 14.7432 17.852 14.376 17.852Z'
      strokeLinecap='round'
      strokeLinejoin='round'
      fill='none'
    />
    <path
      d='M7.45288 13.6976V8.15918'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M11.6067 13.6976V8.15918'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M0.529785 4.00586H18.5298'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M11.6066 1.23633H7.45273C7.08551 1.23633 6.73333 1.38221 6.47366 1.64187C6.21399 1.90154 6.06812 2.25372 6.06812 2.62094V4.00556H12.9912V2.62094C12.9912 2.25372 12.8453 1.90154 12.5856 1.64187C12.326 1.38221 11.9738 1.23633 11.6066 1.23633V1.23633Z'
      strokeLinecap='round'
      strokeLinejoin='round'
      fill='none'
    />
  </svg>
);

export default DeleteIcon;

DeleteIcon.defaultProps = {
  className: '',
  style: {}
};
