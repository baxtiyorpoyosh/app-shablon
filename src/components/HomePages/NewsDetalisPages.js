import React from 'react';
import Footer from '../Footer';
import NavOne from '../NavOne';
import NewsDetails from '../NewsDetalis';
import PageHeader from '../PageHeader';

const NewsDetalisPages = () => {
    return (
        <div>
            <NavOne />
            <PageHeader />
            <NewsDetails />
            <Footer/>
        </div>
    );
};

export default NewsDetalisPages;