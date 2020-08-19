import React from 'react';

import Box from '../Box';
import Icon from '../Icon';

const SocialBar = props => {
    const {channels} = props;
    return <Box className={`flex flex-wrap`}>
        {channels.map(channel => <Icon size="lg" $as="a" href={channel.link} target="_blank" className="m-2">{channel.icon}</Icon>)}
    </Box>

};

export default SocialBar;