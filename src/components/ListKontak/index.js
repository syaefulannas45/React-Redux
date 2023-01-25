import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListKontak, deleteKontak } from "../../actions/kontakAction";

function ListKontak() {
  const { getListKontakResult, getListKontakLoading, getListKontakError, deleteKontakResult } = useSelector((state) => state.KontakReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    //get action getListKontak
    console.log("useeffect");
    dispatch(getListKontak());
  }, [dispatch]);
  useEffect(() => {
    if (deleteKontakResult) {
      dispatch(getListKontak());
    }
  }, [deleteKontakResult, dispatch]);
  return (
    <div>
      ListKontak
      {getListKontakResult ? (
        getListKontakResult.map((kontak, index) => (
          <ul key={index}>
            <li>{kontak.nama}</li>
            <li>{kontak.Nohp}</li>
            <button onClick={() => dispatch(deleteKontak(kontak.id))}>hapus</button>
          </ul>
        ))
      ) : getListKontakLoading ? (
        <p>Loading...</p>
      ) : (
        <p>{getListKontakError ? getListKontakError : "data kosong"}</p>
      )}
    </div>
  );
}

export default ListKontak;
