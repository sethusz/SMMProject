import React from 'react';
import './AdminPanel.scss';
import { Link } from 'react-router-dom';

import arrowLeft from '../../assets/arrowLeft.svg';

import SignUp from './SignUp';

import useNoAuth from '../../hooks/useNoAuth';

const AdminPanel = () => {

  useNoAuth()
  // Sample data for accounts
  const accounts = [
    { email: 'user1@example.com', date: '2023-14-02' },
    { email: 'user1@example.com', date: '2023-14-02' },
    { email: 'user1@example.com', date: '2023-14-02' },
    { email: 'user1@example.com', date: '2023-14-02' },
    { email: 'user1@example.com', date: '2023-14-02' },
    { email: 'user1@example.com', date: '2023-14-02' },
    { email: 'user1@example.com', date: '2023-14-02' },
    { email: 'user1@example.com', date: '2023-14-02' },
    { email: 'user1@example.com', date: '2023-14-02' },
    { email: 'user1@example.com', date: '2023-14-02' },
    { email: 'user1@example.com', date: '2023-14-02' },
    { email: 'user1@example.com', date: '2023-14-02' },
    { email: 'user1@example.com', date: '2023-14-02' },
    { email: 'user1@example.com', date: '2023-14-02' },
    { email: 'user1@example.com', date: '2023-14-02' },
    { email: 'user1@example.com', date: '2023-14-02' },
    { email: 'user1@example.com', date: '2023-14-02' },
    { email: 'user1@example.com', date: '2023-14-02' },
  ];

  return (
    <>
      <div className='arrow__left'>
        <Link to='/'>  <img src={arrowLeft} alt="Arrow Left" /> </Link>
      </div>
      <div className='admin'>
        <div className='admin__title'>Admin Panel</div>
        <div className='admin__panel'>
          <table>
            <thead>
              <tr>
                <th>Email</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {accounts.map((account, index) => (
                <tr key={index}>
                  <td>{account.email}</td>
                  <td>{account.date}</td>
                  <td>
                    <button onClick={() => handleDeleteAccount(account.email)}>
                      Delete Account
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='admin__registration'>Регистрация</div>

        <SignUp/>
      </div>
    </>
  );
};

export default AdminPanel;
