import { CFormCheck } from "@coreui/react"

import { VzLabel } from "../Label"

import './styles.scss'

interface RadioButtonProps {
  /**
   * ID of the component
   */
  id?: string
  /**
   * Label to display for the radio button
   */
  label: string
  /**
   * Controls the active/inactive state of the switch
   */
  checked: boolean
  /**
   * Common bootstrap classes
   */
  className?: string
  /**
   * Common bootstrap classes
   */
  labelClassName?: string
  /**
   * Handles the disabled state of the radio button
   */
  disabled?: boolean
  /**
   * Handles the onChange function of the radio button
   */
  onChange: () => void
}

/**
 * This component rendering a input radiobutton with a right label.
*/
export const VzRadioButton = ({
  id, label, checked, className = '', labelClassName = '', disabled, onChange
}: RadioButtonProps) => {
  return (
    <CFormCheck
      id={id}
      name={id}
      className={`vz-radio-button ${className}`}
      type="radio"
      label={<VzLabel type='default' label={label} className={labelClassName} />}
      checked={checked}
      onChange={onChange}
      disabled={disabled}
    />
  )
}
