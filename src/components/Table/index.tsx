import { TableBody } from './helpers/TableBody';
import { TableHeader } from './helpers/TableHeader';
import { NoDataTable } from './helpers/NoDataTable';

import { useTable } from './hooks/useTable';

import { sorterValue } from './utils/constants';

import '../../styles/table.scss';

export interface TableProps {
  /**
   * ID of the component
   */
  id?: string;
  /**
   * Array of objects, where each object represents one item - row in table
   */
  items: any[];
  /**
   * Prop for specific column declaration
   */
  fields: any[] | undefined;
  /**
   * Sets active page, in case of using external pagination.
   */
  activePage?: number;
  /**
   * Number of items per site, when pagination is enabled
   */
  itemsPerPage?: number;
  /**
   * Enables table sorting by column value. Sorting will be performed corectly only if values in column are of one type: string or number
   */
  sorter: boolean | any;
  /**
   * Sets style of the table (hover).
   */
  hover?: boolean;
  /**
   * Style table items as clickable.
   */
  clickableRows?: boolean;
  /**
   * Object with functions for custom row elements
   */
  scopedSlots?: any;
  /**
   * Object with column header slots
   */
  columnHeaderSlot?: any;
  /**
   * No items content component
   */
  noItemsViewSlot?: JSX.Element | string;
  /**
   * Common bootstrap classes for wrapper table component
   */
  wrapperClassName?: string;
  /**
   * Common bootstrap classes for table component
   */
  tableClassesName?: string;
  /**
   * Common bootstrap classes for header table component
   */
  headerClassesName?: string;
  /**
   * Common bootstrap classes for body table component
   */
  bodyClassName?: string;
  /**
   * On row click event callback
   */
  onRowClick?: (item: any, index: number, e: React.MouseEvent) => void;
};

/**
 * This component rendering a Smart Data Table.
 */
export const VzTable = ({
  id, items, fields, activePage, itemsPerPage, sorter, hover,
  clickableRows, scopedSlots, columnHeaderSlot, noItemsViewSlot,
  wrapperClassName, tableClassesName, headerClassesName, bodyClassName,
  onRowClick
}: TableProps) => {
  const {
    columnNames, rawColumnNames, currentItems, firstItemIndex,
    changeSort, getHeaderClass, getHeaderStyles, isSortableField,
    handleRowClick, getCellClass, getIconState
  } = useTable({
    items, fields, activePage, itemsPerPage, sorter, sorterValue,
    onRowClick
  });

  /* Component Props */
  const tableHeaderProps = {
    id, rawColumnNames, sorter, columnHeaderSlot,
    changeSort, getHeaderClass, getHeaderStyles, isSortableField, getIconState
  };

  const tableBodyProps = {
    id, clickableRows, firstItemIndex, rawColumnNames, scopedSlots,
    handleRowClick, getCellClass
  };

  const noDataTableProps = { rawColumnNames, noItemsViewSlot };

  return (
    <div className={`table-responsive position-relative ${wrapperClassName || ''}`}>
      <table
        id={id}
        className={`table table-sm table-ui  ${hover ? 'table-hover' : ''} ${tableClassesName || ''}`}
      >
        <thead {...(id ? { id: `${id}-header` } : {})} className={headerClassesName}>
          <tr>
            {columnNames.map((name: string, index: number) => (
              <TableHeader
                key={index}
                idxColumn={index}
                nameColumn={name}
                {...tableHeaderProps}
              />
            ))}
          </tr>
        </thead>

        <tbody
          {...(id ? { id: `${id}-body` } : {})}
          style={clickableRows ? { cursor: 'pointer' } : {}}
          className={bodyClassName}
        >
          {currentItems.map((item: any, itemIndex: number) => (
            <TableBody
              key={itemIndex}
              item={item}
              itemIndex={itemIndex}
              {...tableBodyProps}
            />
          ))}

          {!currentItems.length && <NoDataTable {...noDataTableProps} />}
        </tbody>
      </table>
    </div>
  );
};

VzTable.defaultProps = {
  items: [],
  activePage: 0,
  itemsPerPage: 0,
  columnHeaderSlot: {},
  scopedSlots: {},
  sorter: false,
  wrapperClassName: '',
  tableClassesName: '',
  headerClassesName: '',
  bodyClassName: ''
};
