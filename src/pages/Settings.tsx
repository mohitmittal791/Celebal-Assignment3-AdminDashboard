import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

export const Settings: React.FC = () => {
  const { theme, colorScheme, toggleTheme, setColorScheme } = useTheme();

  const colorSchemes = [
    { id: 'blue', name: 'Ocean Blue', description: 'Professional and trustworthy' },
    { id: 'purple', name: 'Royal Purple', description: 'Creative and sophisticated' },
    { id: 'emerald', name: 'Forest Emerald', description: 'Natural and balanced' },
    { id: 'amber', name: 'Sunset Amber', description: 'Warm and energetic' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Settings</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Customize your dashboard experience and preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Theme Settings */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Theme Settings</h3>
          
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                Color Mode
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={toggleTheme}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    theme === 'light'
                      ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300'
                      : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  Light
                </button>
                <button
                  onClick={toggleTheme}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    theme === 'dark'
                      ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300'
                      : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  Dark
                </button>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 block">
                Color Scheme
              </label>
              <div className="grid grid-cols-1 gap-3">
                {colorSchemes.map((scheme) => (
                  <div
                    key={scheme.id}
                    onClick={() => setColorScheme(scheme.id as any)}
                    className={`p-3 rounded-lg border cursor-pointer transition-all ${
                      colorScheme === scheme.id
                        ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full ${
                        scheme.id === 'blue' ? 'bg-blue-500' :
                        scheme.id === 'purple' ? 'bg-purple-500' :
                        scheme.id === 'emerald' ? 'bg-emerald-500' :
                        'bg-amber-500'
                      }`} />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{scheme.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{scheme.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Account Settings */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Account Settings</h3>
          
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">
                Full Name
              </label>
              <input
                type="text"
                defaultValue="Sarah Johnson"
                className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">
                Email Address
              </label>
              <input
                type="email"
                defaultValue="sarah.johnson@company.com"
                className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">
                Role
              </label>
              <select className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                <option>Admin</option>
                <option>Manager</option>
                <option>Developer</option>
                <option>Designer</option>
              </select>
            </div>

            <div className="pt-4">
              <button className="w-full px-4 py-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};