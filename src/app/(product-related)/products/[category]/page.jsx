"use client";
import AccordionLayout from "@/components/seller/products/AccordionLayout";
import ProductSidebar from "@/components/seller/products/ProductSidebar";

const test2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const page = () => {
  return (
    <div
      style={{ gridTemplateColumns: "11.5rem auto" }}
      className="product w-full relative grid gap-4"
    >
      <ProductSidebar />
      <div className="flex-1 col-start-2 p-4 min-h-0">
        <div>{<AccordionLayout data2={test2} />}</div>
      </div>
    </div>
  );
};

export default page;
