import React from "react";
import { useState, useEffect } from "react";

export default function useFetch(selection) {
  const [data, setData] = useState(null);
  const [loding, setLoding] = useState(false);
  const [error, setError] = useState(null);

  const apiUrl = "https://the-one-api.dev/v2";

  const apiToken = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    async function fetchData() {
      if (!selection) {
        return;
      }
      const url = `${apiUrl}/book`;
      try {
        const res = await fetch(url);
        const jsonData = await res.json();
        console.log("Data:", jsonData);
        setData(jsonData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoding(false);
      }
    }
    fetchData();
  }, []);
  return { data, loding, error };
}
