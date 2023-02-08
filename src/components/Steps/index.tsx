import { useMemo } from 'react';

import ArrowIcon from '../../assets/icons/ArrowIcon';

import './styles.scss';

interface StepsProps {
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
};

export const VzSteps = ({ id, steps, separatorCharacter, className, selectedStep, onClickStep }: StepsProps) => {
  const Separator = useMemo(() => (
    separatorCharacter
      ? <span className='step-text mx-2'>{separatorCharacter}</span>
      : <ArrowIcon className='step-arrow-icon mx-2' />
  ), [separatorCharacter]);

  return (
    <div id={id} className={`vz-steps-wrapper ${className}`}>
      {steps?.map((step, idx) => {
        const stepLabel = step?.label || step;
        const shownStep = step?.shownLabel || step;

        return (
          <div key={idx} className='d-flex align-items-center'>
            <span
              id={`${id}-${stepLabel}`}
              className={`step-text ${stepLabel !== selectedStep ? '' : 'step-text__selected'}`}
              onClick={() => onClickStep(step)}
            >
              { shownStep }
            </span>

            {idx !== (steps.length - 1) && Separator}
          </div>
        );
      })}
    </div>
  );
};
