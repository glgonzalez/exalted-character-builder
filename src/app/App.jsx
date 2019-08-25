import React from 'react';
import './App.scss';
import { AppRoutes } from './routes';
import { HistoryProvider } from './history-context';

function App() {
  return (
    <div className="App">
      <HistoryProvider>
        <AppRoutes />
      </HistoryProvider>
    </div>
  );
}

export default App;
