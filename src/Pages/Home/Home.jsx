import React, { useContext } from 'react';
import Books from '../Books/Books';
import Banner from '../../Components/Banner/Banner';
import { BooksContext } from '../../Components/Context/BooksContext';

const Home = () => {
const {books} = useContext(BooksContext);
    return (
        <div>
            <Banner></Banner>
            <Books books={books} ></Books>
        </div>
    );
};

export default Home;