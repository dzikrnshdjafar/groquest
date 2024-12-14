const API_URL = import.meta.env.VITE_API_URL

export const reqToGroq = async (content) => {
    try {
      const response = await fetch(`${API_URL}/api/groq`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }),
      });
  
      if (!response.ok) {
        throw new Error("Gagal mendapatkan respons dari server");
      }
  
      const data = await response.json();
      return data.message; // Mengambil pesan dari server
    } catch (error) {
      console.error("Error saat menghubungi server:", error);
      throw error;
    }
  };
  