import React, {useCallback, useState} from 'react';
import Box from './Box';
import {MdNavigateNext} from 'react-icons/md';

const TreeRow = props => {
  const {datum, onChange} = props;
  const [open, setOpen] = useState(true);
  const onClick = useCallback((event) => {
    if(datum.children){
      setOpen(!open)
    } else {
      props.onChange(event, datum.id);
    }
    console.log(datum.id);
  }, [props.onChange, open, setOpen]);
  return (
  <>
    <Box className="flex items-center cursor-pointer" onClick={onClick}>
      {datum.children ? <MdNavigateNext className={`${open ? 'transform rotate-90' : ''}`} /> : null}
      <Box data-nav={datum.id}>{datum.label}</Box>
    </Box>
    {datum.children && open ? <Box className="pl-12">
        <Tree data={datum.children} onChange={onChange}/>
      </Box> : null }
  </>
)}

const Tree = props => {
  return props.data.map(datum => <TreeRow key={datum.id} datum={datum} onChange={props.onChange} />);
}

export default Tree;
