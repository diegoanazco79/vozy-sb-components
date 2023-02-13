import React from 'react'

export interface TableBodyProps {
  id: string | undefined;
  item: any;
  itemIndex: number;
  clickableRows: boolean | undefined;
  firstItemIndex: number;
  rawColumnNames: string[];
  scopedSlots: any;
  handleRowClick: (item: any, index: number, e: React.MouseEvent) => void;
  getCellClass: (item: any, colName: string, index: number) => string;
};

export const TableBody = ({
  id, item, itemIndex, clickableRows, firstItemIndex, rawColumnNames, scopedSlots,
  handleRowClick, getCellClass
}: TableBodyProps) => (
  <tr
    { ...( id ? { id: `${id}-body-row-${itemIndex}` } : {} ) }
    { ...( clickableRows ? { tabIndex: 0 } : {} ) }
    className={item._classes || ''}
    onClick={(ev: React.MouseEvent) => handleRowClick(item, (itemIndex + firstItemIndex), ev)}
  >
    {rawColumnNames.map((colName: string, index: number) => (
      scopedSlots[colName]
        ? React.cloneElement(scopedSlots[colName](item, itemIndex + firstItemIndex), { key: index })
        : (
          <td
            key={index}
            className={getCellClass(item, colName, index)}
          >
            { String(item[colName]) }
          </td>
        )
    ))}
  </tr>
)
