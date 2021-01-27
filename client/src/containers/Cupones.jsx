import React, { useEffect } from "react";
import { Cupon } from "../components";
import { obtenerCupones, editarCupon } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Cupones = () => {
  const dispatch = useDispatch();
  const cupones = useSelector((store) => store.cupones.cupones);
  useEffect(() => {
    dispatch(obtenerCupones());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const editar = (id, form) => {
    dispatch(editarCupon(id, form));
  };
  console.log(cupones);
  return (
    <div className="container mt-5">
      <Link to={"/"} className="btn btn-primary">
        CRUD
      </Link>
      <hr />
      <div className="row">
        {cupones.map((cupon) => (
          <div className="col-3" key={cupon.id}>
            <Cupon
              codigo={cupon.cuponNumero}
              vigencia={cupon.vigencia}
              estado={cupon.canjeado}
              producto={cupon.producto}
              tienda={cupon.establecimiento}
              editar={editar}
              id={cupon.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
