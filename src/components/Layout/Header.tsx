import React from 'react';
import { Bell, Search, Sun, Moon, Palette } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export const Header: React.FC = () => {
  const { theme, colorScheme, toggleTheme, setColorScheme } = useTheme();
  const [showColorPicker, setShowColorPicker] = React.useState(false);

  const colorSchemes = [
    { id: 'blue', name: 'Blue', colors: 'from-blue-500 to-blue-600' },
    { id: 'purple', name: 'Purple', colors: 'from-purple-500 to-purple-600' },
    { id: 'emerald', name: 'Emerald', colors: 'from-emerald-500 to-emerald-600' },
    { id: 'amber', name: 'Amber', colors: 'from-amber-500 to-amber-600' },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Search */}
        <div className="flex-1 max-w-lg">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 ml-4">
          {/* Color scheme picker */}
          <div className="relative">
            <button
              onClick={() => setShowColorPicker(!showColorPicker)}
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <Palette size={18} />
            </button>
            
            {showColorPicker && (
              <div className="absolute right-0 top-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-3 z-50">
                <div className="grid grid-cols-2 gap-2">
                  {colorSchemes.map((scheme) => (
                    <button
                      key={scheme.id}
                      onClick={() => {
                        setColorScheme(scheme.id as any);
                        setShowColorPicker(false);
                      }}
                      className={`
                        flex items-center gap-2 px-3 py-2 rounded-lg text-sm
                        ${colorScheme === scheme.id 
                          ? 'bg-gray-100 dark:bg-gray-700' 
                          : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                        }
                      `}
                    >
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${scheme.colors}`} />
                      {scheme.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {/* Notifications */}
          <button className="relative p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
            <Bell size={18} />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>

          {/* User avatar */}
          <div className="flex items-center gap-3 ml-3 pl-3 border-l border-gray-200 dark:border-gray-700">
            <img 
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2"
              alt="User"
              className="w-8 h-8 rounded-full object-cover ring-2 ring-gray-200 dark:ring-gray-700"
            />
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-gray-900 dark:text-white">Sarah Johnson</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Admin</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};