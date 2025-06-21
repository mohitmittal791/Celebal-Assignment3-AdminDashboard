import React, { useState } from 'react';
import { Plus, MoreHorizontal } from 'lucide-react';
import { KanbanColumn, KanbanTask } from '../../data/mockData';

interface KanbanBoardProps {
  data: KanbanColumn[];
}

export const KanbanBoard: React.FC<KanbanBoardProps> = ({ data: initialData }) => {
  const [columns, setColumns] = useState(initialData);
  const [draggedTask, setDraggedTask] = useState<KanbanTask | null>(null);
  const [draggedFromColumn, setDraggedFromColumn] = useState<string | null>(null);

  const handleDragStart = (e: React.DragEvent, task: KanbanTask, columnId: string) => {
    setDraggedTask(task);
    setDraggedFromColumn(columnId);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, targetColumnId: string) => {
    e.preventDefault();
    
    if (!draggedTask || !draggedFromColumn) return;
    
    if (draggedFromColumn === targetColumnId) {
      setDraggedTask(null);
      setDraggedFromColumn(null);
      return;
    }

    setColumns(prev => prev.map(column => {
      if (column.id === draggedFromColumn) {
        return {
          ...column,
          tasks: column.tasks.filter(task => task.id !== draggedTask.id)
        };
      }
      
      if (column.id === targetColumnId) {
        return {
          ...column,
          tasks: [...column.tasks, draggedTask]
        };
      }
      
      return column;
    }));

    setDraggedTask(null);
    setDraggedFromColumn(null);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-800';
      case 'low': return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800';
      default: return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Project Board</h2>
          <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors">
            <Plus size={16} />
            Add Task
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {columns.map(column => (
            <div
              key={column.id}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4"
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, column.id)}
            >
              {/* Column Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{column.title}</h3>
                  <span className="bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-400 text-xs font-medium px-2 py-1 rounded-full">
                    {column.tasks.length}
                  </span>
                </div>
                <button className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 rounded">
                  <MoreHorizontal size={16} />
                </button>
              </div>

              {/* Tasks */}
              <div className="space-y-3">
                {column.tasks.map(task => (
                  <div
                    key={task.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, task, column.id)}
                    className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-600 cursor-move hover:shadow-md transition-shadow"
                  >
                    {/* Task Priority */}
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full border ${getPriorityColor(task.priority)}`}>
                        {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                      </span>
                      <button className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 rounded">
                        <MoreHorizontal size={14} />
                      </button>
                    </div>

                    {/* Task Title */}
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">{task.title}</h4>

                    {/* Task Description */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">{task.description}</p>

                    {/* Task Tags */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {task.tags.map(tag => (
                        <span
                          key={tag}
                          className="text-xs bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Task Footer */}
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                      <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>
                      <div className="flex items-center gap-1">
                        <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium">
                            {task.assignee.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Add Task Button */}
                <button className="w-full p-3 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-gray-500 dark:text-gray-400 hover:border-primary-300 hover:text-primary-600 dark:hover:border-primary-600 dark:hover:text-primary-400 transition-colors">
                  <Plus size={16} className="mx-auto mb-1" />
                  <span className="text-sm">Add task</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};