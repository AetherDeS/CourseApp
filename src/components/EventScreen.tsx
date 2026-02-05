// EventListPage.js - страница списка мероприятий
import React from 'react';
import './EventListPage.css';

export const EventData = [
  {
    id: 1,
    icon: '🎉',
    title: 'Конференция по веб-разработке',
    description: 'Современные технологии и тренды в веб-разработке',
    date: '29 января 2026'
  },
  {
    id: 2,
    icon: '🎵',
    title: 'Музыкальный фестиваль',
    description: 'Выступления лучших музыкальных коллективов',
    date: '15 февраля 2026'
  },
  {
    id: 3,
    icon: '🎨',
    title: 'Выставка современного искусства',
    description: 'Работы молодых и талантливых художников',
    date: '10 марта 2026'
  },
  {
    id: 4,
    icon: '🏃',
    title: 'Марафон здоровья',
    description: 'Спортивное мероприятие для всей семьи',
    date: '5 апреля 2026'
  }
];

function EventListPage() {
  return (
    <div className="event-list-page">
      <h1 className="page-title">Список мероприятий</h1>
      <div className="events-container">
        {EventData.map(event => (
          <div key={event.id} className="event-card">
            <div className="event-icon">{event.icon}</div>
            <div className="event-info">
              <h2 className="event-title">{event.title}</h2>
              <p className="event-description">{event.description}</p>
              <p className="event-date">{event.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventListPage;