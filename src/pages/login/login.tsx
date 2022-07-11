import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Login() {
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-primary underline">
          Entre usando seu CPF
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Usuário
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Senha
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6">
            <NavLink to="/interno"
                     className="w-full flex justify-center px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-secondary rounded-md hover:bg-primary focus:outline-none focus:bg-primary">
              Entrar
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  )
}
