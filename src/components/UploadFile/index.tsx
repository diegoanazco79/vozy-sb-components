import { VzInteractiveBox } from '../InteractiveBox';
import { VzErrorMessage } from '../ErrorMessage';
import { VzLabel } from '../Label';

import '../../styles/uploadFiles.scss';

export interface UploadFileProps {
  /**
   * General id for the buttons that the user can interact with
   */
  id: string;
  /**
   * General css class or bootstrap classes.
   */
  className?: string;
  /**
   * General css class or bootstrap classes for main button.
   */
  btnClassName?: string;
  /**
   * Label title.
   */
  label?: string;
  /**
   * Label for main button.
   */
  btnLabel?: string;
  /**
   * Label for description.
   */
  description?: string;
  /**
   * React state for current file.
   */
  file: string | File;
  /**
   * String where the types of files allowed are described
   */
  acceptFile?: string;
  /**
   * Flag for upload file button warning
   */
  hasWarning?: boolean;
  /**
   * Label for upload file button warning.
   */
  warningLabel?: string;
  /**
   * Call if you dont want a interactive box after select a file
   */
  customChildrenFile?: JSX.Element;
  /**
   * Component JSX for left icon.
   */
  leftIcon?: JSX.Element;
  /**
   * Component JSX for right icon.
   */
  rightIcon?: JSX.Element;
  /**
   * General css class or bootstrap classes for interactive box component.
   */
  interactiveBoxClassName?: string;
  /**
   * State of file uploaded types
   */
  invalidFile?: boolean;
  /**
   * Messages to indicate the error in the file extension (Array strings with 2 positions)
   */
  errorMessageFileExtension?: string[];
  /**
   * State to adding primary button type
   */
  isPrimary?: boolean;
  /**
   * State to disable the button
   */
  disabled?: boolean;
  /**
   * Handle the main button and set the state of the file.
   */
  onChange: (ev: React.ChangeEvent<HTMLInputElement>, id: string | undefined) => void;
  /**
   * Handle the delete file button and set the state to null.
   */
  onDelete: (id: string | undefined) => void;
}

/**
 * It returns a upload input component.
 */
export const VzUploadButton = ({
  id,
  className = '',
  btnClassName = '',
  label,
  btnLabel,
  description,
  file,
  acceptFile,
  hasWarning,
  warningLabel,
  customChildrenFile,
  leftIcon,
  rightIcon,
  interactiveBoxClassName = '',
  invalidFile,
  errorMessageFileExtension = [],
  isPrimary,
  disabled,
  onChange,
  onDelete
}: UploadFileProps) => {
  return (
    <div className={`d-flex flex-column vz-upload-file ${className || ''}`}>
      {label && <VzLabel label={label} type='title' className='mb-1' />}
      {description && <VzLabel label={description} type='caption' className='mb-2' />}

      {!file
        ? (
          <div className='d-flex align-items-center'>
            <input
              id={`${id}-input-file`}
              style={{ display: 'none' }}
              type='file'
              accept={acceptFile}
              onChange={ev => onChange(ev, id)}
              disabled={disabled}
            />

            <label
              id={`${id}-label-file`}
              className={`
                  vz-file-button d-inline-flex 
                  ${isPrimary ? 'primary' : ''} 
                  ${disabled ? 'disabled' : ''} 
                  ${btnClassName || ''}
                `}
              htmlFor={`${id}-input-file`}
            >
              {leftIcon}
              {btnLabel}
              {rightIcon}
            </label>

            {hasWarning && (
              <VzErrorMessage
                className='mb-2 pb-1 ms-2'
                message={warningLabel ?? 'Error'}
              />
            )}
          </div>
        )
      
        : (
          customChildrenFile || (
            <VzInteractiveBox
              classNames={interactiveBoxClassName || ''}
              id={`${id}-interactive-box-file`}
              boxName={typeof file === 'string' ? file : file?.name}
              showActionButton
              handleAction={() => onDelete(id)}
            />
          )
        )
      }

      {invalidFile && (
        <>
          <VzErrorMessage
            className='mb-2 pb-1 ms-2 vz-error-message'
            message={errorMessageFileExtension.at(0) ?? 'This file extension is not supported.'}
          />

          {errorMessageFileExtension.at(1) && (
            <VzErrorMessage
              className='mb-2 pb-1 ms-2 vz-error-message'
              message={errorMessageFileExtension.at(1) ?? ''}
            />
          )}
        </>
      )}
    </div>
  );
};
