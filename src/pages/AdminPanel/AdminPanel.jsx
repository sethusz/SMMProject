import React, { useState } from 'react';
import './AdminPanel.scss';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import ALL_USER from '../../server/allUsers';
import Cabinet from '../pageCabinet/Cabinet';
import arrowLeft from '../../assets/arrowLeft.svg';
import SignUp from './SignUp';
import useNoAdmin from '../../hooks/useNoAuth';

const AdminPanel = () => {
  useNoAdmin();

  const { loading, error, data } = useQuery(ALL_USER, {
    variables: { take: 100 }, // Pass the 'take' variable with a value of 100
  });

  const [currentPage, setCurrentPage] = useState(1);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const accounts = data.getAllUsers.items;
  const itemsPerPage = 10;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  const handleDeleteAccount = (email) => {
    // Implement your delete account logic here
    console.log('Deleting account:', email);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return accounts.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(accounts.length / itemsPerPage);

  return (
    <>
      <Cabinet />
      <div className='arrow__left'>
        <Link to='/'>
          <img src={arrowLeft} alt="Arrow Left" />
        </Link>
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
              {getPageData().map((account) => (
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
        <div className='admin__pagination'>
          <button
            onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage < totalPages ? currentPage + 1 : totalPages)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
        <div className='admin__registration'>Регистрация</div>
        <SignUp />
      </div>
    </>
  );
};

export default AdminPanel;
