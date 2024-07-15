import { useEffect } from 'react';
import './App.css'
import { ChatsInterface } from './component/ChatsInterface'
import { useTheme } from './context/ThemeProvider';

function App() {
  const { theme, animating } = useTheme();

  useEffect(() => {
    document.body.className = `${theme} ${animating ? "animating" : ""}`;
  }, [theme]);

  return (
    <div className='App' style={{ display: "flex", flexDirection: "row" }}>
      <ChatsInterface />
    </div>
  );
}

export default App
