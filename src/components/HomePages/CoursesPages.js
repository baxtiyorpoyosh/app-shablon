import React from 'react';
import Courses from '../Courses';
import Footer from '../Footer';
import NavOne from '../NavOne';
import PageHeader from '../PageHeader';

const CoursesPages = () => {
  return (
    <div>
      <NavOne />
      <PageHeader />
      <Courses />
      <Footer />
    </div>
  );
};

export default CoursesPages;