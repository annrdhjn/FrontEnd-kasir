import React from 'react'
import Link from "next/link";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/category">Category</Link>
        </li>
        <li>
          <Link href="/jenis">Jenis Makanan</Link>
        </li>
        <li>
          <Link href="/menu">Menu Makanan</Link>
        </li>
        <li>
          <Link href="/stok">Stok Makanan</Link>
        </li>
        <li>
          <Link href="/pelanggan">Pelanggan</Link>
        </li>
      </ul>

      {children}
    </div>
  );
};

export default MainLayout

// rafce