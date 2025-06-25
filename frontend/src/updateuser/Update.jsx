import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateUser = () => {
  const users = {
    name: "",
    email: "",
    address: "",
  };
  const [user, setUser] = useState(users);
  const navigate = useNavigate();
  const { id } = useParams();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    axios.get(`http://localhost:8000/api/user/${id}`)
    .then((response) => {
      setUser(response.data);
    })
    .catch((error) => {
        console.log(error);
    });
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
    .put(`http://localhost:8000/api/update/user/${id}`, user)
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

      <h3>Editar morador</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            value={user.name}
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
            value={user.email}
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
            value={user.address}
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

export default UpdateUser;