import MultiRangeSlider from 'multi-range-slider-react';

import { VzLabel } from '../Label';

import '../../styles/multiRange.scss';

export interface MultiRangeProps {
  /**
   * ID of the component
   */
  id?: string;
  /**
   * Common bootstrap styles
   */
  className?: string;
  /**
   * Specifies the minimum value for the component.
   */
  minValue?: number;
  /**
   * Specifies the maximum value for the component.
   */
  maxValue?: number;
  /**
   * Controls the min value state of the range
   */
  currentMinValue: number;
  /**
   * Controls the max valuestate of the range
   */
  currentMaxValue: number;
  /**
   * Handles the disabled state of the range input
   */
  disabled?: boolean;
  /**
   * Component JSX or string for left icon.
   */
  leftIcon?: JSX.Element | string;
  /**
   * Component JSX or string for right icon.
   */
  rightIcon?: JSX.Element | string;
  /**
   * Specifies the interval between legal numbers in the component.
   */
  step?: number;
  /**
   * Handles the onChange function of the range input
   */
  onChange: () => void;
}

/**
 * It returns a multi range input component.
 */
export const VzMultiRange = ({
  id, className, currentMinValue, currentMaxValue, minValue, maxValue, disabled,
  leftIcon, rightIcon, step, onChange
}: MultiRangeProps) => (
  <div
    id={id}
    className={
      `vz-multi-range-wrapper mx-2 ${className || ''}
      ${disabled ? 'vz-multi-range-wrapper-disabled' : ''}
    `}>
    {leftIcon
      ? typeof (leftIcon) === 'string'
        ? <VzLabel type='caption' label={leftIcon} />
        : leftIcon
      : null
    }

    <MultiRangeSlider
      baseClassName='multi-range-slider-black'
      min={minValue}
      max={maxValue}
      step={step}
      ruler={false}
      label={false}
      preventWheel={false}
      minValue={currentMinValue}
      maxValue={currentMaxValue}
      onInput={onChange}
    />

    {rightIcon
      ? typeof (rightIcon) === 'string'
        ? <VzLabel type='caption' label={rightIcon} />
        : rightIcon
      : null
    }
  </div>
);
