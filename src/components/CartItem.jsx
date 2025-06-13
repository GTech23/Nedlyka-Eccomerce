import { useState } from "react";
import { useCart } from "../context/CartContext";
function CartItem({ id, name, priceCents, imageUrl, quantity }) {
  const { updateCartItem, removeItemFromCart } = useCart();
  // Always sync inputValue with quantity prop when not editing
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(quantity);

  // Sync inputValue with quantity prop when quantity changes and not editing
  // This fixes the issue where inputValue gets out of sync after update
  if (!isEditing && inputValue !== quantity) {
    setInputValue(quantity);
  }

  const handleUpdateClick = () => {
    setIsEditing(true);
    setInputValue(quantity);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value.replace(/\D/, "")); // Only allow numbers
  };

  const handleInputBlur = () => {
    const newQuantity = Math.max(1, Number(inputValue));
    updateCartItem(id, newQuantity);
    setIsEditing(false);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      handleInputBlur();
    }
  };

  const formatAmount = (amount) =>
    Number(amount).toLocaleString("en-NG", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  return (
    <div className="border-1 border-[rgb(222,222,222)] mb-6 p-3 order-2 lg:order-1">
      <div className="flex items-start justify-between">
        <div className="flex gap-4 items-start">
          <img
            src={imageUrl}
            width={60}
            alt={name}
            className="max-w-full max-h-[120px]"
          />

          <div>
            <h3 className="text-lg font-semibold">{name}</h3>

            <p className="text-lg font-medium text-red-600">
              N{formatAmount(priceCents)}
            </p>
            <div>
              <span>
                Quantity:{" "}
                {isEditing ? (
                  <input
                    type="number"
                    min={1}
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    onKeyDown={handleInputKeyDown}
                    className="border px-2 py-1 w-16 rounded"
                    autoFocus
                  />
                ) : (
                  <span>{quantity}</span>
                )}
              </span>
              <span
                className="cursor-pointer text-blue-600 font-medium mx-3 hover:text-red-600"
                role="button"
                onClick={handleUpdateClick}
              >
                Update
              </span>
              <span
                onClick={() => removeItemFromCart(id)}
                role="button"
                className="cursor-pointer text-blue-600 font-medium hover:text-red-600"
              >
                Delete
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
