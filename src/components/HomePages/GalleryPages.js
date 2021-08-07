import React from 'react';
import PageHeader from '../PageHeader';
import Gallery from '../Gallery';
import NavOne from '../NavOne';
import Footer from '../Footer';
const GalleryPages = () => {
  return (
    <div>
      <NavOne />
      <PageHeader />
      <Gallery />
      <Footer />
    </div>
  );
};

export default GalleryPages;