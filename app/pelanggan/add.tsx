"use client"
import React, { SyntheticEvent, use } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from "next/navigation";


const API_URL = 'http://127.0.0.1:8000/api'
const AddPelanggan = () => {
  const [modal, setModal] = useState(false);
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [no_tlp, setNo_tlp] = useState('');
  const [alamat, setAlamat] = useState('');
  const [isMutating, setIsMutating] = useState(false)
  const router = useRouter()
  const handleChange = () => setModal(!modal)
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()
    setIsMutating(true)
    let endpoint = `${API_URL}/pelanggan`
    const data = { nama: nama, email: email, no_tlp: no_tlp, alamat: alamat};
    await axios.post(endpoint, data);
    setNama("");
    setEmail("");
    setNo_tlp("");
    setAlamat("");
    setIsMutating(false);
    router.refresh()
    setModal(false)
  }
  return (
    <div>
      <button className="btn" onClick={handleChange}>
        Add New
      </button>
      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add New Data Pelanggan</h3>
          <form onSubmit={handleSubmit}>
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
}

export default AddPelanggan