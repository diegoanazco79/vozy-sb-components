/// <reference types="react" />
import './styles.scss';
export interface LoadingDataProps {
    /**
     * ID of the component
     */
    id?: string;
    /**
     * Common bootstrap styles for spinner component
     */
    classNames?: string;
    /**
     * This is the type of spinner. Depending on it, it will change its styles
     */
    size: 'sm' | undefined;
    /**
     * Common css Stylesheets for spinner component
     */
    style?: React.CSSProperties;
    /**
     * Common bootstrap styles for spinner wrapper
     */
    wrapperClassNames?: string;
    /**
     * Common css Stylesheets for spinner wrapper
     */
    wrapperStyle?: React.CSSProperties;
}
export declare const VzLoadingData: {
    ({ id, classNames, size, style, wrapperClassNames, wrapperStyle }: LoadingDataProps): JSX.Element;
    defaultProps: {
        classNames: string;
        style: {};
        wrapperClassNames: string;
        wrapperStyle: {};
    };
};
