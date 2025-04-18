import React from 'react';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';
import Banner from '../../Components/Banner/Banner';

const Home = () => {
  const books = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Books books={books} ></Books>
        </div>
    );
};

export default Home;