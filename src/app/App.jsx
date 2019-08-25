import React from 'react';
import './App.scss';
import { AppRoutes } from './routes';
import { HistoryProvider } from './history-context';
import { UserProvider } from './user';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <HistoryProvider>
          <AppRoutes />
        </HistoryProvider>
      </UserProvider>
    </div>
  );
}

export default App;
