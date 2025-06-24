import React from "react";
import "./user.css";

const User = () => {
  return (
    <div className="userTable">
      <button type="button" className="btn btn-primary">
        Adicionar Usuário <i className="fa-solid fa-user-plus"></i>
      </button>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Usuário teste</td>
            <td>usuarioteste@gmail.com</td>
            <td>Brasil</td>
            <td className="actionButtons">
              <button type="button" className="btn btn-primary">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button type="button" className="btn btn-danger">
                <i class="fa-solid fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default User;
