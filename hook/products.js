import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getProducts = async () => {
  const res = await axios.get("http://localhost:5000/api/products");

  return res;
};

export const useGetProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};