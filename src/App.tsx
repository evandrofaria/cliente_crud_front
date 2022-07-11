import React, { ReactNode } from 'react';
import './App.css';
import { NavBar } from './components/navbar/navbar';
import { EditarDados } from './components/editar-dados/editar';
import Interno from './pages/interno/interno';
import Login from './pages/login/login';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';


function Suspense(props: { fallback: JSX.Element, children: ReactNode }) {
  return null;
}

export function App() {
  return (


    <BrowserRouter>
      <div>
        <NavBar titulo={ '' }/>
        <Routes>
          <Route path="/" element={ <Navigate to={ '/login' }/> }/>
          <Route path="/login" element={ <Login /> }/>
          <Route path="/interno" element={ <Interno /> }/>
          <Route path="/editar-dados" element={ <EditarDados /> }/>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
