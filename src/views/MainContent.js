import React from 'react';
import Search from '../components/Search';
import RandomWord from '../components/RandomWord';
import Images from '../components/Images';


export default function MainContent(){
    return(
        <div>
            <Search/>
            <RandomWord/>
            <Images/>
        </div>
    )
}