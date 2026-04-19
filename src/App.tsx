import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

import ForgotPassword from './components/ForgotPassword';

type ViewState = 'login' | 'dashboard' | 'forgot_password';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('login');

  if (currentView === 'login') {
    return (
      <Login 
        onLogin={() => setCurrentView('dashboard')} 
        onForgotPassword={() => setCurrentView('forgot_password')}
      />
    );
  }

  if (currentView === 'forgot_password') {
    return <ForgotPassword onBackToLogin={() => setCurrentView('login')} />;
  }

  return <Dashboard onLogout={() => setCurrentView('login')} />;
}
