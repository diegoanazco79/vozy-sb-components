/// <reference types="react" />
import './styles.scss';
export interface BadgeProps {
    /**
     * ID of the component
     */
    id?: string;
    /**
     * This is the type of badge. Depending on it, it will change its styles
     */
    type: 'success' | 'failed' | 'neutral';
    /**
     * Common bootstrap styles for badge
     */
    className?: string;
    /**
     * Label that renders the component
     */
    text: string;
    /**
     * This is the type of label. Depending on it, it will change its styles
     */
    labelType: 'header' | 'header-small' | 'title' | 'default' | 'caption';
    /**
     * Common bootstrap styles for label
     */
    labelClassName?: string;
}
export declare const VzBadge: ({ id, type, className, text, labelType, labelClassName }: BadgeProps) => JSX.Element;
