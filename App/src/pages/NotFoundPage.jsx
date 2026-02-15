import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { FaExclamationTriangle, FaHome, FaArrowLeft } from 'react-icons/fa';
import './NotFoundPage.css';

const NotFoundPage = () => {
  // Получаем информацию об ошибке (если есть)
  const error = useRouteError();
  const [showDetails, setShowDetails] = React.useState(false);

  return (
    <div>
        <h1>Не найдено :(</h1>
        <p>{showDetails}</p>
        <Link to="/">На главную</Link>
    </div>
  );
};

export default NotFoundPage;