import {
  OBTENER_CUPONES,
  NUEVO_CUPON,
  EDITAR_CUPON,
  ELIMINAR_CUPON,
} from "../types";

const initialState = {
  cupones: [],
};

export const cuponesReducer = (state = initialState, action) => {
  switch (action.type) {
    case OBTENER_CUPONES:
      return {
        ...state,
        cupones: action.payload,
      };
    case NUEVO_CUPON:
      return {
        ...state,
        cupones: state.cupones.concat(action.payload),
      };
    case EDITAR_CUPON:
      return {
        ...state,
        cupones: state.cupones.map((cupon) => {
          if (cupon.id === action.payload.id) {
            return { ...action.payload };
          } else {
            return cupon;
          }
        }),
      };
    case ELIMINAR_CUPON:
      return {
        ...state,
        cupones: state.cupones.filter((cupon) => cupon.id !== action.payload),
      };

    default:
      return state;
  }
};
