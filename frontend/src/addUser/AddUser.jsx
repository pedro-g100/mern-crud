import React, { useState } from "react";
import "./adduser.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const AddUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", user.name);
    formData.append("email", user.email);
    formData.append("address", user.address);
    if (image) {
      formData.append("image", image);
    }

    await axios
      .post("http://localhost:8000/api/user", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        toast.success(response.data.message, { position: "bottom-right" });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Erro ao adicionar morador", { position: "bottom-right" });
      });
  };

  return (
    <div className="addUser">
      <Link to="/" className="btn btn-secondary">
        <i className="fa-solid fa-backward"></i> Voltar
      </Link>

      <h3>Adicionar novo morador</h3>
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
          <label htmlFor="image">Foto do morador:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
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
