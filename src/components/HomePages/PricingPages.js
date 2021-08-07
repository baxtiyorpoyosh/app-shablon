import React from 'react';
import CallToActionOne from '../CallToActionOne';
import Footer from '../Footer';
import NavOne from '../NavOne';
import PageHeader from '../PageHeader';
import Pricing from '../Pricing';

const PricingPages = () => {
  return (
    <div>
      <NavOne />
      <PageHeader />
      <Pricing />
      <CallToActionOne />
      <Footer />
    </div>
  );
};

export default PricingPages;