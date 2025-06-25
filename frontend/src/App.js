import AddUser from "./addUser/AddUser";
import "./App.css";
import User from "./getUser/User";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Update from "./updateuser/Update";
import { useEffect, useState } from "react";

function App() {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    setShowWelcome(true);
  }, []);

  const route = createBrowserRouter([
    {
      path: "/",
      element: <User />,
    },
    {
      path: "/add",
      element: <AddUser />,
    },
    {
      path: "/update/:id",
      element: <Update />,
    },
  ]);

  return (
    <div className="App">
      {showWelcome && (
        <div className="overlayStyle">
          <div className="modalStyle">
            <h2>Bem‑vindo, administrador!</h2>
            <p>Este é um sistema de cadastro de moradores do edifício Uberlândia Tower! Sua função é administrar os moradores.</p>
            <button onClick={() => setShowWelcome(false)}>Fechar</button>
          </div>
        </div>
      )}

      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
