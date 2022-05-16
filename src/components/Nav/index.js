import React from 'react';

function Nav({ currentPage, handlePageChange }) {
  return (
    <ul className="flex-row px-1">
      <h2><span role="img" aria-label="web">🕸️</span>Web of Fame</h2>
      <ul className="flex-row">
        <li className="mx-2">
          <a href="#about" onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            Who I Am
          </a>
        </li>
        <li className="mx-2">
          <a href="#portfolio" onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            What I Do
          </a>
        </li>
        <li className="mx-2">
          <a href="#resume" onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            What I've Done
          </a>
        </li>
        <li className="mx-2">
          <a href="#contactForm" onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact Me
          </a>
        </li>
      </ul>
    </ul>
  );
}

export default Nav;

