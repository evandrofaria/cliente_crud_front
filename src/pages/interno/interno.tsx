import React from 'react';
import axios from 'axios';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

interface Usuario {
  idUsuario: number;
  nome: string;
  cpf: string;
  perfil: {
    role: string;
  };
  endereco: {
    id: number,
    cep: string;
    logradouro: string;
    bairro: string;
    cidade: string;
    uf: string;
    complemento: string;
  },
  emails: [ { id: number, email: string } ],
  telefones: [
    { id: number; telefone: string; tipoTelefone: string } ]
}


export default function Interno() {
  const [ user, setUser ] = React.useState<Usuario>();

  React.useEffect(() => {
    axios.get<Usuario>('http://localhost:8080/usuarios/1', {
      auth: {
        username: '12312312387',
        password: '123456'
      }
    }).then((response) => {
      setUser(response.data)
    });
  }, []);

  if (!user) return null;

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
                <div className="font-bold" key={ user.idUsuario }>{ user?.nome }</div>
                <div className="text-sm opacity-50 capitalize">{ user?.perfil.role }</div>
              </div>
            </div>
          </td>
          <td>{ user?.cpf }</td>
          <td>
            { user?.endereco.logradouro } - { user?.endereco.bairro }, { user?.endereco.cidade } - { user?.endereco.uf }, { user?.endereco.cep }
          </td>
          <td>{ user?.telefones[0].telefone }</td>
          <td>{ user?.emails[0].email }</td>

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
  );
}
