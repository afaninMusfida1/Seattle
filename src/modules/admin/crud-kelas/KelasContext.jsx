import { createContext, useState } from "react";
import axios from "axios";
import { http } from '../../config/Url';

const KelasContext = createContext();

export const KelasProvider = ({ children }) => {
    const [kelasItem, setKelasItem] = useState([]);

    const handleDelete = (id) => {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            console.error("Token not found. Please login again.");
            return;
        }

        axios.delete(`${http}/kelas/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(() => {
            setKelasItem()
        })
    }
}