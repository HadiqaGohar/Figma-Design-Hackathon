import Link from "next/link";
export default function SuccessPage() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-3xl font-bold text-green-600">Payment Successful!</h1>
        <p className="text-lg mt-2">Thank you for your order.</p>
        <Link href="/shop" className="mt-4 px-6 py-3 bg-yellow-500 text-white rounded-xl">Continue Shopping</Link>
      </div>
    );
  }
  