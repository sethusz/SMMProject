import React, { useState } from 'react';
import './AdminPanel.scss';
import { useQuery, useMutation, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import ALL_USER from '../../server/allUsers';
import Cabinet from '../pageCabinet/Cabinet';
import arrowLeft from '../../assets/arrowLeft.svg';
import SignUp from './SignUp';
import useNoAdmin from '../../hooks/useNoAuth';
import DELETE_USER from '../../server/deleteUser';


const AdminPanel = () => {
  useNoAdmin();

  const { loading, error, data, refetch } = useQuery(ALL_USER);
  const [currentPage, setCurrentPage] = useState(1);
  const [deleteUser] = useMutation(DELETE_USER);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const accounts = data?.getAllUsers?.items ?? [];
  const totalUsers = data?.getAllUsers?.totalCount ?? 0;
  const itemsPerPage = 5;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  const handleDeleteAccount = (email, userId) => {
    deleteUser({ variables: { userId } })
      .then(() => {
        refetch(); // Refetch data after successful deletion
        console.log('Account deleted successfully');
      })
      .catch((error) => {
        console.error('Error deleting account:', error);
      });
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return accounts.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(totalUsers / itemsPerPage);

  const renderPagination = () => {
    const pageNumbers = [];
    const showEllipsis = totalPages > 5;

    for (let i = 1; i <= totalPages; i++) {
      if (!showEllipsis || i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
        pageNumbers.push(
          <div
            key={i}
            onClick={() => handlePageChange(i)}
            className={currentPage === i ? 'active__number' : 'admin__pagination-number'}
          >
            {i}
          </div>
        );
      } else if (showEllipsis && (i === currentPage - 2 || i === currentPage + 2)) {
        pageNumbers.push(<div className='admin__dots' key={i}>...</div>);
      }
    }

    return pageNumbers;
  };

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
                    <button onClick={() => handleDeleteAccount(account.email, account.id)}>
                      Delete Account
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='admin__pagination'>
          <div
            className='admin__prevision'
            onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1)}
            disabled={currentPage === 1}
          >
            Previous
          </div>
          {renderPagination()}
          <div
            className='admin__next'
            onClick={() => handlePageChange(currentPage < totalPages ? currentPage + 1 : totalPages)}
            disabled={currentPage === totalPages}
          >
            Next
          </div>
        </div>
        <div className='admin__registration'>Регистрация</div>
        <SignUp />
      </div>
    </>
  );
};

export default AdminPanel;