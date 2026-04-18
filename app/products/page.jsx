'use client'
import { ArrowRight } from "lucide-react";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";
import toast from "react-hot-toast";
import NewProducts from "@/components/NewProducts";
import { useGetProducts } from "@/hook/products";
import Loading from "@/components/Loading";
import { useGetNotify } from "@/hook/nodifay";



const ProductsPage = () => {
    const notify = useGetNotify()


    const { data, isLoading, error } = useGetProducts()

    const savat = () => {
        notify("ok", "Maxsulot-savatga qo'shildi")
    }

    const liked = (id) => {
        console.log(id)
        notify('ok', "sevimlilarga qo'shildi")
    }

    if (isLoading) {
        return <Loading />
    }

    const products = data?.data?.data;

    return (
        <div className="">
            <NewProducts  products={products}/>
        </div>
    );
}
    ;

    export default ProductsPage
