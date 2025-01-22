'use client';
import Link from 'next/link';
import React from 'react';

function Page() {
  const handleAlert = () => {
    alert('No more products here');
  };

  return (
    <div>
      <div className="flex gap-4 mx-auto my-12">
        {/* Box 1 */}
        <Link href='/shop'>
        <div
          className="bg-[#fbebb5] px-4 py-2 rounded-md cursor-pointer"
         
        >
          1
        </div></Link>

        {/* Box 2 */}
        <div
          className="bg-[#fff9e5] hover:bg-[#fbebb5] px-4 py-2 rounded-md cursor-pointer"
          onClick={handleAlert}
        >
          2
        </div>

        {/* Box 3 */}
        <div
          className="bg-[#fff9e5] hover:bg-[#fbebb5] px-4 py-2 rounded-md cursor-pointer"
          onClick={handleAlert}
        >
          3
        </div>

        {/* Next Button */}
        <div
          className="bg-[#fff9e5] px-4 py-2 rounded-md cursor-pointer hover:bg-[#fbebb5]"
          onClick={handleAlert}
        >
          Next
        </div>
      </div>
    </div>
    // ...
  );
}

export default Page;
