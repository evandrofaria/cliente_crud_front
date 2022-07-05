import React from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

export const Lista = () => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
        <tr>
          <th>
          </th>
          <th>Nome</th>
          <th>CPF</th>
          <th>Endereço</th>
          <th>Telefone</th>
          <th>E-mail</th>
          <th>Editar/Excluir</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th>
          </th>
          <td>
            <div className="flex items-center space-x-3">
              <div>
                <div className="font-bold">Evandro Faria</div>
                <div className="text-sm opacity-50">Administrador</div>
              </div>
            </div>
          </td>
          <td>123.123.123-87</td>
          <td>CLN 107, Bloco B, Lojas 15 e 21 - Asa Norte, Brasília - DF, 70743-520</td>
          <td>(61) 99272-6341</td>
          <td>teste@gmail.com</td>
          <th>
            <button className="p-0 btn btn-link">
              <FiEdit size={ 20 } className="text-info"/>
            </button>

            <button className="ml-5 p-0 btn btn-link">
              <FiTrash2 size={ 20 } className="text-info"/>
            </button>
          </th>
        </tr>
        </tbody>
      </table>
    </div>
  )
}
