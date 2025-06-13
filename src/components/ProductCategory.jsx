import { useState } from "react";
import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";
import { Link } from "react-router-dom";

function ProductCategory() {
  const [isCategoryShown, setIsCategoryShown] = useState(true);

  function toggleCategoryShown() {
    setIsCategoryShown(!isCategoryShown);
  }

  const categories = [
    {
      id: 1,
      imageUrl: "/croc-green.jpg",
      name: "Crocs",
    },
    {
      id: 2,
      imageUrl: "/pams.jpg",
      name: "Pams",
    },
    {
      id: 3,
      imageUrl: "/sandals.jpg",
      name: "Sandals",
    },
    {
      id: 4,
      imageUrl: "/shoe.jpg",
      name: "Shoes",
    },
    {
      id: 5,
      imageUrl: "/slide-blue.jpg",
      name: "Slide",
    },
    {
      id: 6,
      imageUrl: "/sneaker-orange.jpg",
      name: "Sneakers",
    },
  ];
  return (
    <section className="mt-10">
      <button
        onClick={toggleCategoryShown}
        className="px-4 py-2 rounded-lg mb-8 bg-zinc-100 cursor-pointer flex items-center justify-between gap-4 hover:bg-neutral-300"
      >
        <span>{isCategoryShown ? "Hide" : "View"} Categories</span>
        {isCategoryShown ? <FaLongArrowAltUp /> : <FaLongArrowAltDown />}
      </button>

      <h2 className="text-2xl font-semibold mb-4">Explore our Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6  gap-4">
        {categories.map((category) => {
          return (
            isCategoryShown && (
              <Link
                to={`/category/${category.name}`}
                key={category.id}
                className="flex flex-col items-center justify-center p-2 bg-[#D9F0EA] rounded-xl shadow-sm cursor-pointer hover:shadow-lg"
              >
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-40  mb-2 rounded-lg"
                />
                <span className="text-lg font-bold text-neutral-800">
                  {category.name}
                </span>
              </Link>
            )
          );
        })}
      </div>
    </section>
  );
}

export default ProductCategory;
