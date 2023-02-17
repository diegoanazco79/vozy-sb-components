import { useMemo } from 'react';
import { CDropdown, CDropdownMenu, CDropdownToggle } from '@coreui/react';

import ArrowIcon from '../../assets/icons/ArrowIcon';
import '../../styles/dropdown.scss';

export interface DropdownProps {
  /**
   * ID of the component
   */
  id?: string;
  /**
   * Common bootstrap styles for main dropdown
   */
  className?: string
  /**
   * Common bootstrap styles for dropdown toggle
   */
  classNameToggle?: string
  /**
   * Common bootstrap styles for dropdown menu
   */
  classNameMenu?: string
  /**
   * This is the type of dropdown. Depending on it, it will change its styles
   */
  type: 'primary' | 'secondary';
  /**
  * State of dropdown, if true, generic CSS styles are applied.
  */
  disabled?: boolean;
  /**
  * Component JSX that renders the dropdown toggle
  */
  customToggle?: JSX.Element;
  /**
   * Label that renders the dropdown toggle
   */
  label?: string;
  /**
  * Component JSX for dropdown toggle left icon
  */
  leftIcon?: JSX.Element;
  /**
   * Component JSX for dropdown toggle right icon
   */
  rightIcon?: JSX.Element;
  /*
   * Show a arrow in dropdown toggle right side
  */
  caret?: boolean;
  /*
   * Configure the auto close behavior of the dropdown
  */
  interactive?: boolean;
  /*
   * ONLY IF INTERACTIVE SET TRUE: State for show dropdown menu
  */
  open?: boolean;
  /*
   * ONLY IF INTERACTIVE SET TRUE: State Function for show dropdown menu
  */
  setOpen: (open: boolean) => void;
  /**
   * Component JSX for dropdown menu
   */
  customMenu: JSX.Element
};

/**
 * It returns a dropdown element.
 */
export const VzDropdown = ({
  id, className, classNameToggle, classNameMenu, type, disabled,
  customToggle, label, leftIcon, rightIcon, caret, interactive,
  open, setOpen, customMenu
}: DropdownProps) => {

  const hasOpen = useMemo(() => typeof open !== undefined, [open])

  return (
    <CDropdown
      id={id}
      className={`vz-dropdown ${className}`}
      autoClose={interactive ? 'outside' : true}
      {...(!hasOpen ? {
        visible: open,
        onShow: () => setOpen(true),
        onHide: () => setOpen(false)
      } : {})}
    >
      <CDropdownToggle
        className={`
          ${classNameToggle} dropdown-toggle-${type} 
          dropdown-toggle-${type}-${disabled ? 'disabled' : ''}`
        }
        disabled={disabled}
      >
        {customToggle ||
          <div className='d-flex align-items-center justify-content-between'>
            {leftIcon}
            {label}
            {caret ? <ArrowIcon className='arrow-icon' /> : rightIcon}
          </div>
        }
      </CDropdownToggle>
      <CDropdownMenu className={classNameMenu}>
        {customMenu}
      </CDropdownMenu>
    </CDropdown>
  )
};

VzDropdown.defaultProps = {
  id: '',
  className: '',
  classNameToggle: '',
  classNameMenu: '',
  disabled: false,
  caret: true,
  interactive: false,
  setOpen: () => null,
}