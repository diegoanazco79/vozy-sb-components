import { useMemo } from 'react';

import { HeaderIcon } from './HeaderIcon';

export interface TableHeaderProps {
  id: string | undefined;
  idxColumn: number;
  nameColumn: string;
  rawColumnNames: string[];
  sorter: boolean | any;
  columnHeaderSlot: any;
  changeSort: (column: any) => void;
  getHeaderClass: (index: number) => string;
  getHeaderStyles: (index: number) => React.CSSProperties;
  isSortableField: (index: number) => boolean;
  getIconState: (index: number) => 'none' | 'asc' | 'desc'
};

export const TableHeader = ({
  id, nameColumn, idxColumn, rawColumnNames, sorter, columnHeaderSlot,
  changeSort, getHeaderClass, getHeaderStyles, isSortableField, getIconState
}: TableHeaderProps) => {
  const isSortableColumn = useMemo(() => isSortableField(idxColumn), [idxColumn]);

  return (
    <th
      { ...( id ? { id: `${id}-header-${nameColumn}-${idxColumn}` } : {} ) }
      className={`${getHeaderClass(idxColumn)} ${sorter ? 'position-relative pr-4' : ''}`}
      style={{ ...getHeaderStyles(idxColumn), ...( isSortableColumn ? { cursor: 'pointer' } : {} ) }}
      onClick={() => isSortableColumn && changeSort(rawColumnNames[idxColumn])}
    >
      {columnHeaderSlot[`${rawColumnNames[idxColumn]}`] || <div className='d-inline'>{nameColumn}</div>}

      {isSortableColumn && (
        <HeaderIcon
          className={
            getIconState(idxColumn) === 'asc'
              ? 'rotate-anim svg'
              : 'rotate-anim-0 svg'
          }
        />
      )}
    </th>
  );
};
