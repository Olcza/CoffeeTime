import React, {Fragment} from 'react';
import Intro from '../Intro/Intro';
import ProductList from '../ProductList/ProductList';

const Home = () => (
    <Fragment>
        <Intro/>
        <ProductList/>
    </Fragment>
);

export default Home;