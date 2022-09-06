import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import WhatWeDo from './pages/WhatWeDo';
// import Projects from './pages/Projects';
import Foot from './Footer';
export default function MainContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'WhatWeDo') {
      return <WhatWeDo />;
    }
    // if (currentPage === 'Projects') {
    //   return <Projects />;
    // }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>

      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />

      {renderPage()}
      <Foot />
    </div>
  );
}
