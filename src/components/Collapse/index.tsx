import { useState } from 'react';
import { CCard, CCol, CCollapse, CRow } from '@coreui/react';

import { VzLabel } from '../Label';

import ArrowIcon from '../../assets/icons/ArrowIcon';
import '../../styles/collapse.scss';

export interface CollapseProps {
  /**
   * ID of the component
   */
  id?: string;
  /**
   * Common bootstrap styles
   */
  className?: string;
  /**
   * Message that renders in the header collapse
   */
  title: string;
  /**
   * Common bootstrap styles for header collapase
   */
  titleClassName?: string;
  /**
   * Component JSX that renders a specific header collapase
   */
  customLabel?: JSX.Element;
  /**
   * Component JSX that renders a specific body collapase
   */
  children?: JSX.Element;
}

/**
 * Collapse component toggles the visibility of content across your project with a few classes and some scripts. 
 * Useful for a large amount of content.
 */
export const VzCollapse = ({ id, className, title, titleClassName, customLabel, children }: CollapseProps) => {
  const [show, setShow] = useState(false);

  return (
    <CCard className={`vz-collapse-card ${className || ''}`}>
      <div id={id} style={{ cursor: 'pointer' }} onClick={() => setShow(!show)}>
        {customLabel ||
          <CRow>
            <CCol md='11' className=''>
              <VzLabel
                className={`${titleClassName} mb-0`}
                style={{ cursor: 'pointer' }}
                type='header-small' label={title}
              />
            </CCol>

            <CCol md='1' className='d-flex align-items-center justify-content-end pl-0'>
              <ArrowIcon className={`collapse-arrow ${!show ? '' : 'vz-rotate'}`} />
            </CCol>
          </CRow>
        }
      </div>

      <CCollapse visible={show} className='vz-collapse-body'>
        <hr className='mt-1 mb-3' />
        {children}
      </CCollapse>
    </CCard>
  )
}

VzCollapse.defaultProps = {
  className: '',
  titleClassName: ''
}