import { GET_LIST_KONTAK, ADD_KONTAK, DELETE_KONTAK } from "../../actions/kontakAction";

const initialState = {
  getListKontakResult: false,
  getListKontakLoading: false,
  getListKontakError: false,

  addKontakResult: false,
  addKontakLoading: false,
  addKontakError: false,

  deleteKontakResult: false,
  deleteKontakLoading: false,
  deleteKontakError: false,
};
const kontak = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_KONTAK:
      console.log("masuk reducer", action);
      return { ...state, getListKontakResult: action.payload.data, getListKontakLoading: action.payload.loading, getListKontakError: action.payload.error };

    case ADD_KONTAK:
      console.log("masuk reducer", action);
      return { ...state, addKontakResult: action.payload.data, addKontakLoading: action.payload.loading, addKontakError: action.payload.error };

    case DELETE_KONTAK:
      console.log("masuk reducer", action);
      return { ...state, deleteKontakResult: action.payload.data, deleteKontakLoading: action.payload.loading, deleteKontakError: action.payload.error };

    default:
      return state;
  }
};

export default kontak;
