import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { CalendarEvent } from '../../data/mockData';

interface CalendarProps {
  events: CalendarEvent[];
}

export const Calendar: React.FC<CalendarProps> = ({ events }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const today = new Date();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const startDate = new Date(firstDayOfMonth);
  startDate.setDate(startDate.getDate() - firstDayOfMonth.getDay());

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + (direction === 'next' ? 1 : -1));
      return newDate;
    });
  };

  const getDaysInMonth = () => {
    const days = [];
    const current = new Date(startDate);

    for (let i = 0; i < 42; i++) {
      days.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }

    return days;
  };

  const getEventsForDate = (date: Date) => {
    return events.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.toDateString() === date.toDateString();
    });
  };

  const isToday = (date: Date) => {
    return date.toDateString() === today.toDateString();
  };

  const isCurrentMonth = (date: Date) => {
    return date.getMonth() === currentDate.getMonth();
  };

  const isSelected = (date: Date) => {
    return selectedDate && date.toDateString() === selectedDate.toDateString();
  };

  const days = getDaysInMonth();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      {/* Calendar Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigateMonth('prev')}
            className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => setCurrentDate(new Date())}
            className="px-3 py-1 text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
          >
            Today
          </button>
          <button
            onClick={() => navigateMonth('next')}
            className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <ChevronRight size={18} />
          </button>
          <button className="ml-2 inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors">
            <Plus size={16} />
            Add Event
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="p-6">
        <div className="grid grid-cols-7 gap-px bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
          {/* Day headers */}
          {dayNames.map(day => (
            <div key={day} className="bg-gray-50 dark:bg-gray-600 p-3 text-center">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{day}</span>
            </div>
          ))}

          {/* Calendar days */}
          {days.map((day, index) => {
            const dayEvents = getEventsForDate(day);
            
            return (
              <div
                key={index}
                onClick={() => setSelectedDate(day)}
                className={`
                  bg-white dark:bg-gray-800 p-2 min-h-[80px] cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors
                  ${!isCurrentMonth(day) ? 'text-gray-400 dark:text-gray-600' : 'text-gray-900 dark:text-white'}
                  ${isSelected(day) ? 'ring-2 ring-primary-500 ring-inset' : ''}
                `}
              >
                <div className={`
                  text-sm font-medium mb-1
                  ${isToday(day) ? 'bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center' : ''}
                `}>
                  {day.getDate()}
                </div>
                
                {/* Events */}
                <div className="space-y-1">
                  {dayEvents.slice(0, 2).map(event => (
                    <div
                      key={event.id}
                      className={`
                        text-xs px-2 py-1 rounded truncate
                        ${event.type === 'meeting' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' :
                          event.type === 'deadline' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' :
                          'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'}
                      `}
                    >
                      {event.title}
                    </div>
                  ))}
                  {dayEvents.length > 2 && (
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      +{dayEvents.length - 2} more
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected date events */}
      {selectedDate && (
        <div className="border-t border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Events for {selectedDate.toLocaleDateString()}
          </h3>
          <div className="space-y-2">
            {getEventsForDate(selectedDate).map(event => (
              <div key={event.id} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className={`w-3 h-3 rounded-full ${
                  event.type === 'meeting' ? 'bg-blue-500' :
                  event.type === 'deadline' ? 'bg-red-500' : 'bg-green-500'
                }`} />
                <div className="flex-1">
                  <p className="font-medium text-gray-900 dark:text-white">{event.title}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{event.time}</p>
                </div>
              </div>
            ))}
            {getEventsForDate(selectedDate).length === 0 && (
              <p className="text-gray-500 dark:text-gray-400">No events scheduled</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};