import { CFormInput, CFormTextarea } from '@coreui/react';

import '../../styles/inputs.scss';

export interface InputProps {
  /**
   * ID of the component
   */
  id?: string;
  /**
   * Common css Stylesheets 
   */
  style?: React.CSSProperties | undefined;
  /**
   * Common bootstrap styles
   */
  className?: string;
  /**
   * Placeholder that renders the component
   */
  placeholder?: string | undefined;
  /**
   * Handles whether the input is a textarea or not
   */
  isTextArea?: boolean;
  /**
   * State of button, if true, generic CSS styles are applied.
   */
  disabled?: boolean;
  /**
   * Type of input
   */
  type?: 'text' | 'number'
  /**
   * The value attribute of component.
   */
  value: string | number
  /**
   * If the input is textarea, this property indicates how many rows you want
   */
  rows?: number
  /**
   * Method called immediately after the value prop changes.
   */
  onChange: (ev: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>) => void
}

/**
 * React input components. Give textual form `<input>`s an upgrade with custom styles, sizing, focus states, validation, and more
 */
export const VzInput = ({
  id, style, className, isTextArea, value, type, rows,
  placeholder, disabled, onChange
}: InputProps) => (
  <>
    {
      isTextArea ? (
        <CFormTextarea
          id={id}
          className={`vz-standard-input ${className}`}
          style={style}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={onChange}
          rows={rows}
        />
      ) : (
        <CFormInput
          id={id}
          className={`vz-standard-input ${className}`}
          style={style}
          placeholder={placeholder}
          disabled={disabled}
          type={type}
          value={value}
          onChange={onChange}
        />
      )
    }
  </>
)

VzInput.defaultProps = {
  className: '',
  placeholder: '',
  isTextArea: false,
  type: 'text'
}