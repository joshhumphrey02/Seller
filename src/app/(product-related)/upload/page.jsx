"use client";

import { Upload } from "react-bootstrap-icons";
import { Categories_Links } from "@/models/utils/categories";
import { switcher } from "@/models/utils/subCategory";
import { useState, useEffect } from "react";
import Specs from "@/components/admin/uploads/Specs";
import { useRef } from "react";
import { postUpload } from "@/models/sellers/upload";

const page = () => {
  const formRef = useRef();
  const [cat, setCat] = useState("accessories");
  const [subCat, setSubCat] = useState([]);

  useEffect(() => {
    setSubCat(() => switcher(cat));
  }, [cat]);
  return (
    <div className="p-2">
      <form
        ref={formRef}
        autoComplete="off"
        className="seg_bg_primary shadow-md px-1 pt-2 pb-3"
        onSubmit={(e) => {
          formRef.current.reset();
          postUpload(e);
        }}
        action="/upload"
        method="post"
        encType="multipart/form-data"
      >
        <div className="flex justify-end">
          <button
            type="submit"
            className="mr-4 flex gap-1 items-center rounded px-3 py-2 hover:text-red-600 bg-blue-800 text-slate-300 cursor-pointer"
          >
            <Upload />
            Upload
          </button>
        </div>
        <div className="form-con grid lg:grid-cols-2 md:grid-cols-1 gap-2">
          <div>
            <div>
              <h5 className="text-center mt-2 capitalize">Product details</h5>
              <div className="flex flex-col gap-2 my-3">
                <div className="border-2 px-2 rounded-md border-gray-600">
                  <label htmlFor="name" className="text-sm">
                    Product's Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent h-6"
                    name="name"
                    autoComplete="off"
                    autoCapitalize="on"
                    id="name"
                    required
                  />
                </div>
                <div className="border-2 px-2 rounded-md border-gray-600">
                  <label htmlFor="price" className="text-sm">
                    Product's price
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent h-6"
                    name="price"
                    id="price"
                    required
                  />
                </div>
                <div className="border-2 px-2 rounded-md border-gray-600">
                  <label htmlFor="category" className="text-sm">
                    Product Category
                  </label>
                  <select
                    name="category"
                    id="category"
                    onChange={(e) => setCat(e.target.value.toLowerCase())}
                    autoComplete="off"
                    className="w-full bg-transparent h-6"
                    required
                  >
                    {Categories_Links.map((cat) => (
                      <option key={cat.key} value={cat.label}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="border-2 px-2 rounded-md border-gray-600">
                  <label htmlFor="category" className="text-sm">
                    Product sub-category
                  </label>
                  <select
                    name="category"
                    id="sub-category"
                    className="w-full bg-transparent h-6"
                    required
                  >
                    {subCat.map((sub) => (
                      <option key={sub.id} value={sub.type}>
                        {sub.type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div>
              <h5 className="text-center mt-2 capitalize">Product images</h5>
              <div className="my-2 images">
                <Buttons bt="image" ct="imagesDiv" dt="images" />
                <div className="my-2 flex imagesDiv flex-col gap-2">
                  <div className="border-2 Div px-1 rounded-md border-gray-600">
                    <input
                      type="file"
                      name="image"
                      className="w-full bg-transparent h-8 mt-1"
                      id="image"
                      accept="img/*"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h5 className="text-center mt-2 capitalize">Product features</h5>
              <div className="features">
                <Buttons bt="feature" ct="featuresDiv" dt="features" />
                <div className="mt-2 flex featuresDiv flex-col gap-2">
                  <div className="border-2 Div px-2 rounded-md border-gray-600">
                    <input
                      type="text"
                      className="w-full bg-transparent h-8"
                      name="price"
                      id="price"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h5 className="text-center mt-2 capitalize">
                Product description
              </h5>
              <div className="border-2 mt-3 px-1 flex rounded-md border-gray-600">
                <textarea
                  name="description"
                  id="description"
                  required
                  className="w-full bg-transparent mt-1"
                  cols="70"
                  rows="10"
                ></textarea>
              </div>
            </div>
            <div>{<Specs />}</div>
          </div>
        </div>
      </form>
    </div>
  );
};

export const Buttons = ({ bt, ct, dt }) => {
  return (
    <div className="flex justify-around mt-1 px-2">
      <div>
        <button
          type="button"
          onClick={() => buttonsController(true, ct, dt)}
          id="add"
          className="px-3 py-1 rounded-md border-2 bg-blue-400 text-white"
        >
          + {bt}
        </button>
      </div>
      <div>
        <button
          type="button"
          onClick={() => buttonsController(false, ct, dt)}
          id="minus"
          style={{ display: "none" }}
          className="px-3 py-1 rounded-md border-2 bg-red-400 text-white"
        >
          - {bt}
        </button>
      </div>
    </div>
  );
};

const buttonsController = (action, type, dt) => {
  let divisions = document.querySelector(`.${type}`);
  let Divs = divisions.querySelectorAll(".Div")[0];
  let con = document.querySelector(`.${dt}`);
  let Div = divisions.querySelectorAll(".Div");
  const minusBtn = con.querySelector("#minus");
  if (action) {
    let newDiv = Divs.cloneNode(true);
    let input = newDiv.querySelectorAll("input")[0];
    input.value = "";
    divisions.appendChild(newDiv);
    Div.length > 0
      ? (minusBtn.style.display = "block")
      : (minusBtn.style.display = "none");
  } else {
    divisions.lastElementChild.remove();
    Div.length <= 2 ? (minusBtn.style.display = "none") : null;
  }
};

export default page;
