import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

interface TituloNavBar {
  titulo: string;
}

export function NavBar({ titulo }: TituloNavBar) {
  return (
    <div className="navbar bg-primary">
      <div className="flex-1 justify-center">
        <a className="pl-6 flex justify-center align-middle text-white font-bold text-xl"> { titulo } </a>
      </div>
      <div className="flex-none mr-1.5">
        <NavLink to="/login" className="btn btn-link hover:btn-error">
          <FiLogOut size={ 20 } className={ 'text-white' }/>
        </NavLink>
      </div>
    </div>
  );
}










