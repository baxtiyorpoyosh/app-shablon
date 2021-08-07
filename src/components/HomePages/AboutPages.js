import React from 'react';
import AboutOne from '../AboutOne';
import BrandsTwo from '../BrandTwo';
import NavOne from '../NavOne';
import PageHeader from '../PageHeader';
import TeamOne from '../TeamOne';
import VideoOne from '../VideoOne';
import TestiTomonialOne from '../TestiTomonialOne';
import CallToActionOne from '../CallToActionOne';
import Footer from '../Footer';

const AboutPages = () => {
  return (
    <div>
      <NavOne />
      <PageHeader/>
      <AboutOne />
      <TeamOne />
      <VideoOne />
      <BrandsTwo />
      <TestiTomonialOne />
      <CallToActionOne />
      <Footer />
    </div>
  );
};

export default AboutPages;