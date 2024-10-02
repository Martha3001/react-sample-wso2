import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Welcome from './Welcome';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Routes>
          <Route path="/" element={
            <>
              <h1>{isLoggedIn ? 'Redirecting...' : 'Please Log In'}</h1>
              {!isLoggedIn ? (
                <button onClick={handleLogin}>Login</button>
              ) : (
                <Navigate to="/welcome" />
              )}
            </>
          } />
          <Route path="/welcome" element={
            isLoggedIn ? (
              <Welcome onLogout={handleLogout} />
            ) : (
              <Navigate to="/" />
            )
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
