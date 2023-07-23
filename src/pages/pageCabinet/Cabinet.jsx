import React, { useState, useEffect, useRef } from 'react';
import scss from './Cabinet.module.scss';
import { useMutation } from '@apollo/client'
import { useNavigate } from 'react-router-dom';

import LOGOUT_MUTATION from '../../server/logout'


import { Link } from 'react-router-dom';

const Cabinet = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [logout] = useMutation(LOGOUT_MUTATION);

  const handleAvatarClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const userData = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const response = await logout({
        variables: { logoutId: userData.id },
      });
      localStorage.removeItem('accesstoken');
      localStorage.removeItem('refreshtoken');
      localStorage.removeItem('user');
      navigate('/LogIn');

    } catch (error) {
      console.error(error);
    }
  };

  // const handleClickOutside = (event) => {
  //   if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //     setIsDropdownOpen(false); 
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener('click', handleClickOutside, true);

  //   return () => {
  //     document.removeEventListener('click', handleClickOutside, true);
  //   };
  // }, []);

  return (
    <>
      <div className={scss.image__avatar} onClick={handleAvatarClick}></div>
      {isDropdownOpen && (
        <div ref={dropdownRef} className={scss.dropdown__content}>
          <div className={scss.dropdown__username}>{userData.username}

            <div className={scss.dropdown__email}>({userData.email})</div>
          </div>

          {/* <div className='dropdown__actions'> */}

          <Link to='/AdminPanel'>
            <div className={scss.dropdown__admin}>Admin Panel</div>
          </Link>

          <div className={scss.dropdown__logout} onClick={handleLogout}>Выйти</div>
          {/* </div> */}

          <hr className={scss.hr} />

          <div className={scss.dropdown__module}>
            {/* <ul className='module__list'> */}
            <div className={scss.module__title}>Modules</div>
            <div className={scss.module__number}>Module 1</div>
            <div className={scss.module__number}>Module 2</div>
            <div className={scss.module__number}>Module 3</div>
            <div className={scss.module__number}>Module 4</div>
            <div className={scss.module__number}>Module 5</div>
            {/* </ul> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Cabinet;
