import React from 'react';
const MainLayout = () => {
    return (
      <div className="layout bg-gray-100">
        <header className="bg-white shadow">
          <div className="container mx-auto py-4 px-4">
            
            <h1 className="text-2xl font-bold">Seattle</h1>
          </div>
        </header>
        <main className="container mx-auto py-4 px-4">
          <section className="mb-4">
            <p className="text-xl font-poppins mb-2">Overview</p>
          </section>
          <section className="mb-4">
            <h2 className="text-xl font-bold mb-2">Guru</h2>
          </section>
          <section className="mb-4">
            <h2 className="text-xl font-bold mb-2">Siswa</h2>
          </section>
          <section className="mb-4">
            <h2 className="text-xl font-bold mb-2">Rekap</h2>
          </section>
        </main>
      </div>
    );
};
export default MainLayout;