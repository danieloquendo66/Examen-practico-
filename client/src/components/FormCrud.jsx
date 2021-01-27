import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  obtenerCupones,
  nuevoCupon,
  editarCupon,
  eliminarCupon,
} from "../redux/actions";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  FormGroup,
} from "reactstrap";

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
    dispatch(nuevoCupon(form));
    ocultarForm1();
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
              Insertar nuevo Cupon
            </Button>
          </div>
        </div>

        <br />
        <br />

        <Table className="border border-dark">
          <thead>
            <tr>
              <th>id</th>
              <th>Cupon</th>
              <th>Vigencia</th>
              <th>Establesimiento</th>
              <th>Producto</th>
              <th>Canjeado</th>

              <th>Accciones</th>
            </tr>
          </thead>

          <tbody>
            {cupones.map((cupon) => (
              <tr key={cupon.id}>
                <td>{cupon.id}</td>
                <td>{cupon.cuponNumero}</td>
                <td>{cupon.vigencia}</td>
                <td>{cupon.establecimiento}</td>
                <td>{cupon.producto}</td>
                <td>{cupon.canjeado ? "true" : "false"}</td>

                <td>
                  <Button color="primary" onClick={() => mostrarForm2(cupon)}>
                    Editar
                  </Button>
                  {"   "}
                  <Button color="danger" onClick={() => eliminar(cupon.id)}>
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      <Modal isOpen={mostrar}>
        <ModalHeader>
          <div>
            <h3>Insertar Cupon</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Vigencia:</label>

            <input
              type="date"
              className="form-control"
              name="vigencia"
              onChange={hadleChange}
            />
          </FormGroup>
          <hr />

          <FormGroup>
            <label>Establesimiento:</label>

            <input
              type="text"
              className="form-control"
              name="establecimiento"
              onChange={hadleChange}
            />
          </FormGroup>
          <hr />
          <FormGroup>
            <label>Producto:</label>

            <input
              type="text"
              className="form-control"
              name="producto"
              onChange={hadleChange}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="success" onClick={() => insertar()}>
            Aceptar
          </Button>
          <Button color="danger" onClick={ocultarForm1}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={mostrar2}>
        <ModalHeader>
          <div>
            <h3>Editar Cupon</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Vigencia:</label>

            <input
              type="text"
              className="form-control"
              name="id"
              value={form.id}
              onChange={hadleChange}
              // value={form.vigencia}
            />
          </FormGroup>

          <hr />

          <FormGroup>
            <label>Vigencia:</label>

            <input
              type="date"
              className="form-control"
              name="vigencia"
              onChange={hadleChange}
              // value={form.vigencia}
            />
          </FormGroup>
          <hr />

          <FormGroup>
            <label>Establecimiento:</label>

            <input
              type="text"
              className="form-control"
              name="establecimiento"
              onChange={hadleChange}
              value={form.establecimiento}
            />
          </FormGroup>
          <hr />
          <FormGroup>
            <label>Producto:</label>

            <input
              type="text"
              className="form-control"
              name="producto"
              onChange={hadleChange}
              value={form.producto}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="success" onClick={editar}>
            Aceptar
          </Button>
          <Button color="danger" onClick={ocultarForm2}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
