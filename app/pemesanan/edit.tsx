"use client"
import React, { SyntheticEvent, use } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from "next/navigation";

type Pemesanan = {
  id: number;
  meja_id: string;
  tgl_pemesanan: string;
  jam_mulai: string;
  jam_selesai: string;
  nama_pemesan: string;
  jml_pelanggan: string;
}
const API_URL = 'http://127.0.0.1:8000/api'
const EditPemesanan = (pemesanan: Pemesanan) => {
  const [modal, setModal] = useState(false);
  const [meja_id, setMeja_id] = useState(pemesanan.meja_id);
  const [tgl_pemesanan, setTgl_pemesanan] = useState(pemesanan.tgl_pemesanan);
  const [jam_mulai, setJam_mulai] = useState(pemesanan.jam_mulai);
  const [jam_selesai, setJam_selesai] = useState(pemesanan.jam_selesai);
  const [nama_pemesan, setNama_pemesan] = useState(pemesanan.nama_pemesan);
  const [jml_pelanggan, setJml_pelanggan] = useState(pemesanan.jml_pelanggan);
  const [isMutating, setIsMutating] = useState(false);
  const router = useRouter();
  const handleChange = () => setModal(!modal);
  const handleUpdate = async (e: SyntheticEvent) => {
    e.preventDefault();
    setIsMutating(true);
    let endpoint = `${API_URL}/pemesanan/${pemesanan.id}`;
    const data = { meja_id: meja_id, tgl_pemesanan: tgl_pemesanan, jam_mulai: jam_mulai, jam_selesai: jam_selesai, nama_pemesan: nama_pemesan, jml_pelanggan: jml_pelanggan};
    await axios.patch(endpoint, data);
    setMeja_id("");
    setTgl_pemesanan("");
    setJam_mulai("");
    setJam_selesai("");
    setNama_pemesan("");
    setJml_pelanggan("");
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
          <h3 className="font-bold text-lg">Edit Pemesanan</h3>
          <form onSubmit={handleUpdate}>
            <div className="form-control">
              <label className="label font-bold">Meja ID</label>
              <input
                type="text"
                value={meja_id}
                onChange={(e) => setMeja_id(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Meja ID"
              />
              <label className="label font-bold">Tanggal Pemesanan</label>
              <input
                type="date"
                value={tgl_pemesanan}
                onChange={(e) => setTgl_pemesanan(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Tanggal Pemesanan"
              />
              <label className="label font-bold">Jam Mulai</label>
              <input
                type="time"
                value={jam_mulai}
                onChange={(e) => setJam_mulai(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Jam Mulai"
              />
              <label className="label font-bold">Jam Selesai</label>
              <input
                type="time"
                value={jam_selesai}
                onChange={(e) => setJam_selesai(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Jam Selesai"
              />
              <label className="label font-bold">Nama Pemesan</label>
              <input
                type="text"
                value={nama_pemesan}
                onChange={(e) => setNama_pemesan(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Nama Pemesan"
              />
              <label className="label font-bold">Jumlah Pelanggan</label>
              <input
                type="text"
                value={jml_pelanggan}
                onChange={(e) => setJml_pelanggan(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Jumlah Pelanggan"
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

export default EditPemesanan