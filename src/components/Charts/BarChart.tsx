import React from 'react';

interface DataPoint {
  category: string;
  value: number;
}

interface BarChartProps {
  data: DataPoint[];
  title: string;
  color?: string;
  height?: number;
}

export const BarChart: React.FC<BarChartProps> = ({ 
  data, 
  title, 
  color = 'currentColor',
  height = 200 
}) => {
  const maxValue = Math.max(...data.map(d => d.value));
  
  const padding = 40;
  const chartWidth = 400;
  const chartHeight = height;
  
  const barWidth = (chartWidth - padding * 2) / data.length * 0.7;
  const barSpacing = (chartWidth - padding * 2) / data.length;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
      
      <svg width={chartWidth} height={chartHeight} className="w-full h-auto">
        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((ratio, index) => {
          const y = padding + ratio * (chartHeight - padding * 2);
          return (
            <line
              key={index}
              x1={padding}
              y1={y}
              x2={chartWidth - padding}
              y2={y}
              stroke="currentColor"
              strokeOpacity="0.1"
              className="text-gray-400"
            />
          );
        })}
        
        {/* Gradient definition */}
        <defs>
          <linearGradient id={`bar-gradient-${title}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.9" />
            <stop offset="100%" stopColor={color} stopOpacity="0.6" />
          </linearGradient>
        </defs>
        
        {/* Bars */}
        {data.map((point, index) => {
          const x = padding + index * barSpacing + (barSpacing - barWidth) / 2;
          const barHeight = (point.value / maxValue) * (chartHeight - padding * 2);
          const y = chartHeight - padding - barHeight;
          
          return (
            <g key={index}>
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                fill={`url(#bar-gradient-${title})`}
                rx="4"
                className="cursor-pointer hover:opacity-80 transition-opacity"
              >
                <title>{`${point.category}: ${point.value}%`}</title>
              </rect>
              
              {/* Value labels */}
              <text
                x={x + barWidth / 2}
                y={y - 8}
                textAnchor="middle"
                className="text-xs font-medium fill-gray-700 dark:fill-gray-300"
              >
                {point.value}%
              </text>
            </g>
          );
        })}
        
        {/* X-axis labels */}
        {data.map((point, index) => {
          const x = padding + index * barSpacing + barSpacing / 2;
          return (
            <text
              key={index}
              x={x}
              y={chartHeight - 10}
              textAnchor="middle"
              className="text-xs fill-gray-500 dark:fill-gray-400"
            >
              {point.category}
            </text>
          );
        })}
      </svg>
    </div>
  );
};