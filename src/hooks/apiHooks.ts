import { AxiosRequestConfig, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { makeRequest } from "../api";

export const useFetch = <T>(config: AxiosRequestConfig) => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      const response = await makeRequest<T>(config);
      if (response?.status === 200) setData(response.data);
      // else setData([]);
      setLoading(false);
    })();
  }, []);

  return [data, loading] as [T, boolean];
};
