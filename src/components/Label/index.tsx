import { CFormLabel } from '@coreui/react'

import './styles.scss'

interface LabelProps {
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
   * This is the type of label. Depending on it, it will change its styles
   */
  type: 'header' | 'header-small' | 'title' | 'default' | 'caption'
  /**
   * Label that renders the component
   */
  label: string
}

/**
 * It returns a label element with the id, style, className, and label properties passed in.
 */
export const VzLabel = ({ id, style, className = '', type = 'default', label = '' }: LabelProps) => (
  <CFormLabel
    id={id}
    style={style}
    className={`vz-label vz-label-${type} ${className}`}>
    {label}
  </CFormLabel>
);
