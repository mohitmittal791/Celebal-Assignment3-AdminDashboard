import React from 'react';
import { KanbanBoard } from '../components/Kanban/KanbanBoard';
import { mockKanbanData } from '../data/mockData';

export const KanbanPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Kanban Board</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your projects and tasks with drag-and-drop functionality.
        </p>
      </div>

      <KanbanBoard data={mockKanbanData} />
    </div>
  );
};