import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const [data, setData] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      axios
        .get(url)
        .then((res) => {
          setData(res.data);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsError(error.message);
          setIsLoading(false);
        });
    }, 2000);
  }, [url]);

  return { isLoading, isError, data };
}
