import AccordionLayout from "@/components/seller/products/AccordionLayout";
import ProductSidebar from "@/components/seller/products/ProductSidebar";

const test2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function page() {
  return (
    <div
      style={{ gridTemplateColumns: "11.1rem auto" }}
      className="relative grid gap-2"
    >
      <ProductSidebar />
      <div className="flex-1 col-start-2">
        <div>{<AccordionLayout data2={test2} />}</div>
      </div>
    </div>
  );
}
