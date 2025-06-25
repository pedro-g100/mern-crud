import React, { useEffect, useState } from "react";
import "./user.css";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Erro ao procurar dados:", error);
      }
    };
    fetchData();
  }, []);

  const deleteUser = async (userId) => {
    await axios
      .delete(`http://localhost:8000/api/delete/user/${userId}`)
      .then((response) => {
        setUsers((prevUser) => prevUser.filter((user) => user._id !== userId));
        toast.success(response.data.message, { position: "top-right" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="userTable">
      <Link to="/add" type="button" className="btn btn-primary">
        Adicionar morador <i className="fa-solid fa-user-plus"></i>
      </Link>

      {users.length === 0 ? (
        <div className="noData">
          <h3>Nenhum morador encontrado!</h3>
          <p>Adicione um novo morador para começar</p>
        </div>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Foto</th>
              <th scope="col">Nome</th>
              <th scope="col">Email</th>
              <th scope="col">Endereço</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>
                  {user.image ? (
                    <img
                      src={`http://localhost:8000/uploads/${user.image}`}
                      alt="Foto do morador"
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  ) : (
                    <span style={{ fontStyle: "italic", color: "#aaa" }}>
                      Sem foto
                    </span>
                  )}
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td className="actionButtons">
                  <Link
                    to={`/update/${user._id}`}
                    type="button"
                    className="btn btn-primary"
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Link>
                  <button
                    onClick={() => deleteUser(user._id)}
                    type="button"
                    className="btn btn-danger"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default User;
