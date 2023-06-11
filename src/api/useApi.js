import { useState } from "react";
import { useAuthHeader } from "react-auth-kit";

export default (apiFunc) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const authHeader = useAuthHeader()
  console.log(authHeader());
  const request = async (...args) => {
    setLoading(true);
    try {
      const result = await apiFunc(...args, authHeader());
      setData(result.data);
      console.log(result)
    } catch (err) {
      setError(err.message || "Unexpected Error!");
      console.error(error)
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    error,
    loading,
    request
  };
};