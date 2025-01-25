import React from "react";

interface CheckoutButtonProps {
  items: { price: string; quantity: number }[];
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({ items }) => {
  const handleCheckout = async () => {
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items }),
    });

    const { url } = await response.json();
    if (url) {
      window.location.href = url;
    } else {
      console.error("Error redirecting to Stripe Checkout");
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      Checkout
    </button>
  );
};

export default CheckoutButton;
