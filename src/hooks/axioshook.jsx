import axios from "axios";
import { useEffect, useState } from "react";

export const useAxios = (endpoint) => {
    const [data, setdata] = useState([]);

    useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${endpoint}?api_key=c749ba85a95fb5a1032d6cc9d8bf39a0`
      )
      .then((res) => setdata(res.data.results));
  }, []);

  return [data]
}