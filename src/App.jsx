import React, { useState, useEffect } from 'react';
import './App.css'; 

const App = () => {
  
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="App">
      <h1>Hello world</h1>
      <p>Click this button to change your theme.</p>
      <button onClick={toggleTheme}>Click me</button>
    </div>
  );
};

export default App;
