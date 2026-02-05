// MenuPage.js - страница меню
import React from 'react';
import './MenuPage.css';

function MenuPage() {
  return (
    <div className="menu-page">
      <h1 className="page-title">Меню приложения</h1>
      <div className="menu-content">
        <p className="empty-message">Страница меню находится в разработке</p>
        <div className="menu-placeholder">
          <svg className="placeholder-icon" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default MenuPage;