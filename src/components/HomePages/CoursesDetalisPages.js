import React from 'react';
import CoursesDetalis from '../CoursesDetalis';
import Footer from '../Footer';
import NavOne from '../NavOne';
import PageHeader from '../PageHeader';

const CoursesDetalisPages = () => {
  return (
    <div>
      <NavOne />
      <PageHeader />
      <CoursesDetalis/>
      <Footer />
    </div>
  );
};

export default CoursesDetalisPages;