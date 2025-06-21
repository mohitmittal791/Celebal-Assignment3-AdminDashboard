import React from 'react';
import { DataTable } from '../components/Tables/DataTable';
import { mockUsers, User } from '../data/mockData';

export const Users: React.FC = () => {
  const columns = [
    {
      key: 'avatar' as keyof User,
      title: 'Avatar',
      render: (value: string) => (
        <img src={value} alt="User" className="w-8 h-8 rounded-full object-cover" />
      )
    },
    {
      key: 'name' as keyof User,
      title: 'Name',
      sortable: true,
      render: (value: string, user: User) => (
        <div>
          <div className="font-medium text-gray-900 dark:text-white">{value}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{user.email}</div>
        </div>
      )
    },
    {
      key: 'role' as keyof User,
      title: 'Role',
      sortable: true,
      render: (value: string) => (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          value === 'Admin' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' :
          value === 'Manager' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' :
          'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
        }`}>
          {value}
        </span>
      )
    },
    {
      key: 'status' as keyof User,
      title: 'Status',
      sortable: true,
      render: (value: string) => (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          value === 'active' 
            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' 
            : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
        }`}>
          {value.charAt(0).toUpperCase() + value.slice(1)}
        </span>
      )
    },
    {
      key: 'joinDate' as keyof User,
      title: 'Join Date',
      sortable: true,
      render: (value: string) => new Date(value).toLocaleDateString()
    },
    {
      key: 'lastActive' as keyof User,
      title: 'Last Active',
      sortable: true,
      render: (value: string) => {
        const date = new Date(value);
        const now = new Date();
        const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
        
        if (diffInHours < 1) return 'Just now';
        if (diffInHours < 24) return `${diffInHours}h ago`;
        return `${Math.floor(diffInHours / 24)}d ago`;
      }
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Users</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your team members and their access levels.
        </p>
      </div>

      <DataTable
        data={mockUsers}
        columns={columns}
        searchable={true}
        filterable={true}
        pageSize={10}
      />
    </div>
  );
};