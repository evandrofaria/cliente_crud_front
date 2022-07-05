import React, { ReactNode } from 'react';
import './App.css';
import { NavBar } from './components/navbar/navbar';
import { Lista } from './components/lista/lista';
import { Login } from './pages/login/login';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';


function Suspense(props: { fallback: JSX.Element, children: ReactNode }) {
  return null;
}

export function App() {
  return (


    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to={'/login'} />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
