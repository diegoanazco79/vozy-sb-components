import { useMemo } from 'react';

import ArrowIcon from '../../assets/icons/ArrowIcon';

import './styles.scss';

interface PaginationProps {
  /**
   * ID of the component
   */
  id?: string;
  /**
   * Common bootstrap classes
   */
  classNames?: string;
  /**
   * Actual page in current data (Table)
   */
  currentPage: number;
  /**
   * Total pages in some data (Table)
   */
  totalPages: number;
  /**
   * Validate if is loading data for change pages
   */
  loadingData: boolean;
  /**
   * Text for connector current page with total pages
   */
  connectorText?: string | undefined;
  /**
   * Handles the onChange function of the page
   */
  onPageChange: (page: number) => void;
};

export const VzPagination = ({
  id, classNames, currentPage, totalPages, loadingData, connectorText,
  onPageChange
}: PaginationProps) => {
  const leftButtonValidation = useMemo(() => (
    currentPage === 1 || loadingData || totalPages === 0
  ), [currentPage, totalPages, loadingData]);

  const rightButtonValidation = useMemo(() => (
    currentPage === totalPages || loadingData || totalPages === 0
  ), [currentPage, totalPages, loadingData]);

  return (
    <div className={classNames || ''}>
      <button
        id={`${id}-prev-page`}
        className={`pagination-nav-left-arrow ${leftButtonValidation ? 'pagination-nav-left-arrow-disabled' : 'pagination-nav-left-arrow-active'}`}
        disabled={leftButtonValidation}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <ArrowIcon />
      </button>

      <span className='pagination-nav-text'>
        { currentPage } {' '}
        { connectorText } {' '}
        { totalPages }
      </span>

      <button
        id={`${id}-next-page`}
        className={`pagination-nav-right-arrow ${rightButtonValidation ? 'pagination-nav-left-arrow-disabled' : 'pagination-nav-right-arrow-active'}`}
        disabled={rightButtonValidation}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <ArrowIcon />
      </button>
    </div>
  );
};

VzPagination.defaultProps = {
  id: 'vz-pagination',
  connectorText: 'of',
  classNames: ''
};