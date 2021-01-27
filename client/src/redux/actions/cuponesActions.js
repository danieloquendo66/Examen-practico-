import axios from "axios";

import {
  OBTENER_CUPONES,
  NUEVO_CUPON,
  EDITAR_CUPON,
  ELIMINAR_CUPON,
} from "../types";

export const obtenerCupones = (key) => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:4000/cupon/");

    switch (key) {
      case "canjeados":
        dispatch({
          type: OBTENER_CUPONES,
          payload: response.data.filter((cupon) => cupon.canjeado === true),
        });
        break;
      case "no canjeados":
        dispatch({
          type: OBTENER_CUPONES,
          payload: response.data.filter((cupon) => cupon.canjeado === false),
        });
        break;

      default:
        dispatch({
          type: OBTENER_CUPONES,
          payload: response.data,
        });
        break;
    }
  } catch (error) {
    console.log(error);
  }
};

export const nuevoCupon = (form) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:4000/cupon/", form);

    dispatch({
      type: NUEVO_CUPON,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const editarCupon = (id, form) => async (dispatch) => {
  try {
    const response = await axios.put(`http://localhost:4000/cupon/${id}`, form);

    dispatch({
      type: EDITAR_CUPON,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const eliminarCupon = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(`http://localhost:4000/cupon/${id}`);

    dispatch({
      type: ELIMINAR_CUPON,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};
