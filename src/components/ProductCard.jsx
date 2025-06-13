import { useCart } from "../context/CartContext";
import { toast } from "react-hot-toast";
function ProductCard({ id, name, priceCents, imageUrl }) {
  const { addItemToCart } = useCart();
  // Handle adding item to cart
  const handleAddToCart = () => {
    toast.success(`${name} has been added to your cart!`);
    addItemToCart({ id, name, priceCents, imageUrl });
  };

  // Format numbers to 2 decimal places and with commas
  const formatAmount = (amount) =>
    Number(amount).toLocaleString("en-NG", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  return (
    <div className="bg-white shadow-lg border border-gray-200 rounded-xl flex flex-col hover:shadow-xl transition group">
      {/* Product Image */}
      <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center">
        <img
          src={imageUrl}
          alt={name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col justify-between p-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">
            {name}
          </h3>
          <p className="text-xl font-bold text-amber-600 mb-4">
            N{formatAmount(priceCents)}
          </p>
        </div>
        <button
          onClick={() => handleAddToCart()}
          className="mt-auto py-2 cursor-pointer px-6 bg-amber-600 w-full rounded-full text-white font-bold hover:bg-amber-700 transition-all"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
