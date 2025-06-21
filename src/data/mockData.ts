export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  avatar: string;
  joinDate: string;
  lastActive: string;
}

export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  type: 'meeting' | 'deadline' | 'event';
  color: string;
}

export interface KanbanTask {
  id: string;
  title: string;
  description: string;
  assignee: string;
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
  tags: string[];
}

export interface KanbanColumn {
  id: string;
  title: string;
  tasks: KanbanTask[];
}

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@company.com',
    role: 'Admin',
    status: 'active',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    joinDate: '2023-01-15',
    lastActive: '2024-01-15T10:30:00Z'
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'michael.chen@company.com',
    role: 'Developer',
    status: 'active',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    joinDate: '2023-03-22',
    lastActive: '2024-01-15T09:15:00Z'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    email: 'emily.rodriguez@company.com',
    role: 'Designer',
    status: 'active',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    joinDate: '2023-05-10',
    lastActive: '2024-01-14T16:45:00Z'
  },
  {
    id: '4',
    name: 'David Wilson',
    email: 'david.wilson@company.com',
    role: 'Manager',
    status: 'inactive',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    joinDate: '2022-11-08',
    lastActive: '2024-01-10T14:20:00Z'
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    email: 'lisa.thompson@company.com',
    role: 'Analyst',
    status: 'active',
    avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    joinDate: '2023-07-18',
    lastActive: '2024-01-15T11:00:00Z'
  }
];

export const mockEvents: CalendarEvent[] = [
  {
    id: '1',
    title: 'Team Standup',
    date: '2024-01-16',
    time: '09:00',
    type: 'meeting',
    color: 'blue'
  },
  {
    id: '2',
    title: 'Project Deadline',
    date: '2024-01-18',
    time: '17:00',
    type: 'deadline',
    color: 'red'
  },
  {
    id: '3',
    title: 'Client Presentation',
    date: '2024-01-20',
    time: '14:00',
    type: 'meeting',
    color: 'purple'
  },
  {
    id: '4',
    title: 'Team Building Event',
    date: '2024-01-22',
    time: '15:00',
    type: 'event',
    color: 'green'
  }
];

export const mockKanbanData: KanbanColumn[] = [
  {
    id: 'todo',
    title: 'To Do',
    tasks: [
      {
        id: '1',
        title: 'Design new landing page',
        description: 'Create a modern, responsive landing page for the product launch',
        assignee: 'Emily Rodriguez',
        priority: 'high',
        dueDate: '2024-01-20',
        tags: ['Design', 'UI/UX']
      },
      {
        id: '2',
        title: 'API Integration',
        description: 'Integrate third-party payment API',
        assignee: 'Michael Chen',
        priority: 'medium',
        dueDate: '2024-01-25',
        tags: ['Development', 'Backend']
      }
    ]
  },
  {
    id: 'inprogress',
    title: 'In Progress',
    tasks: [
      {
        id: '3',
        title: 'User Authentication',
        description: 'Implement secure user login and registration system',
        assignee: 'Michael Chen',
        priority: 'high',
        dueDate: '2024-01-18',
        tags: ['Development', 'Security']
      }
    ]
  },
  {
    id: 'review',
    title: 'Review',
    tasks: [
      {
        id: '4',
        title: 'Mobile App Testing',
        description: 'Comprehensive testing of mobile application features',
        assignee: 'Lisa Thompson',
        priority: 'medium',
        dueDate: '2024-01-16',
        tags: ['Testing', 'Mobile']
      }
    ]
  },
  {
    id: 'done',
    title: 'Done',
    tasks: [
      {
        id: '5',
        title: 'Database Schema',
        description: 'Design and implement database schema for user management',
        assignee: 'David Wilson',
        priority: 'low',
        dueDate: '2024-01-10',
        tags: ['Database', 'Backend']
      }
    ]
  }
];

export const chartData = {
  revenue: [
    { month: 'Jan', value: 4000 },
    { month: 'Feb', value: 3000 },
    { month: 'Mar', value: 5000 },
    { month: 'Apr', value: 4500 },
    { month: 'May', value: 6000 },
    { month: 'Jun', value: 5500 }
  ],
  users: [
    { month: 'Jan', value: 1200 },
    { month: 'Feb', value: 1900 },
    { month: 'Mar', value: 2500 },
    { month: 'Apr', value: 2800 },
    { month: 'May', value: 3200 },
    { month: 'Jun', value: 3800 }
  ],
  performance: [
    { category: 'Sales', value: 85 },
    { category: 'Marketing', value: 72 },
    { category: 'Support', value: 93 },
    { category: 'Development', value: 88 }
  ]
};