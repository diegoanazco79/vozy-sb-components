import { CSpinner } from '@coreui/react';

import '../../styles/loadingData.scss';

export interface LoadingDataProps {
  /**
   * ID of the component
   */
  id?: string;
  /**
   * Common bootstrap styles for spinner component
   */
  classNames?: string;
  /**
   * This is the type of spinner. Depending on it, it will change its styles
   */
  size: 'sm' | undefined;
  /**
   * Common css Stylesheets for spinner component
   */
  style?: React.CSSProperties;
  /**
   * Common bootstrap styles for spinner wrapper
   */
  wrapperClassNames?: string;
  /**
   * Common css Stylesheets for spinner wrapper
   */
  wrapperStyle?: React.CSSProperties;
};

/**
 * It returns a spinner element with the some properties passed in.
 */
export const VzLoadingData = ({ id, classNames, size, style, wrapperClassNames, wrapperStyle }: LoadingDataProps) => (
  <div
    className={`vz-loading-data ${wrapperClassNames}`}
    style={wrapperStyle}
  >
    <CSpinner
      id={id}
      className={`vz-default-spinner ${classNames}`}
      style={style}
      size={size}
      visuallyHiddenLabel=''
    />
  </div>
);

VzLoadingData.defaultProps = {
  classNames: '',
  style: {},
  wrapperClassNames: '',
  wrapperStyle: {}
};
