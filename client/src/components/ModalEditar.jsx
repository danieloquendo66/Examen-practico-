import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  FormGroup,
} from "reactstrap";

export const ModalEditar = ({
  mostrar2,
  hadleChange,
  form,
  editar,
  ocultarForm2,
}) => {
  return (
    <div>
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
    </div>
  );
};
