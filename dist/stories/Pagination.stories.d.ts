/// <reference types="react" />
import { ComponentStory, ComponentMeta } from '@storybook/react';
declare const _default: ComponentMeta<{
    ({ id, classNames, currentPage, totalPages, loadingData, connectorText, onPageChange }: import("../components/Pagination").PaginationProps): JSX.Element;
    defaultProps: {
        id: string;
        connectorText: string;
        classNames: string;
    };
}>;
export default _default;
export declare const VozyPagination: ComponentStory<{
    ({ id, classNames, currentPage, totalPages, loadingData, connectorText, onPageChange }: import("../components/Pagination").PaginationProps): JSX.Element;
    defaultProps: {
        id: string;
        connectorText: string;
        classNames: string;
    };
}>;
