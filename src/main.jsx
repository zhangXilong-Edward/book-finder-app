import React from 'react'
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import './index.css'
import Home from './pages/Home'
import Book from './pages/Book'
import ErrorPage from './pages/Error';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home/>} errorElement={<ErrorPage />}/>
      <Route path=':id' element={<Book />} errorElement={<ErrorPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
