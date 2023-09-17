"use client";
import Card from "react-bootstrap/Card";
import Swal from "sweetalert2";
import Link from "next/link";

export default function CardLayout({ data, category }) {
  let pageLink = `/products/${category}/${data}`;
  return (
    <Card
      style={{
        width: "10rem",
        minHeight: "10rem",
        maxHeight: "14rem",
      }}
      className=" flex flex-col mx-auto"
    >
      <Card.Img
        style={{ width: "9rem", height: "8rem" }}
        className="w-full flex-1 object-fill mx-auto"
        variant="top"
        src="/products/NE555.jpg"
      />
      <Card.Body className="">
        <Card.Subtitle className="mb-2 text-muted h-9">
          Card Subtitle
        </Card.Subtitle>
        <div className="flex justify-around gap-2">
          <Link
            href={pageLink}
            style={{ backgroundColor: "blue" }}
            className="border rounded-md text-white  px-3 py-1 hover:no-underline hover:bg-black"
          >
            View
          </Link>
          <button
            type="button"
            onClick={onDelete}
            style={{ backgroundColor: "red" }}
            className="border rounded-md text-white  px-2 py-1 hover:no-underline hover:bg-sky-500"
          >
            Delete
          </button>
        </div>
      </Card.Body>
    </Card>
  );
}

const onDelete = () => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  swalWithBootstrapButtons
    .fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          "Deleted!",
          "Your file has been deleted.",
          "success"
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          "Cancelled",
          "Your file is safe :)",
          "error"
        );
      }
    });
};
