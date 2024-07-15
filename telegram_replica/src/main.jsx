import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ChakraProvider} from '@chakra-ui/react'
import { ThemeProvider } from './context/ThemeProvider.jsx'
ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </ChakraProvider>
);
