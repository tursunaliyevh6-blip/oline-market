"use client";

import Carusel from "@/components/Carusel";
import Categories from "@/components/Categories";
import Loading from "@/components/Loading";
import NewProducts from "@/components/NewProducts";
import { useGetProducts } from "@/hook/products";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const { data, isLoading, error } = useGetProducts();

  if (isLoading) {
    return <Loading />;
  }

  const products = data?.data?.data;
  return (
    <div className="mt-16">
      <Categories />
      <Carusel />
      <div className="flex justify-between items-center mt-12">
        <h1 className="text-3xl font-bold">Tavsiya etilgan mahsulotlar</h1>
        <Link
          href={"/products"}
          className="flex items-center gap-2 justify-center text-green-700 hover:text-green-500"
        >
          Barchasini ko‘rish
          <ArrowRight />
        </Link>
      </div>
      <NewProducts products={products} />
    </div>
  );
}
