'use client';

import { useEffect, useState,Suspense } from 'react';
import { useSearchParams } from 'next/navigation'; 


const SuccessPage = () => {
  const searchParams = useSearchParams(); 
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    const session_id = searchParams.get('session_id');
    if (session_id) {
      setSessionId(session_id);
    }
  }, [searchParams]);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-xl w-full text-center overflow-hidden">
        <h1 className="text-3xl font-semibold text-green-600 mb-6">Payment Successful!</h1>
        <p className="text-lg font-medium text-gray-700 mb-4">Thank you for your purchase.</p>
        
        {sessionId ? (
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <p className="text-md font-medium text-gray-600">Your session ID:</p>
            <strong className="text-xl text-green-600">{sessionId}</strong>
          </div>
        ) : (
          <p className="text-md text-gray-500 mt-6">Your session ID is not available.</p>
        )}
      
        <div className="mt-8">
          <button
            onClick={() => window.location.href = '/shop'}
            className="w-full py-3 bg-black text-white rounded-lg hover:bg-white hover:text-black border transition duration-300"
          >
            Go to Shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default function WrappedSuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessPage />
    </Suspense>
  );
}