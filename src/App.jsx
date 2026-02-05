// App.js - основной компонент приложения
import React, { useState } from 'react';
import EventListPage from './EventListPage';
import CalendarPage from './CalendarPage';
import MenuPage from './MenuPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('events');

  const renderPage = () => {
    switch(currentPage) {
      case 'events':
        return <EventListPage />;
      case 'calendar':
        return <CalendarPage />;
      case 'menu':
        return <MenuPage />;
      default:
        return <EventListPage />;
    }
  };

  return (
    <div className="app">
      <div className="content">
        {renderPage()}
      </div>
      <nav className="bottom-navigation">
        <button 
          className={`nav-item ${currentPage === 'events' ? 'active' : ''}`}
          onClick={() => setCurrentPage('events')}
        >
          <svg className="nav-icon" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1" />
          </svg>
          <span>События</span>
        </button>
        <button 
          className={`nav-item ${currentPage === 'calendar' ? 'active' : ''}`}
          onClick={() => setCurrentPage('calendar')}
        >
          <svg className="nav-icon" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1" />
          </svg>
          <span>Календарь</span>
        </button>
        <button 
          className={`nav-item ${currentPage === 'menu' ? 'active' : ''}`}
          onClick={() => setCurrentPage('menu')}
        >
          <svg className="nav-icon" viewBox="0 0 24 24">
            <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
          </svg>
          <span>Меню</span>
        </button>
      </nav>
    </div>
  );
}

export default App;