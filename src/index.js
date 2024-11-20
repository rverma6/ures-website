import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import ResearchGroup from './components/ResearchGroup';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResearchGroup />
  </React.StrictMode>
);