import { useMemo } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';

import '../../styles/range.scss';

export interface RangeProps {
  /**
   * ID of the component
   */
  id?: string;
  /**
   * Controls the state of the range
   */
  value: number;
  /**
   * Specifies the interval between legal numbers in the component.
   */
  step?: number;
  /**
   * Specifies the minimum value for the component.
   */
  minValue?: number;
  /**
   * Specifies the maximum value for the component.
   */
  maxValue?: number;
  /**
   * General css class or bootstrap classes for wrapper component.
   */
  classNameWrapper?: string;
  /**
   * General css class or bootstrap classes for range input.
   */
  classNameRange?: string;
  /**
   * Component JSX or string for left icon.
   */
  leftIcon?: JSX.Element | string;
  /**
   * Component JSX or string for right icon.
   */
  rightIcon?: JSX.Element | string;
  /**
   * Handles the disabled state of the range input
   */
  disabled?: boolean;
  /**
   * Show or not label with value for current input range
   */
  showLabel?: boolean;
  /**
   * Label that renders in the component
   */
  labelSymbol?: string;
  /**
   * Handles the onChange function of the range input
   */
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * It returns a range input component.
 */
export const VzRange = ({
  id,
  value,
  step = 1,
  minValue = 1,
  maxValue = 10,
  classNameWrapper = '',
  classNameRange = '',
  leftIcon,
  rightIcon,
  disabled,
  showLabel,
  labelSymbol,
  onChange
}: RangeProps) => {
  const inputProps = useMemo(() => ({
    className: `v-range-input mt-0 ${classNameRange || ''}`
  }), [classNameRange])

  const tooltipStyle = useMemo(() => ({ top: '1.1rem' }), []);

  return (
    <div
      id={id}
      className={`
        v-range-wrapper ${classNameWrapper || ''} 
        ${disabled ? 'v-range-wrapper-disabled' : ''}
      `}
    >
      {leftIcon && 
        typeof leftIcon === 'string'
          ? <span className='v-icon-input'>{leftIcon}</span>
          :  leftIcon
      }
  
      <RangeSlider
        value={value}
        onChange={onChange}
        min={minValue}
        max={maxValue}
        step={step}
        tooltip={showLabel ? 'on' : 'off'}
        tooltipLabel={currentValue => `${currentValue}${labelSymbol}`}
        inputProps={inputProps}
        tooltipStyle={tooltipStyle}
        disabled={disabled}
      />
  
      {rightIcon && 
        typeof rightIcon === 'string'
          ? <span className='v-icon-input'>{rightIcon}</span>
          :  rightIcon
      }
    </div>
  );
};
