import React from 'react';

import Banner from '../Banner/Banner';
import Contract from '../Contract/Contract';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';


const Home = () => {
    return (
        <div className='home'>
            <Header />
            <Banner />
            <Contract />
            <Projects />

        </div>
    );
};

export default Home;