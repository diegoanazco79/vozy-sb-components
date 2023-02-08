import { CFormSwitch } from "@coreui/react"

import { VzLabel } from "../Label"

import './styles.scss'

interface SwitchProps {
  /**
   * ID of the component
   */
  id?: string
  /**
   * Common bootstrap classes
   */
  className?: string
  /**
   * Common bootstrap classes
   */
  labelClassName?: string
  /**
   * Common bootstrap styles
   */
  labelLeftClassName?: string
  /**
   * Common bootstrap styles
   */
  labelRightClassName?: string
  /**
   * Label to display on the left side of the switch
   */
  leftLabel?: string
  /**
   * Label to display on the right side of the switch
   */
  rightLabel?: string
  /**
   * Controls the active/inactive state of the switch
   */
  active: boolean
  /**
   * Handles the disabled state of the switch
   */
  disabled?: boolean
  /**
   * Change the size of the switch
   */
  size: 'lg' | 'xl' | undefined
  /**
   * Handles the function that will change the state of the switch
   */
  onChange: (status: boolean) => void
}

/**
 * This component rendering a input switch with a right/left label.
*/
export const VzSwitch = ({
  id,
  className = '',
  labelClassName = '',
  leftLabel, labelLeftClassName = '', rightLabel, labelRightClassName = '',
  active,
  disabled,
  size,
  onChange
}: SwitchProps) => (
  <div className={`vz-switch-wrapper ${className || ''}`}>
    {leftLabel && (
      <VzLabel
        label={leftLabel}
        type='default'
        className={`${labelClassName || ''} ${labelLeftClassName || ''} mb-0 me-2`}
      />
    )}

    <CFormSwitch
      id={id}
      checked={active}
      disabled={disabled}
      size={size}
      className='vz-toggle-switch'
      onChange={ev => onChange(ev.target.checked)}
    />

    {rightLabel && (
      <VzLabel
        label={rightLabel}
        type='default'
        className={`${labelClassName || ''} ${labelRightClassName || ''} mb-0`}

      />
    )}
  </div>
);
