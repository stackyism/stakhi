import React from 'react';

import {IconSize} from './constants';
import {IconProps} from './types';
import Box from '../Box';

const styleFn = props => {
    const {$size, $shape, $iconBg} = props;
    const size = IconSize[$size];
    
    return {
        height : `${size}rem`,
        width : `${size}rem`,
        borderRadius : $shape === 'round' ? '50%' : 0,
        color : $iconBg === 'dark' ? '#fff' : 'black',
        backgroundColor : $iconBg  === 'dark' ? '#1a202c' : '#eee',
    }
}

const Icon: React.FC<IconProps> = props => {
    const {className, size, shape, iconBg, ...restProps} = props;
    const sharedProps = {$size : size, $shape : shape, $iconBg: iconBg};
    //@ts-ignore
    return <Box 
        className={`inline-flex justify-center items-center cursor-pointer p-1 ${className}`} 
        $style={styleFn} 
        {...sharedProps} 
        {...restProps}>{props.children}
    </Box>
};

Icon.defaultProps = {
    size : 'md',
    shape : 'round',
    iconBg : 'light',
}

export default Icon;