import React from 'react';
import { LineChart } from '../components/Charts/LineChart';
import { BarChart } from '../components/Charts/BarChart';
import { chartData } from '../data/mockData';

export const Analytics: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Analytics</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Detailed insights and performance metrics for your business.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LineChart
          data={chartData.revenue}
          title="Monthly Revenue"
          color="rgb(59, 130, 246)"
          height={300}
        />
        <LineChart
          data={chartData.users}
          title="User Acquisition"
          color="rgb(16, 185, 129)"
          height={300}
        />
        <BarChart
          data={chartData.performance}
          title="Team Performance"
          color="rgb(139, 92, 246)"
          height={300}
        />
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Metrics</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Conversion Rate</span>
              <span className="font-semibold text-gray-900 dark:text-white">3.2%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Average Session Duration</span>
              <span className="font-semibold text-gray-900 dark:text-white">4m 32s</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Bounce Rate</span>
              <span className="font-semibold text-gray-900 dark:text-white">42.1%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Customer Satisfaction</span>
              <span className="font-semibold text-gray-900 dark:text-white">4.8/5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};