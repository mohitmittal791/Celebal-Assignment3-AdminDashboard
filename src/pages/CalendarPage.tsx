import React from 'react';
import { Calendar } from '../components/Calendar/Calendar';
import { mockEvents } from '../data/mockData';

export const CalendarPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Calendar</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Schedule and manage your meetings, deadlines, and events.
        </p>
      </div>

      <Calendar events={mockEvents} />
    </div>
  );
};