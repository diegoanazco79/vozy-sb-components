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
  trigger: string | JSX.Element;
  /**
   * Indicate if tooltip is interactive or not
   */
  interactive: boolean;
  /**
   * Describes the placement of your component 
   */
  placement: 'auto' | 'top' | 'right' | 'bottom' | 'left';
}

/**
 * It returns a tooltip with a trigger and content.
 */
export const VzTooltip = ({
  id, className, iconClassName, content, trigger,
  interactive, placement
}: TooltipProps) => {
  const [visible, setVisible] = useState(false)

  return (
    <CTooltip
      id={id}
      className={`vz-tooltip ${className}`}
      content={content}
      placement={placement}
      {...(
        interactive
          ? {
            visible,
            onMouseEnter: () => setVisible(true),
            onMouseLeave: () => setVisible(false)
          }
          : {}
      )}
    >
      <div style={{ width: 'fit-content' }} >
        {trigger || <InfoIcon className={`info-icon ${iconClassName}`} />}
      </div>
    </CTooltip>
  )
};

VzTooltip.defaultProps = {
  className: '',
  iconClassName: '',
  interactive: false,
  placement: 'auto'
};
