import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  FormGroup,
} from "reactstrap";

export const ModalInsert = ({
  mostrar,
  hadleChange,
  insertar,
  ocultarForm1,
}) => {
  return (
    <div>
      <Modal isOpen={mostrar}>
        <ModalHeader>
          <div>
            <h3>Crear Cupon</h3>
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
            Crear
          </Button>
          <Button color="danger" onClick={ocultarForm1}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
