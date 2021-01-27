import React from "react";

export const Cupon = ({
  codigo,
  vigencia,
  estado,
  producto,
  tienda,
  id,
  editar,
}) => {
  return (
    <div className="card border border-primary">
      <div className="card-body">
        <h4 className="card-title text-center">Cupon de descuento</h4>
        <div className="row">
          <div className="col-12">
            <p className="card-text">Codigo: {codigo}</p>
            <p className="card-text">Vigencia: {vigencia}</p>
            <p className="card-text">
              Estado: {!estado ? "Sin consumir" : "Consumido"}
            </p>
            <p className="card-text">Producto: {producto}</p>
            <p className="card-text">Tienda: {tienda}</p>
          </div>
        </div>
        <hr />
        {!estado ? (
          <button
            className="btn btn-danger"
            onClick={() => editar(id, { canjeado: true })}
          >
            Consumir
          </button>
        ) : null}
      </div>
    </div>
  );
};
