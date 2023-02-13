/**
 * Function that validates current passed items in useTable hook
 */
export const validationItems = ({ items, compData, passedItems, setPassedItems }: any) => {
  if (
    items &&
    !compData.firstRun &&
    (items.length !== passedItems.length || JSON.stringify(items) !== JSON.stringify(passedItems))
  ) {
    setPassedItems(items);
    compData.changeItems++;
  }
};