import { useState } from 'react';
import { CTooltip } from '@coreui/react'

import InfoIcon from '../../assets/icons/InfoIcon';
import '../../styles/tooltip.scss';

export interface TooltipProps {
  /**
   * ID of the component
   */
  id?: string;
  /**
   * Common bootstrap styles
   */
  className?: string;
  /**
   * Common bootstrap styles
   */
  iconClassName?: string;
  /**
   * Content node for your content
   */
  content: string | JSX.Element;
  /**
   * Content node for your trigger
  */
  trigger?: string | JSX.Element;
}

/**
 * It returns a tooltip with a trigger and content.
 */
export const VzTooltip = ({ id, className, iconClassName, content, trigger }: TooltipProps) => {

  const [visible, setVisible] = useState(false)

  return (
    <CTooltip
      id={id}
      className={`vz-tooltip ${className}`}
      content={content}
      placement='auto'
      visible={visible}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {trigger ||
        <div style={{ width: 'fit-content' }} >
          <InfoIcon className={`info-icon ${iconClassName}`} />
        </div>}
    </CTooltip>
  )
};

VzTooltip.defaultProps = {
  className: '',
  iconClassName: '',
}