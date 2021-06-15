import { React, useState, useEffect } from 'react';

const DarkMode = () => {
  // Dark Mode and saving it on the Browser :)
  const getTheme = () => {
    return JSON.parse(localStorage.getItem('theme')) || false;
  };
  const [theme, setTheme] = useState(getTheme());
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);
  return (
    <div>
      <input
        type='checkbox'
        onChange={() => setTheme(!theme)}
        checked={theme ? 'true' : ''}
      />
    </div>
  );
};

export default DarkMode;
