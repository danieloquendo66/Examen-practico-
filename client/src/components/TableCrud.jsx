import React from "react";
import { Table, Button } from "reactstrap";

export const TableCrud = ({ cupones, mostrarForm2, eliminar }) => {
  return (
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
  );
};
