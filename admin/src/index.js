import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginPage from './pages/LoginPage/LoginPage';


const router = createBrowserRouter([
  {
    path: "/",
    action: () => {
      console.log("hello world!!!")
    }
  },
  {
    path: "/dashboard",
    element: <LoginPage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
],
//{
  //basename: "/dashboard"
//}
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
