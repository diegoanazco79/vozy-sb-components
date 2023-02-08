import { CBadge } from '@coreui/react';

import { VzLabel } from '../Label';

import './styles.scss';

interface BadgeProps {
  /**
   * ID of the component
   */
  id?: string;
  /**
   * This is the type of badge. Depending on it, it will change its styles
   */
  type: 'success' | 'failed' | 'neutral';
  /**
   * Common bootstrap styles for badge
   */
  className?: string;
  /**
   * Label that renders the component
   */
  text: string;
  /**
   * This is the type of label. Depending on it, it will change its styles
   */
  labelType: 'header' | 'header-small' | 'title' | 'default' | 'caption';
  /**
   * Common bootstrap styles for label
   */
  labelClassName?: string;
};

export const VzBadge = ({
  id, type = 'neutral', className = '',
  text, labelType = 'default', labelClassName
}: BadgeProps) => {
  return (
    <CBadge
      id={id}
      shape='rounded-pill'
      className={`vz-badge vz-badge-${type} ${className}`}
    >
      <VzLabel
        label={text}
        type={labelType}
        className={`${labelClassName || ''} m-0`}
      />
    </CBadge>
  );
};
