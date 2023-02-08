/// <reference types="react" />
import './styles.scss';
export interface CheckboxProps {
    /**
     * ID of the component
     */
    id?: string;
    /**
     * Common bootstrap styles
     */
    className?: string;
    /**
     * Label that renders the component
     */
    label: string;
    /**
     * Controls the active/inactive state of the checkbox
     */
    checked: boolean;
    /**
     * Handles the disabled state of the checkbox
     */
    disabled?: boolean;
    /**
     * Controls whether the text will be clipped or displayed in its entirety
     */
    allowTruncate?: boolean;
    /**
     * Control the number of characters
     */
    truncateLength?: number;
    /**
     * Handles the onChange function of the checkbox
     */
    onChange: () => void;
}
export declare const VzCheckbox: ({ id, className, label, disabled, checked, allowTruncate, truncateLength, onChange }: CheckboxProps) => JSX.Element;
