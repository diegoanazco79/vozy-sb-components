/// <reference types="react" />
import './styles.scss';
export interface PaginationProps {
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
}
export declare const VzPagination: {
    ({ id, classNames, currentPage, totalPages, loadingData, connectorText, onPageChange }: PaginationProps): JSX.Element;
    defaultProps: {
        id: string;
        connectorText: string;
        classNames: string;
    };
};
