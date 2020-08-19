import React from 'react';
import Box from './Box'

const Tree = props => {
  return props.data.map(datum => (
    <>
      <Box>{datum.label}</Box>
      {datum.children ? <Box className="ml-5">
          <Tree data={datum.children} />
        </Box> : null }
    </>
  ));
}

export default Tree;
