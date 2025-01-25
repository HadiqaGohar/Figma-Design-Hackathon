'use client';  

const CancelPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full text-center overflow-hidden">
        <h1 className="text-3xl font-semibold text-red-600 mb-6">Payment Canceled</h1>
        <p className="text-lg font-medium text-gray-700 mb-4">
          It seems you canceled the payment process. You can try again or contact support for help.
        </p>
        
        <div className="mt-6">
          <button
            onClick={() => window.location.href = '/shop'}
            className="w-full py-3 bg-black text-white rounded-lg hover:bg-white hover:text-black border transition duration-300"
          >
            Try Again
          </button>
        </div>
        
        <div className="mt-4">
          <button
            onClick={() => window.location.href = '/contact'}
            className="w-full py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 hover:text-black border transition duration-300"
          >
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancelPage;