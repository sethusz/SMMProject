import React from 'react';
import './AdminPanel.scss';
import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom';
import ALL_USER from '../../server/allUsers';

import arrowLeft from '../../assets/arrowLeft.svg';

import SignUp from './SignUp';

import useNoAdmin from '../../hooks/useNoAuth';

const AdminPanel = () => {

  useNoAdmin()


  const { loading, error, data } = useQuery(ALL_USER);


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const accounts = data.getAllUsers.items;


  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

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
              {accounts.map((account) => (
                <tr key={account.id}>
                  <td>{account.email}</td>
                  <td>{formatDate(account.createdAt)}</td>
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

        <SignUp />
      </div>
    </>
  );
};

export default AdminPanel;
