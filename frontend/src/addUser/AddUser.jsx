import React from "react";
import "./adduser.css";
import { Link } from "react-router-dom";

const AddUser = () => {
  return (
    <div className="addUser">

      <Link to="/" className="btn btn-secondary">
        <i class="fa-solid fa-backward"></i> Voltar
      </Link>

      <h3>Adicionar novo usuário</h3>
      <form className="addUserForm">
        <div className="inputGroup">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            placeholder="Insira o nome"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Insira o email"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="address">Endereço:</label>
          <input
            type="text"
            id="address"
            name="address"
            autoComplete="off"
            placeholder="Insira o endereço"
          />
        </div>
        <div className="inputGroup">
            <button type="submit" className="btn btn-primary">
                Salvar
            </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
