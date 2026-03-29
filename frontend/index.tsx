import './vertex-ai-proxy-interceptor.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import App from './App';
import SignInPage from './SignInPage';
import FlowPage from './FlowPage';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

function RootLayout() {
  return <Outlet />;
}

const basename =
  import.meta.env.BASE_URL.replace(/\/$/, '') || undefined;

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <App /> },
        { path: 'flow', element: <FlowPage /> },
        { path: 'login', element: <SignInPage /> },
        { path: 'sign-in', element: <SignInPage /> },
      ],
    },
  ],
  { basename }
);

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
