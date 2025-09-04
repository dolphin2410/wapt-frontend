import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import MainPage from "./components/MainPage";
import Processing from "./components/Processing";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HowToUse from './components/HowToUse';
import Printer from './components/Printer';
import User from './components/User';
import SuJeBi from './components/SuJeBi';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <App child={<MainPage />} />
    )
  },
  {
    path: '/processing',
    element: (
      <App child={<Processing />} />
    )
  },
  {
    path: '/printer',
    element: (
      <App child={<Printer />} />
    )
  },
  {
    path: '/user',
    element: (
      <App child={<User />} />
    )
  },
  {
    path: '/usage',
    element: (
      <App child={<HowToUse />} />
    )
  },
  {
    path: '/sujebi',
    element: (
      <App child={<SuJeBi />}/>
    )
  }
])

const root = ReactDOM.createRoot(document.getElementById('root')!!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
