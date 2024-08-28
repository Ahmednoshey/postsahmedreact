
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './pages/Root.jsx';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import * as serviceworkerRegistration from './serviceWorkerRegistration'
import React from 'react';





const router = createBrowserRouter(
 createRoutesFromElements(
 <Route path="/" element={<Root />}>
  {/* <Route index element={<Home />} />
      <Route path="create" element={<Create />} />
      <Route path="*" element={<Error />} /> */}
 </Route>
)
  );
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
 <React.StrictMode>
  <RouterProvider router={router} />
 </React.StrictMode>
  );
  

  serviceworkerRegistration.register()