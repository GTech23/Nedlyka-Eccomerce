import { useParams, Link } from "react-router-dom";

function ProductCategory() {
  const { categoryName } = useParams();
  
  return (
    <>
      <h1 className="text-2xl">Product Category Page</h1>
      <p className="text-xl">
        You are currently viewing Product Category: {categoryName}
      </p>
    </>
  );
}

export default ProductCategory;
