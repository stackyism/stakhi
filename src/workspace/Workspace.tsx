import React from 'react';
import {useRouter} from 'next/router';
import Box from '../components/Box';
import Slideshow from '../components/Slideshow';

const Workspace = props => {
    return <Box $as="section" className="h-screen p-8">
        <Slideshow></Slideshow>
    </Box>;
};

export default Workspace;