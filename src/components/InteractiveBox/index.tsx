import { VzButton } from '../Button';

import DeleteIcon from '../../assets/icons/DeleteIcon';

import '../../styles/interactiveBox.scss';

export interface InteractiveBoxProps {
  /**
   * ID of the component
   */
  id?: string;
  /**
   * Component JSX that renders a specific interactive box icon
   */
  leftIcon?: JSX.Element;
  /**
   * Label that renders in the component
   */
  boxName?: string;
  /**
   * Common bootstrap styles for interactive box wrapper
   */
  classNames?: string;
  /**
   * Component JSX that renders a specific content
   */
  renderBoxName?: JSX.Element;
  /**
   * If true, show a action button for operation
   */
  showActionButton?: boolean;
  /**
   * Component JSX that renders a specific action button icon
   */
  actionIcon?: JSX.Element;
  /**
   * Component JSX that renders a custom interactive action button component
   */
  renderCustomButton?: JSX.Element;
  /**
   * Common bootstrap styles for interactive box
   */
  boxNameClassName?: string;
  /**
   * Call onClick function and send the button event
   */
  handleAction: (ev: React.MouseEvent) => void | undefined;
};

/**
 * It returns a Box element with the some properties passed in.
 */
export const VzInteractiveBox = ({
  id, leftIcon, boxName, classNames, renderBoxName, showActionButton,
  actionIcon, renderCustomButton, boxNameClassName,
  handleAction
}: InteractiveBoxProps) => (
  <div id={id} className={`vz-interactive-box ${classNames}`}>
    <div className={`d-flex align-items-center ${boxNameClassName}`} style={{ overflow: 'hidden' }}>
      {leftIcon}
      {!renderBoxName ? <span className='vz-interactive-label'>{boxName}</span> : renderBoxName}
    </div>

    {showActionButton && (
      renderCustomButton || (
        <VzButton
          { ...( id ? { id: `${id}-delete-btn` } : {} ) }
          type='secondary'
          className='px-1'
          onClick={handleAction}
          label=''
          leftIcon={actionIcon}
        />
      )
    )}
  </div>
);

VzInteractiveBox.defaultProps = {
  id: '',
  leftIcon: null,
  boxName: '',
  classNames: '',
  boxNameClassName: '',
  renderBoxName: null,
  showActionButton: true,
  actionIcon: <DeleteIcon className='icon-stroke-path' />,
  handleAction: () => undefined
}