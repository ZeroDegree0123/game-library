import { useState, useEffect } from "react";
import { CanceledError } from "axios";
import apiClient from "@/Services/api-client";

interface Genre {
    id: number;
    name: string;
}

interface Response {
    count: number;
    results: Genre[];
}

const useGenre = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<Response>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      }) 
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message)
        setLoading(false)
    });

      return () => controller.abort();
  }, []);

  return {genres, error, isLoading};
}

export default useGenre