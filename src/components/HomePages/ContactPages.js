import React from 'react';
import Contact from '../Contact';
import Footer from '../Footer';
import Layout from '../Layout';
import NavOne from '../NavOne';
import PageHeader from '../PageHeader';

const ContactPages = () => {
    return (
        <div>
             <NavOne />
            <PageHeader />
            <Contact />
            <Footer />
        </div>
    );
};

export default ContactPages;