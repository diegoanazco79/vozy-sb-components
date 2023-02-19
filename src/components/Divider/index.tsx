
import { CRow, CCol } from '@coreui/react';

import { VzLabel } from '../Label';

import '../../styles/divider.scss';

export interface DividerProps {
  /**
   * Label that renders in the center of the current component
   */
  label?: string;
  /**
   * Common bootstrap styles
   */
  className?: string,
  /**
   * Type of divider component
   */
  type: 'solid' | 'dashed';
};

/**
 * A divider is a thin line that groups content in lists and layouts.
 */
export const VzDivider = ({ label, className, type, }: DividerProps) => {
  return (
    label
      ? (
        <CRow className={`no-gutters ${className || ''}`}>
          <CCol sm={5} className='px-0'>
            <hr className={type === 'dashed' ? 'vz-separator-dashed' : 'vz-separator'} />
          </CCol>

          <CCol sm={2} className='d-flex justify-content-center px-0'>
            <VzLabel label={label} type='default' className='mt-2 mb-0' />
          </CCol>

          <CCol sm={5} className='px-0'>
            <hr className={type === 'dashed' ? 'vz-separator-dashed' : 'vz-separator'} />
          </CCol>
        </CRow>
      )

      : <hr className={`${type === 'dashed' ? 'vz-separator-dashed' : 'vz-separator'} ${className || ''}`} />
  );
};

VzDivider.defaultProps = {
  label: '',
  type: 'solid'
};