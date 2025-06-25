import React, { useState } from "react";
import "./adduser.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const AddUser = () => {
  const users = {
    name: "",
    email: "",
    address: "",
  };
  const [user, setUser] = useState(users);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/api/user",user)
    .then((response)=>{
      toast.success(response.data.message,{position: "bottom-right"});
      navigate("/");
    })
    .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="addUser">
      <Link to="/" className="btn btn-secondary">
        <i class="fa-solid fa-backward"></i> Voltar
      </Link>

      <h3>Adicionar novo usuário</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            onChange={inputHandler}
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
            onChange={inputHandler}
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
            onChange={inputHandler}
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