import { ReactNode, useMemo } from 'react';

import '../../styles/button.scss';

export interface ButtonProps {
  /**
   * ID of the component
   */
  id?: string;
  /**
   * Common bootstrap styles for button
   */
  className?: string;
  /**
   * All elements of Button. NOTE: If the component has children, only them will be shown
   */
  children?: ReactNode | JSX.Element;
  /**
   * Label that renders the component
   */
  label?: string;
  /**
   * Component JSX
   */
  leftIcon?: JSX.Element;
  /**
   * Component JSX
   */
  rightIcon?: JSX.Element;
  /**
   * State of button, if true, generic CSS styles are applied.
   */
  selected?: boolean;
  /**
   * Common css Stylesheets
   */
  style?: React.CSSProperties;
  /**
   * State of button, if true, generic CSS styles are applied.
   */
  disabled?: boolean;
  /**
   * Common bootstrap styles for button label
   */
  labelClassName?: string;
  /**
   * This is the type of button. Depending on it, it will change its styles
   */
  type: 'primary' | 'secondary' | 'terciary';
  /**
   * Call onClick function and send the button event
   */
  onClick: (ev: React.MouseEvent) => void;
};

/**
 * It returns a button element with the some properties passed in.
 */
export const VzButton = ({
  className, children, label, leftIcon, rightIcon, selected, style, id, disabled, labelClassName, type,
  onClick
}: ButtonProps) => {
  const commonClassName = useMemo(() => `vz-button vz-button-${type}`, [type]);

  const handleClick = (e: React.MouseEvent) => {
    if (disabled && !onClick) return;
    onClick(e);
  };
  
  return (
    <div
      id={id}
      onClick={handleClick}
      className={`${commonClassName} ${className} ${selected ? 'vz-button-selected' : ''} ${disabled ? 'vz-button-disabled' : ''}`}
      style={{ ...style }}
    >
      {leftIcon}

      {!children
        ? (
          <div
            className={`vz-button-label ${label && !labelClassName ? 'mx-2' : ''} ${labelClassName || ''}`}
          >
            {label}
          </div>
        )
        : children
      }

      {rightIcon}
    </div>
  );
};

VzButton.defaultProps = {
  id: '',
  label: 'Button',
  disabled: false,
  selected: false,
  className: '',
  style: {}
}
