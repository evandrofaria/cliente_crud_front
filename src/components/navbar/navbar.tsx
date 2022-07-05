import React from 'react';
import { FiLogOut } from 'react-icons/fi';

export const NavBar = () => {
  return (
    <div className="navbar bg-primary">
      <div className="flex-1 justify-center">
        <a className="pl-6 flex justify-center align-middle text-white font-bold text-xl">Usuários</a>
      </div>
      <div className="flex-none mr-1.5">
        <button className="btn btn-link hover:btn-error">
          <FiLogOut size={ 20 } className={ 'text-white' }/>
        </button>
      </div>
    </div>
  )
};
