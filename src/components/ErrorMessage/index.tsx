import { VzLabel } from '../Label';

import '../../styles/errorMessage.scss';

export interface ErrorMessageProps {
  /**
   * ID of the component
   */
  id?: string
  /**
   * Common css Stylesheets 
   */
  style?: React.CSSProperties | undefined
  /**
   * Common bootstrap styles
   */
  className?: string
  /**
   * Message that renders the component
   */
  message: string
}

/**
 * It returns a error label element with the id, style, className, and message properties passed in.
 */
export const VzErrorMessage = ({ id, style, className, message }: ErrorMessageProps) => (
  <VzLabel
    id={id}
    style={style}
    className={`vz-error-message mt-1 ${className}`}
    label={`* ${message}`}
    type='caption'
  />
);


VzErrorMessage.defaultProps = {
  className: ''
}