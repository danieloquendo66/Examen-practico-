import React from "react";
import { Table, Button } from "reactstrap";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

export const TableCrud = ({ cupones, mostrarForm2, eliminar }) => {
  return (
    <div>
      <Table hover bordered className="border border-dark" id="table">
        <thead>
          <tr>
            <th scope="row">id</th>
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
              <td>{cupon.canjeado ? "Si" : "No"}</td>

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

      <ReactHTMLTableToExcel
        table="table"
        className="btn btn-success"
        id="name"
        filename="Cupones-Exel"
        sheet="page 1"
        buttonText="Exportar a exel"
      />
    </div>
  );
};
