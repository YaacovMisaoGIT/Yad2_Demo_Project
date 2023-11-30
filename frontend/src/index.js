import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);



 

// import { createRoot } from 'react-dom/client';

// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<App tab="home" />);

// // ReactDOM.render(<App />, document.getElementById("root"))

