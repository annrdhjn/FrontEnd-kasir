"use client"
import React, { SyntheticEvent, use } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from "next/navigation";

type Pelanggan = {
  id: number;
  nama: string;
  email: string;
  no_tlp: string;
  alamat: string;
}
const API_URL = 'http://127.0.0.1:8000/api'
const EditPelanggan = (pelanggan: Pelanggan) => {
  const [modal, setModal] = useState(false);
  const [nama, setNama] = useState(pelanggan.nama);
  const [email, setEmail] = useState(pelanggan.email);
  const [no_tlp, setNo_tlp] = useState(pelanggan.no_tlp);
  const [alamat, setAlamat] = useState(pelanggan.alamat);
  const [isMutating, setIsMutating] = useState(false);
  const router = useRouter();
  const handleChange = () => setModal(!modal);
  const handleUpdate = async (e: SyntheticEvent) => {
    e.preventDefault();
    setIsMutating(true);
    let endpoint = `${API_URL}/pelanggan/${pelanggan.id}`;
    const data = { nama: nama, email: email, no_tlp: no_tlp, alamat: alamat};
    await axios.patch(endpoint, data);
    setNama("");
    setEmail("");
    setNo_tlp("");
    setAlamat("");
    setIsMutating(false);
    router.refresh();
    setModal(false);
  };
  return (
    <div>
      <button className="btn" onClick={handleChange}>
        Edit
      </button>
      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit Pelanggan</h3>
          <form onSubmit={handleUpdate}>
            <div className="form-control">
              <label className="label font-bold">Nama Pelanggan</label>
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Edit Nama"
              />
              <label className="label font-bold">E-mail</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Edit email"
              />
              <label className="label font-bold">Nomor Telepon</label>
              <input
                type="text"
                value={no_tlp}
                onChange={(e) => setNo_tlp(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Edit Nomor Telepon"
              />
              <label className="label font-bold">Alamat</label>
              <input
                type="text"
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Edit Alamat"
              />
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleChange}>
                Close
              </button>
              {!isMutating ? (
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              ) : (
                <button type="button" className="btn loading">
                  Submit loading ...
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPelanggan