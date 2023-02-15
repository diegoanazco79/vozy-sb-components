import { CFormRange } from '@coreui/react';

import { VzLabel } from '../Label';

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
  step: number;
  /**
   * Specifies the minimum value for the component.
   */
  minValue: number;
  /**
   * Specifies the maximum value for the component.
   */
  maxValue: number;
  /**
   * General css class or bootstrap classes for wrapper component.
   */
  classNameWrapper?: string;
  /**
   * General css class or bootstrap classes for input wrapper component.
   */
  classNameInputWrapper?: string;
  /**
   * General css class or bootstrap classes for range input.
   */
  classNameRange?: string;
  /**
   * Component JSX or string for left icon.
   */
  leftIcon: JSX.Element | string;
  /**
   * Component JSX or string for right icon.
   */
  rightIcon: JSX.Element | string;
  /**
   * Handles the disabled state of the range input
   */
  disabled: boolean;
  /**
   *
   */
  showLabel: boolean;
  /**
   *
   */
  labelSymbol: string;
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
  step,
  minValue,
  maxValue,
  classNameWrapper = '',
  classNameInputWrapper = '',
  classNameRange = '',
  leftIcon,
  rightIcon,
  disabled,
  showLabel,
  labelSymbol,
  onChange
}: RangeProps) => (
  <div className={classNameWrapper}>
    <div id={id} className={`vz-range-input ${classNameInputWrapper}`}>
      {leftIcon && (
        typeof leftIcon === 'string'
          ? <span className='v-icon-input'>{leftIcon}</span>
          : leftIcon
      )}

      <CFormRange
        className={`px-2 ${classNameRange || ''}`}
        disabled={disabled}
        step={step}
        value={value}
        min={minValue}
        max={maxValue}
        onChange={(ev) => onChange(ev)}
      />

      {rightIcon && (
        typeof rightIcon === 'string'
          ? <span className='v-icon-input'>{rightIcon}</span>
          : rightIcon
      )}
    </div>

    {showLabel && (
      <VzLabel
        label={`${value}${labelSymbol}`}
        type='default' className='text-center m-0 w-100'
      />
    )}
  </div>
);
