import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode'

const useNoAdmin = () => {
  const navigate = useNavigate();

  const accessToken = localStorage.getItem('accesstoken');

  const payLoad = jwt(accessToken)

  const roleUser = payLoad && payLoad.role ? payLoad.role : null;

  useEffect(() => {
    if (!roleUser) {
      navigate('/LogIn');
    }
  }, [navigate]);
};

export default useNoAdmin;