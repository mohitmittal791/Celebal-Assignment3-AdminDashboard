import React from 'react';
import { Users, DollarSign, TrendingUp, Activity } from 'lucide-react';
import { MetricCard } from '../components/Dashboard/MetricCard';
import { LineChart } from '../components/Charts/LineChart';
import { BarChart } from '../components/Charts/BarChart';
import { chartData } from '../data/mockData';

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Welcome back, Sarah! 👋
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Here's what's happening with your business today.
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Users"
          value="12,345"
          change="+12.5%"
          trend="up"
          icon={Users}
          color="primary"
        />
        <MetricCard
          title="Revenue"
          value="$45,678"
          change="+8.2%"
          trend="up"
          icon={DollarSign}
          color="success"
        />
        <MetricCard
          title="Growth Rate"
          value="23.4%"
          change="+4.1%"
          trend="up"
          icon={TrendingUp}
          color="secondary"
        />
        <MetricCard
          title="Active Sessions"
          value="1,234"
          change="-2.3%"
          trend="down"
          icon={Activity}
          color="warning"
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LineChart
          data={chartData.revenue}
          title="Revenue Trend"
          color="rgb(59, 130, 246)"
          height={250}
        />
        <LineChart
          data={chartData.users}
          title="User Growth"
          color="rgb(16, 185, 129)"
          height={250}
        />
      </div>

      {/* Performance Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BarChart
          data={chartData.performance}
          title="Department Performance"
          color="rgb(139, 92, 246)"
          height={250}
        />
        
        {/* Recent Activity */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { user: 'Sarah Johnson', action: 'created a new project', time: '2 minutes ago', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2' },
              { user: 'Michael Chen', action: 'completed a task', time: '15 minutes ago', avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2' },
              { user: 'Emily Rodriguez', action: 'uploaded a file', time: '1 hour ago', avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2' },
              { user: 'David Wilson', action: 'left a comment', time: '3 hours ago', avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center gap-3">
                <img
                  src={activity.avatar}
                  alt={activity.user}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900 dark:text-white">
                    <span className="font-medium">{activity.user}</span> {activity.action}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};