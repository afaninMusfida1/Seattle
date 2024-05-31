import React, { useEffect } from 'react';
import { useJurnal } from '../../gurug/crud-jurnal/JurnalProvider';
import { useLayout } from '../../layout/LayoutContext';

import RekapItem from './RekapItem';
import { useRekap } from './RekapProvider';

const RekapKbm = () => {
    const { actionSetPageTitle } = useLayout();
    const { jurnalList, handleFetchJurnal } = useJurnal();
    const { selectedKelas } = useRekap();

    useEffect(() => {
        actionSetPageTitle('Lihat Rekap');
        handleFetchJurnal();
    }, []);

    return (
        <div className="bg-white rounded-[30px] ml-[100px] mt-[50px] mr-[100px] p-8">
            {selectedKelas && (
                <div className="mb-6">
                    <h2 className="text-xl font-bold">Kelas: {selectedKelas.nama_kelas}</h2>
                    <p>Kategori: {selectedKelas.kategori}</p>
                    <p>Periode: {selectedKelas.periode}</p>
                </div>
            )}
            <table aria-rowspan={1} className="text-center table-fixed w-full overflow-hidden">
                <thead className="h-[60px] rounded-xl text-white bg-[#078DCC]">
                    <tr>
                        <th>Tanggal</th>
                        <th>Kelas</th>
                        <th>Pengajar</th>
                        <th>Materi</th>
                    </tr>
                </thead>
                <tbody className="max-h-[300px]">
                    {jurnalList.length > 0 ? (
                        jurnalList.map(jurnal => (
                            <RekapItem
                                key={jurnal.id}
                                id={jurnal.id}
                                kelas_id={jurnal.kelas_id}
                                nama_kelas={jurnal.nama_kelas}
                                guru_id={jurnal.guru_id}
                                nama={jurnal.nama}
                                hasil_belajar={jurnal.hasil_belajar}
                                tanggal={jurnal.tanggal}
                            />
                        ))
                    ) : (
                        <tr>
                            <td colSpan={4} className="text-center border-2">Belum ada jurnal</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default RekapKbm;
