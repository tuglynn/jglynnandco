import React from 'react';
import styles from '../assets/styles/styles';




function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header>
      <h1 style={styles.h1Text}>J Glynn & Co.</h1>
    <nav style={styles.header}>
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-item select' : 'nav-item'}
        >
          Home
        </a>
        <a
          href="#whatWeDo"
          onClick={() => handlePageChange('WhatWeDo')}
          className={currentPage === 'Projects' ? 'nav-item select' : 'nav-item'}
        >
          What We Do
        </a>
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-item select' : 'nav-item'}
        >
          Contact Me
        </a>
    </nav>
    </header>
  );
}

export default NavTabs;
