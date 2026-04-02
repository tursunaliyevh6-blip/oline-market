import Carusel from "@/components/Carusel";
import Categories from "@/components/Categories";
import NewProdak from "@/components/NewProducts";

export default function Home() {
  return (
  <div className="mt-16">
    <Categories />
    <Carusel />
    <NewProdak />
  </div>
  );
}
 