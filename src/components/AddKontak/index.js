import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addKontak, getListKontak } from "../../actions/kontakAction";

const AddKontak = () => {
  const [nama, setNama] = useState("");
  const [Nohp, setNohp] = useState("");

  const { addKontakResult } = useSelector((state) => state.KontakReducer);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addKontak({ nama: nama, Nohp: Nohp }));
  };

  useEffect(() => {
    if (addKontakResult) {
      dispatch(getListKontak());
    }
    setNama("");
    setNohp("");
  }, [addKontakResult, getListKontak]);
  return (
    <div>
      <h4>Add Kontak</h4>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="nama" placeholder="Nama .." value={nama} onChange={(e) => setNama(e.target.value)} />
        <br />
        <input type="text" name="Nohp" placeholder="No hp .." value={Nohp} onChange={(e) => setNohp(e.target.value)} /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddKontak;
