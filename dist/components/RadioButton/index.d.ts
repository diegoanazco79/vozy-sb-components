/// <reference types="react" />
import './styles.scss';
export interface RadioButtonProps {
    /**
     * ID of the component
     */
    id?: string;
    /**
     * Label to display for the radio button
     */
    label: string;
    /**
     * Controls the active/inactive state of the switch
     */
    checked: boolean;
    /**
     * Common bootstrap classes
     */
    className?: string;
    /**
     * Common bootstrap classes
     */
    labelClassName?: string;
    /**
     * Handles the disabled state of the radio button
     */
    disabled?: boolean;
    /**
     * Handles the onChange function of the radio button
     */
    onChange: () => void;
}
/**
 * This component rendering a input radiobutton with a right label.
*/
export declare const VzRadioButton: ({ id, label, checked, className, labelClassName, disabled, onChange }: RadioButtonProps) => JSX.Element;
