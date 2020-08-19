export type size = 'sm' | 'md' | 'lg';

export type shape = 'round' | 'square';

export type bg = 'dark' | 'light';

export type IconProps = {
    size?: size;
    shape?: shape;
    iconBg?: bg;
    $as?: any;
    href?: string;
    className?: string;
    target?: string;
};