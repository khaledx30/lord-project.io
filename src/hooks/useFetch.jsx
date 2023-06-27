import { useState, useEffect } from "react";

export default function useFetch(selection) {
  const [data, setData] = useState(null);
  const [loding, setLoding] = useState(false);
  const [error, setError] = useState(null);

  const apiUrl = "https://the-one-api.dev/v2";

  const API_TOKEN = import.meta.env.VITE_API_KEY;
  // headers new stuffd
  let options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  };

  useEffect(() => {
    async function fetchData() {
      if (!selection) {
        return;
      }

      setLoding(true);
      const url = `${apiUrl}/${selection}`;

      try {
        const res = await fetch(url, options);
        const jsonData = await res.json();
        setData(jsonData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoding(false);
      }
    }
    fetchData();
  }, [selection]);
  return { data, loding, error };
}
