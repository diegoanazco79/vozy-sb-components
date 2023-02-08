/// <reference types="react" />
import './styles.scss';
export interface StepsProps {
    /**
     * ID of the component
     */
    id?: string;
    /**
     * Steps that renders in the component (array format: { label: string, shownLabel: string } or string)
     */
    steps: any[];
    /**
     * Type separator in the component
     */
    separatorCharacter: string | undefined;
    /**
     * Common bootstrap classes
     */
    className: string;
    /**
     * Current step selected of the component
     */
    selectedStep: string;
    /**
     * Handles the onChange function of the steps
     */
    onClickStep: (step: any) => void;
}
export declare const VzSteps: ({ id, steps, separatorCharacter, className, selectedStep, onClickStep }: StepsProps) => JSX.Element;
