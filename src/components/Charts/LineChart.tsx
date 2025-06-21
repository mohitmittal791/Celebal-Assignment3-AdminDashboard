import React from 'react';

interface DataPoint {
  month: string;
  value: number;
}

interface LineChartProps {
  data: DataPoint[];
  title: string;
  color?: string;
  height?: number;
}

export const LineChart: React.FC<LineChartProps> = ({ 
  data, 
  title, 
  color = 'currentColor',
  height = 200 
}) => {
  const maxValue = Math.max(...data.map(d => d.value));
  const minValue = Math.min(...data.map(d => d.value));
  const valueRange = maxValue - minValue;
  
  const padding = 40;
  const chartWidth = 400;
  const chartHeight = height;
  
  const stepX = (chartWidth - padding * 2) / (data.length - 1);
  
  const getY = (value: number) => {
    const normalized = (value - minValue) / valueRange;
    return chartHeight - padding - (normalized * (chartHeight - padding * 2));
  };
  
  const pathData = data.map((point, index) => {
    const x = padding + index * stepX;
    const y = getY(point.value);
    return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ');

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
          <linearGradient id={`gradient-${title}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={color} stopOpacity="0.05" />
          </linearGradient>
        </defs>
        
        {/* Area under line */}
        <path
          d={`${pathData} L ${padding + (data.length - 1) * stepX} ${chartHeight - padding} L ${padding} ${chartHeight - padding} Z`}
          fill={`url(#gradient-${title})`}
        />
        
        {/* Line */}
        <path
          d={pathData}
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="drop-shadow-sm"
        />
        
        {/* Data points */}
        {data.map((point, index) => {
          const x = padding + index * stepX;
          const y = getY(point.value);
          return (
            <g key={index}>
              <circle
                cx={x}
                cy={y}
                r="4"
                fill="white"
                stroke={color}
                strokeWidth="3"
                className="drop-shadow-sm"
              />
              {/* Tooltip on hover */}
              <circle
                cx={x}
                cy={y}
                r="12"
                fill="transparent"
                className="cursor-pointer hover:fill-gray-100 hover:fill-opacity-20"
              >
                <title>{`${point.month}: ${point.value.toLocaleString()}`}</title>
              </circle>
            </g>
          );
        })}
        
        {/* X-axis labels */}
        {data.map((point, index) => {
          const x = padding + index * stepX;
          return (
            <text
              key={index}
              x={x}
              y={chartHeight - 10}
              textAnchor="middle"
              className="text-xs fill-gray-500 dark:fill-gray-400"
            >
              {point.month}
            </text>
          );
        })}
      </svg>
    </div>
  );
};