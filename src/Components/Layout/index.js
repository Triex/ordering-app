import React, { useState } from 'react';
import { useSelector } from 'react-redux';

//import local files
import style from './index.module.scss';
import Navigation from './../Navigation';
import Main from './../Main';
import Sidebar from './../Sidebar';

export default function Layout({ children }) {
  // Toggle sidebar cart
  const showCart = useSelector((state) => state.sidebar);

  console.log(showCart);

  return (
    <div className='container-fluid p-0 '>
      <div className={`d-flex align-items-stretch ${style.layout}`}>
        <div className={` ${style.nav}`}>
          <Navigation />
        </div>
        <div className={`${style.main}`}>
          <Main>{children}</Main>
        </div>
        {showCart && (
          <div className={`${style.sidebar}`}>
            <Sidebar />
          </div>
        )}
      </div>
    </div>
  );
}
