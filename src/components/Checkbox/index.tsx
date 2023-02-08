import { CFormCheck } from '@coreui/react'
import { VzLabel } from '../Label'

import { truncateText } from '../../utils/functions'

import './styles.scss'

interface CheckboxProps {
  /**
   * ID of the component
   */
  id?: string
  /**
   * Common bootstrap styles
   */
  className?: string
  /**
   * Label that renders the component
   */
  label: string
  /**
   * Controls the active/inactive state of the checkbox
   */
  checked: boolean
  /**
   * Handles the disabled state of the checkbox
   */
  disabled?: boolean
  /**
   * Controls whether the text will be clipped or displayed in its entirety
   */
  allowTruncate?: boolean
  /**
   * Control the number of characters
   */
  truncateLength?: number
  /**
   * Handles the onChange function of the checkbox
   */
  onChange: () => void
}

export const VzCheckbox = ({
  id, className = '', label, disabled, checked,
  allowTruncate = false, truncateLength = 0, onChange
}: CheckboxProps) => (
  <CFormCheck
    id={id}
    className={`vz-checkbox ${className}`}
    label={<VzLabel type='default' label={ allowTruncate ? truncateText(label, truncateLength) : label } />}
    disabled={disabled}
    checked={checked}
    onChange={onChange}
  />
);
