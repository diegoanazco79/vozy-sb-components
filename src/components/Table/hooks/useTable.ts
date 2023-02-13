import { useState, useRef, useMemo } from 'react';

import { pretifyText } from '../../../utils/functions';
import { validationItems } from '../utils/utils';

import { COMMON_HEADER_STYLES } from '../utils/constants';

export interface TableHookProps {
  items: any[];
  fields: any[] | undefined;
  activePage?: number;
  itemsPerPage?: number;
  sorter: boolean | any;
  columnFilter?: any;
  tableFilterValue?: any;
  tableFilter?: any;
  sorterValue?: any;
  columnFilterValue?: any;
  onRowClick?: (item: any, index: number, e: React.MouseEvent) => void;
}

export const useTable = ({
  items, fields, activePage = 0, itemsPerPage = 0, sorter,
  columnFilter, tableFilterValue, tableFilter, sorterValue, columnFilterValue,
  onRowClick
}: TableHookProps) => {
  const [perPageItems, setPerPageItems] = useState(itemsPerPage || 0);
  const [sorterState, setSorterState] = useState(sorterValue || {});
  const [tableFilterState, setTableFilterState] = useState(tableFilterValue);
  const [columnFilterState, setColumnFilterState] = useState(columnFilterValue || {});
  const [passedItems, setPassedItems] = useState(items || []);

  const compData = useRef({ firstRun: true, columnFiltered: 0, changeItems: 0 });

  const genCols = useMemo(() => {
    const firstValue = passedItems.at(0) || {};
    return Object.keys(firstValue).filter((element: string) => element.charAt(0) !== '_');
  }, [passedItems]);

  const rawColumnNames = useMemo(() => (
    fields
      ? fields.map((element: any) => element.key || element)
      : genCols
  ), [fields]);

  const itemsDataColumns = useMemo(() => (
    rawColumnNames.filter((name: string) => genCols.includes(name)
  )), [rawColumnNames, genCols]);

  const columnFiltered = useMemo(() => {
    let items = [...passedItems];

    if (columnFilter && columnFilter.external) return items;

    Object.entries(columnFilterState).forEach(([key, value]) => {
      const columnFilter = String(value).toLowerCase();

      if (columnFilter && itemsDataColumns.includes(key)) {
        items = items.filter((item: any) => (
          String(item[key]).toLowerCase().includes(columnFilter)
        ));
      }
    });

    return items;
  }, [compData.current.columnFiltered]);

  const tableFiltered = useMemo(() => {
    let items = columnFiltered;

    if (!tableFilterState || (tableFilter && tableFilter.external)) return items;

    const filter = tableFilterState.toLowerCase();
    const valueContainFilter = (val: string | number) => String(val).toLowerCase().includes(filter);
    items = items.filter((item: any) => !!itemsDataColumns.find(key => valueContainFilter(item[key])));

    return items;
  }, [compData.current.columnFiltered, tableFilterState, JSON.stringify(tableFilter)]);

  const sortedItems = useMemo(() => {
    const col = sorterState.column;

    if (!col || !itemsDataColumns.includes(col) || (sorter && sorter.external)) return tableFiltered;

    const flip = sorterState.asc ? 1 : -1;

    const sorted = [...tableFiltered].sort((item: any, item2: any) => {
      const value = item[col];
      const value2 = item2[col];
      const a = typeof value === 'number' ? value : String(value).toLowerCase();
      const b = typeof value2 === 'number' ? value2 : String(value2).toLowerCase();
      return a > b ? (1 * flip) : b > a ? (-1 * flip) : 0;
    });

    return sorted;
  }, [JSON.stringify(tableFiltered), JSON.stringify(sorterState), JSON.stringify(sorter)]);

  const columnNames = useMemo(() => {
    if (fields) {
      return fields.map((field: any) => (
        field.label !== undefined
          ? field.label
          : pretifyText(field?.key || field)
      ));
    }

    return rawColumnNames.map((element: string) => pretifyText(element));
  }, [fields, rawColumnNames]);

  const firstItemIndex = useMemo(() => (
    ((activePage - 1) * perPageItems) || 0
  ), [activePage, perPageItems]);

  const paginatedItems = useMemo(() => (
    sortedItems.slice(firstItemIndex, firstItemIndex + perPageItems)
  ), [sortedItems, firstItemIndex, perPageItems]);

  const currentItems = useMemo(() => (
    activePage
      ? paginatedItems
      : sortedItems
  ), [activePage, paginatedItems, sortedItems]);

  useMemo(() => setPerPageItems(itemsPerPage || 0), [itemsPerPage]);
  useMemo(() => setSorterState({ ...sorterValue }), [sorterValue]);
  useMemo(() => setTableFilterState(tableFilterValue), [tableFilterValue]);
  useMemo(() => setColumnFilterState({ ...columnFilterValue }), [columnFilterValue]);
  useMemo(() => validationItems({ items, compData, passedItems, setPassedItems }), []);

  useMemo(() => (
    compData.current.columnFiltered++
  ),
    [
      JSON.stringify(columnFilter), JSON.stringify(columnFilterState),
      itemsDataColumns.join(''), compData.current.changeItems
    ]
  );

  /**
   * Function that gets cell classNames for specific item
   * @param item
   * @param colName
   * @param index
   */
  const getCellClass = (item: any, colName: string, index: number) => {
    const classes = [];
    if (item._cellClasses && item._cellClasses[colName]) classes.push(item._cellClasses[colName]);
    if (fields && fields.at(index)._classes) classes.push(fields.at(index)._classes);
    return classes.join(' ');
  };

  /**
   * Function that gets header classNames for specific item
   * @param index
   */
  const getHeaderClass = (index: number) => (
    fields && fields.at(index)._classes
      ? fields.at(index)._classes
      : ''
  );

  /**
   * Function that gets if current column is sortable or not
   * @param index
   */
  const isSortableField = (index: number) => {
    const isDataColumn = itemsDataColumns.includes(rawColumnNames[index]);
    return sorter && (!fields || fields.at(index).sorter !== false) && isDataColumn;
  };

  /**
   * Function that gets header styles for specific item
   * @param index
   */
  const getHeaderStyles = (index: number) => {
    if (fields && fields.at(index) && fields.at(index)._style) {
      return { ...COMMON_HEADER_STYLES, ...fields.at(index)._style };
    }

    return COMMON_HEADER_STYLES;
  };

  /**
   * Function that handle row event click
   * @param item
   * @param index
   * @param e
   */
  const handleRowClick = (item: any, index: number, e: React.MouseEvent) => (
    onRowClick
      ? onRowClick(item, index, e)
      : () => null
  );

  /**
   * Function that handle change sort items
   * @param index
   * @param column
   */
  const changeSort = (column: any) => {
    const state = { ...sorterState };
    const columnRepeated = state.column === column;

    if (!sorter || !sorter.resetable) state.column = column;
    else state.column = columnRepeated && state.asc === false ? null : column;
    
    state.asc = !(columnRepeated && state.asc);
    setSorterState({ ...state });
  };

  /**
   * Function that gets current sorter icon state
   * @param index
   * @returns
   */
  const getIconState = (index: number) => {
    const direction = sorterState.asc ? 'asc' : 'desc';
    return rawColumnNames.at(index) === sorterState.column ? direction : 'none';
  };

  compData.current.firstRun = false;

  return {
    /* States */
    columnNames,
    rawColumnNames,
    currentItems,
    firstItemIndex,

    /* Functions */
    changeSort,
    getHeaderClass,
    getHeaderStyles,
    isSortableField,
    handleRowClick,
    getCellClass,
    getIconState
  };
};
