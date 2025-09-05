import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Add error handling
window.addEventListener('error', (e) => {
  console.error('Global error:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
  console.error('Unhandled promise rejection:', e.reason);
});

// Check if root element exists
const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error('Root element not found!');
  document.body.innerHTML = '<div style="padding: 20px; font-family: Arial, sans-serif;"><h1>Error: Root element not found</h1><p>Please check the HTML structure.</p></div>';
} else {
  try {
    createRoot(rootElement).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
    console.log('React app rendered successfully');
  } catch (error) {
    console.error('Error rendering React app:', error);
    rootElement.innerHTML = '<div style="padding: 20px; font-family: Arial, sans-serif;"><h1>Error Loading App</h1><p>There was an error loading the portfolio. Please refresh the page.</p></div>';
  }
}
