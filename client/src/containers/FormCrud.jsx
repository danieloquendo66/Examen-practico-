import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TableCrud, ModalEditar, ModalInsert } from "../components";
import { Link } from "react-router-dom";

import {
  obtenerCupones,
  nuevoCupon,
  editarCupon,
  eliminarCupon,
} from "../redux/actions";
import { Button, Container } from "reactstrap";

export function FormCrud() {
  const dispatch = useDispatch();
  const cupones = useSelector((store) => store.cupones.cupones);

  const [mostrar, setMostrar] = useState(false);
  const [mostrar2, setMostrar2] = useState(false);

  const [form, setForm] = useState({
    id: null,
    vigencia: "",
    establecimiento: "",
    producto: "",
  });

  const mostrarForm1 = () => {
    setMostrar(true);
  };
  const ocultarForm1 = () => {
    setMostrar(false);
    setForm({
      vigencia: "",
      establecimiento: "",
      producto: "",
    });
  };
  const mostrarForm2 = (form) => {
    setForm(form);
    setMostrar2(true);
  };
  const ocultarForm2 = () => {
    setMostrar2(false);
    setForm({
      vigencia: "",
      establecimiento: "",
      producto: "",
    });
  };

  const hadleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const insertar = () => {
    const { establecimiento, producto, vigencia } = form;
    if (
      establecimiento.trim() === "" ||
      establecimiento.trim().length < 3 ||
      producto.trim() === "" ||
      producto.trim().length < 3
    ) {
      alert(
        "Todos los campos son obligatorios y deben tener almenos 3 caracteres "
      );
      return;
    } else if (vigencia.trim() === "") {
      alert("Introdusca una fecha");
    } else {
      dispatch(nuevoCupon(form));
      ocultarForm1();
    }
  };
  const editar = () => {
    dispatch(editarCupon(form.id, form));
    ocultarForm2();
  };
  const eliminar = (id) => {
    dispatch(eliminarCupon(id));
  };

  useEffect(() => {
    dispatch(obtenerCupones());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container className="prueva ">
        <br />
        <div className="row ">
          <div className="col-12 mt-2 d-flex  justify-content-center">
            <Button color="success" onClick={mostrarForm1}>
              Crear nuevo Cupon
            </Button>
          </div>
        </div>

        <hr />

        <div className="row ">
          <div className="col-4 d-flex justify-content-center">
            <Button
              color="warning"
              onClick={() => dispatch(obtenerCupones("no canjeados"))}
            >
              Cupones sin Canjear
            </Button>
          </div>

          <div className="col-4 d-flex justify-content-center">
            <Button color="warning" onClick={() => dispatch(obtenerCupones())}>
              Todos los cupones
            </Button>
          </div>

          <div className="col-4 d-flex justify-content-center">
            <Button
              color="warning"
              onClick={() => dispatch(obtenerCupones("canjeados"))}
            >
              Cupones Canjeados
            </Button>
          </div>
        </div>

        <br />
        <br />

        <TableCrud
          cupones={cupones}
          mostrarForm2={mostrarForm2}
          eliminar={eliminar}
        />
      </Container>

      <Link to={"/cupones"} className="btn btn-primary m-5">
        Cupones
      </Link>

      {/*Modals */}
      <ModalInsert
        mostrar={mostrar}
        hadleChange={hadleChange}
        insertar={insertar}
        ocultarForm1={ocultarForm1}
      />
      <ModalEditar
        mostrar2={mostrar2}
        hadleChange={hadleChange}
        form={form}
        editar={editar}
        ocultarForm2={ocultarForm2}
      />
    </>
  );
}
