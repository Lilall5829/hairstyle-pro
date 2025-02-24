// src/components/booking/Calendar.jsx
import React from 'react';

function Calendar({ selectedDate, onSelectDate }) {
  const generateCalendarDays = () => {
    const today = new Date();
    const days = [];
    
    for (let i = 0; i < 30; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      days.push(date);
    }
    
    return days;
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  const isSelected = (date) => {
    if (!selectedDate) return false;
    return date.toDateString() === selectedDate.toDateString();
  };

  return (
    <div className="grid grid-cols-7 gap-2">
      {generateCalendarDays().map((date) => (
        <button
          key={date.toISOString()}
          onClick={() => onSelectDate(date)}
          className={`p-2 text-center rounded ${
            isSelected(date)
              ? 'bg-purple-600 text-white'
              : 'hover:bg-purple-100'
          }`}
          disabled={date < new Date()}
        >
          <div className="text-xs">{date.toLocaleDateString('en-US', { weekday: 'short' })}</div>
          <div className="font-semibold">{date.getDate()}</div>
        </button>
      ))}
    </div>
  );
}

export default Calendar;