import React from 'react';

import { VzLabel } from '../../Label';

export interface NoDataTableProps {
  rawColumnNames: string[],
  noItemsViewSlot?: JSX.Element | string
};

export const NoDataTable = React.memo(({ rawColumnNames, noItemsViewSlot }: NoDataTableProps) => (
  <tr>
    <td colSpan={rawColumnNames.length}>
      {noItemsViewSlot || (
        <div className='text-center my-5'>
          <VzLabel label='Data Not Found' type='header' />
        </div>
      )}
    </td>
  </tr>
), (prevProps, nextProps) => (
  prevProps.noItemsViewSlot === nextProps.noItemsViewSlot &&
  prevProps.rawColumnNames === nextProps.rawColumnNames
));
