import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Sidebar } from './components/Layout/Sidebar';
import { Header } from './components/Layout/Header';
import { Dashboard } from './pages/Dashboard';
import { Users } from './pages/Users';
import { Analytics } from './pages/Analytics';
import { CalendarPage } from './pages/CalendarPage';
import { KanbanPage } from './pages/KanbanPage';
import { Settings } from './pages/Settings';

const pages = {
  dashboard: Dashboard,
  users: Users,
  analytics: Analytics,
  calendar: CalendarPage,
  kanban: KanbanPage,
  settings: Settings,
};

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  
  const CurrentPageComponent = pages[currentPage as keyof typeof pages];

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <div className="flex h-screen overflow-hidden">
          <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
          
          <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
            <Header />
            
            <main className="flex-1 overflow-y-auto p-4 lg:p-6">
              <div className="max-w-7xl mx-auto">
                <CurrentPageComponent />
              </div>
            </main>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;