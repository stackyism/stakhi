import React from 'react';
import Router from 'next/router';

import Box from '../Box';
import Tree from './../Tree';
import Icon from '../Icon';
import SocialBar from '../SocialBar';
import {AiFillLinkedin, AiFillMediumCircle, AiFillInstagram, AiFillGithub, AiFillTwitterCircle, AiFillFacebook} from 'react-icons/ai';
import {GrWordpress} from 'react-icons/gr';

const menuData = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    // {
    //   id: 'portfolio', label: 'Portfolio', children: [
    //     { id: 'portraits', label: 'Portraits' },
    //     { id: 'food', label: 'Food' },
    //     { id: 'nature', label: 'Nature' },
    //   ]
    // },
    // {
    //   id: 'social', label: 'social', children: [
    //     { id: 'instagram', label: 'Instagram' },
    //   ]
    // },
  ];

  const channels = [
    {icon : <AiFillLinkedin className="h-6 w-6" />, link : 'https://www.linkedin.com/in/stackyism/'},
    {icon : <AiFillGithub className="h-6 w-6" />, link : 'https://github.com/stackyism/'},
    {icon : <GrWordpress className="h-6 w-6" />, link : 'https://stackyism.wordpress.com/'},
    {icon : <AiFillMediumCircle className="h-6 w-6" />, link : 'https://medium.com/life-forager'},
    {icon : <AiFillTwitterCircle className="h-6 w-6" />, link : 'https://twitter.com/stakhi08'},
    {icon : <AiFillInstagram className="h-6 w-6" />, link : 'https://www.instagram.com/stackyism/'},
    {icon : <AiFillFacebook className="h-6 w-6" />, link : 'https://www.facebook.com/stakhi08/'},
  ]

type NavigatorProps = {
    onNavigate: () => void;
}

const Navigator: React.FC<NavigatorProps> = props => {
    const onNavigate = (event, node) => Router.push(`/p/${node}`);
    return (
        <Box $as="section" className="h-screen p-8 text-gray-200 flex flex-col items-center justify-between">
            <Box>
                <span className="text-6xl">Saagar Takhi</span>
            </Box>
            <img src="/media/saagar_guitar.jpg" className="h-64 w-64 object-cover rounded-full" />
            {/* <Box className="text-2xl py-8">
                <Tree data={menuData} onChange={onNavigate}/>
            </Box> */}
            <Box>
              <SocialBar channels={channels}></SocialBar> 
            </Box>
        </Box>
    );
};

export default Navigator;