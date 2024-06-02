import axios from "axios";
import { http } from "./Url";
import { API_URL } from "./Url";

export const handleLoginAdmin = async (username, password) => {
  return axios.post(`${http}/auth/admin`, {
    username: username,
    password: password,
  })
    .then((response) => {
      console.log("Login response data:", response.data);
      return response.data;
    })
    .catch((error) => {
      console.error("Login failed:", error);
      return error.response?.data ?? { message: "Unknown error" };
    });
};


export const setTokens = (token) => {
  console.log("Setting token:", token);
  localStorage.setItem("adminToken", token);
};

export const getToken = () => {
  const token = localStorage.getItem("adminToken") ?? null;
  return token;
};

export const getTokenGuru = () => {
  const token = localStorage.getItem("guruToken") ?? null;
  return token;
};

export const removeToken = () => {
  console.log("Removing token");
  localStorage.removeItem('adminToken');
};

export const tampilkan = async () => {
  const token = getToken();
  if (!token) {
    console.error("Token not found. Please login again.");
    return { message: "Token not found. Please login again." };
  }

  return axios.get(`${http}/guru`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then((response) => {
      return response.data.data.dataGuru;
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
      return error.response?.data ?? { message: "Unknown error" };
    });
};

// export const addGuru = (nama, email, password) => {
//   const token = localStorage.getItem('adminToken');
//   if (!token) {
//     console.error("Token not found. Please login again.");
//     return Promise.resolve({ success: false, message: "Token not found. Please login again." });
//   }

//   const newGuru = { nama, email, password };

//   return axios.post(`${http}/guru`, newGuru, {
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//   })
//     .then(response => {
//       return response.data;
//     })
//     .catch(error => {
//       console.error("Error adding guru:", error.response ? error.response.data : error.message);
//       return { success: false, message: error.response ? error.response.data.message : error.message };
//     });
// };

export const deleteGuru = async (id) => {
  const token = getToken();
  const deletes = await axios
    .delete(http + "/admin" + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response;
    })
    .catch((eror) => {
      return eror.response;
    });
  return deletes;
};

export const editGuru = async (id, nama, email, password) => {
  const token = getToken();
  const edits = await axios
    .put(
      http + "/guru/2" + id,
      { nama, email, password },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => {
      return response;
    })
    .catch((eror) => {
      return eror.response
    });
  return edits;
};

// export const addKelas = async (nama_kelas, kategori, periode, jadwal_kelas) => {
//   const token = localStorage.getItem('adminToken');

//   if (!token) {
//     console.error("Token not found. Please login again.");
//     return Promise.resolve({ success: false, message: "Token not found. Please login again." });
//   }

//   const newKelas = {nama_kelas, kategori, periode, jadwal_kelas};

//   return axios.post(`${http}/kelas`, newKelas, {
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//   })  
//     .then(response => {
//       return response.data;
//     })
//     .catch(error => {
//       console.error("Error adding guru:", error.response ? error.response.data : error.message);
//       return { success: false, message: error.response ? error.response.data.message : error.message };
//     });
// };

export const handleLoginSiswa= async (email, password) => {
  const token = localStorage.getItem("siswaToken");
  return axios.post(`${http}/auth/siswa`, {
    email: email,
    password: password,
  })
    .then((response) => {
      console.log("Login response data:", response.data);
      return response.data;
    })
    .catch((error) => {
      console.error("Login failed:", error);
      return error.response?.data ?? { message: "Unknown error" };
    });
};

export const handleAddPengumuman = async (title, content) => {
  const token = localStorage.getItem("adminToken");
  if (!token) {
    console.error("Token not found. Please login again.");
    return { message: "Token not found. Please login again." };
  }

  return axios.post(`${http}/pengumuman`, {
    title: title,
    content: content,
  }, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then((response) => {
      console.log("Pengumuman response data:", response.data);
      return response.data;
    })
    .catch((error) => {
      console.error("Pengumuman failed:", error);
      return error.response?.data ?? { message: "Unknown error" };
    });
};

export const fetchPengumuman = async (title, content) => {
  const token = localStorage.getItem("adminToken");
  if (!token) {
    console.error("Token not found. Please login again.");
    return { message: "Token not found. Please login again." };
  }

  const config = {
    params: {
      title: title,
      content: content
    },
    headers: {
      Authorization:` Bearer ${token}`
    }
  };

  return axios.get(`${API_URL}/pengumuman`, config)
    .then(response => response.data)
    .catch(error => {
      console.error("Error fetching announcement: ", error);
      return error.response?.data ?? { message: "Unknown error" };
    });
};