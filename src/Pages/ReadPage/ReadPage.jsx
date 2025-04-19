import React from 'react';
import Chart from '../Chart/Chart';
import WishChart from '../WishChart/WishChart';

const ReadPage = () => {
    return (
        <div>
            <h1 className='text-center text-2xl font-bold lg:mt-8'>ReadList Chart </h1>
            <Chart></Chart>
            <h1 className='text-center text-2xl font-bold lg:mt-8'>WishList Chart</h1>
            <WishChart></WishChart>
        </div>
    );
};

export default ReadPage;