import React, { useState } from "react";
import uniqid from "uniqid";

const Form = () => {
  const [name, setName] = useState("");
  const [register, setRegister] = useState([]);
  const [id, setId] = useState("");
  const [edits, setEdits] = useState(false);
  const [error, setError] = useState("");

  const addRegister = (e) => {
    e.preventDefault();

    if (name.trim()) {
      const user = {
        userName: name,
        id: uniqid(),
      };

      setRegister([...register, user]);
      setName("");
      setEdits(false);
      setError("");
    } else {
      setError("Campo Requerido");
    }
  };

  const deleteRegister = (id) => {
    const newArray = register.filter((item) => item.id !== id);
    setRegister(newArray);
    setName("");
    setEdits(false);
    setError("");
  };

  const editRegister = (item) => {
    setName(item.userName);
    setId(item.id);
    setEdits(true);
    setError("");
  };

  const saveRegisterEdit = (e) => {
    e.preventDefault();

    if (name.trim()) {
      const newArray = register.map((item) =>
        item.id === id ? { userName: name, id: id } : item
      );
      setRegister(newArray);
      setName("");
      setEdits(false);
      setError("");
    } else {
      setError("Campo Requerido");
    }
  };

  return (
    <div className="row">
      <div className="col-12 col-md-6">
        <h2 className="text-center mb-3">Lista de Registros</h2>

        <ul className="list-group">
          {register.map((item) => (
            <li
              key={item.id}
              className="list-group-item d-flex align-items-center"
            >
              <div className="col-6">{item.userName}</div>

              <div className="col-3">
                <button
                  className="btn btn-warning"
                  onClick={() => {
                    editRegister(item);
                  }}
                >
                  Editar
                </button>
              </div>

              <div className="col-3">
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    deleteRegister(item.id);
                  }}
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="col">
        <h2 className="text-center mb-3">Ingreso de Datos</h2>
        <form
          className="form-group"
          onSubmit={edits ? saveRegisterEdit : addRegister}
        >
          <input
            type="text"
            placeholder="Nombre"
            className="form-control mb-3"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          {error !== "" ? (
            <div className="alert alert-danger">{error}</div>
          ) : (
            <div></div>
          )}
          <input
            type="submit"
            className="btn btn-info form-control mb-3 text-white fs-5"
            value={"Guardar Registro"}
          />
        </form>
      </div>
    </div>
  );
};

export default Form;
