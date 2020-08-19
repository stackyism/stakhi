import React from 'react';
import Box from '../Box';
import Tree from './../Tree';
import Router from 'next/router';

const menuData = [
    { id: 'home', label: 'Home' },
    {
      id: 'portfolio', label: 'Portfolio', children: [
        { id: 'portraits', label: 'Portraits' },
        { id: 'food', label: 'Food' },
        { id: 'nature', label: 'Nature' },
      ]
    },
    {
      id: 'social', label: 'social', children: [
        { id: 'instagram', label: 'Instagram' },
      ]
    },
  ];

type NavigatorProps = {
    onNavigate: () => void;
}

const Navigator: React.FC<NavigatorProps> = props => {
    const onNavigate = (event, node) => Router.push(`/p/${node}`);
    return (
        <Box $as="section" className="h-screen p-8 text-gray-200">
            <Box className="text-4xl">
                <span>Saagar Takhi</span>
            </Box>
            <Box className="text-2xl py-8">
                <Tree data={menuData} onChange={onNavigate}/>
            </Box>
        </Box>
    );
};

export default Navigator;