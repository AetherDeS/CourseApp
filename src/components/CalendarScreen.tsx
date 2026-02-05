// CalendarPage.js - страница календаря
import React, { useState } from 'react';
import './CalendarPage.css';
import { EventData } from './EventScreen';

function CalendarPage() {
  const [selectedMonth, setSelectedMonth] = useState(0); // 0 = January
  const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 
                  'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  
  const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  
  // Генерация дней календаря
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };
  
  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };
  
  const currentYear = 2026;
  const daysInMonth = getDaysInMonth(selectedMonth, currentYear);
  const firstDay = getFirstDayOfMonth(selectedMonth, currentYear);
  
  // Пример данных о мероприятиях
  const EventData = {
    '29-0-2026': ['🎉', '🎵'],
    '15-1-2026': ['🎨'],
    '10-2-2026': ['🏃'],
    '5-3-2026': ['🎉']
  };

  return (
    <div className="calendar-page">
      <h1 className="page-title">Календарь мероприятий</h1>
      
      <div className="calendar-container">
        <div className="month-selector">
          {months.map((month, index) => (
            <button
              key={index}
              className={`month-btn ${selectedMonth === index ? 'active' : ''}`}
              onClick={() => setSelectedMonth(index)}
            >
              {month}
            </button>
          ))}
        </div>
        
        <div className="calendar-grid">
          <div className="days-header">
            {daysOfWeek.map((day, index) => (
              <div key={index} className="day-header">{day}</div>
            ))}
          </div>
          
          <div className="days-grid">
            {/* Пустые ячейки для выравнивания первого дня месяца */}
            {Array.from({ length: firstDay === 0 ? 6 : firstDay - 1 }).map((_, index) => (
              <div key={`empty-${index}`} className="day-cell empty"></div>
            ))}
            
            {/* Дни месяца */}
            {Array.from({ length: daysInMonth }).map((_, index) => {
              const day = index + 1;
              const dayKey = `${day}-${selectedMonth}-${currentYear}`;
              const dayEvents = events[dayKey] || [];
              
              return (
                <div key={day} className="day-cell">
                  <div className="day-number">{day}</div>
                  <div className="events-container">
                    {dayEvents.map((icon, i) => (
                      <span key={i} className="event-icon">{icon}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarPage;