import React, { useState } from 'react';

import Navbar from './Navbar';
import About from './About';

export default function Content() {
    const [currentPage, setCurrentPage] = useState('About');
  
    const renderPage = () => {
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Portfolio') {
        return <About />;
      }
      if (currentPage === 'Contact') {
        return <About />;
      }
      return <About />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);

    return (
      <div>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
    );
}