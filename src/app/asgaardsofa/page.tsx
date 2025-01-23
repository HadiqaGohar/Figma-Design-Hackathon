import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Asgaard() {
  const products = [
    {
      id: 1,
      href: "/shop/14",
    },
  ];
// ....
  return (
    <div>
      <div className="flex flex-col xl:flex-row xl:w-[1440px] xl:h-[777px] items-center text-center bg-[#FFF9E5]">
        {/* Image Section */}
        <div>
          <Image
            src="/hero/sec4img1.png"
            height={799}
            width={983}
            alt="Asgaard Sofa"
            className="w-auto h-auto scroll-animate-right"
          />
        </div>

        {/* Text and Button Section */}
        <div>
          <h4 className="text-[18px] md:text-[24px] scroll-animate-right scroll-delay-1s">
            New Arrivals
          </h4>
          <h2 className="text-[30px] md:text-[48px] font-bold scroll-animate-right scroll-delay-2s">
            Asgaard Sofa
          </h2>
          {products.map((product) => (
            <div key={product.id}>
              <Link href={product.href}>
                <button className="scroll-animate-right scroll-delay-3s my-8 w-[175px] h-[40px] md:w-[255px] md:h-[64px] border border-black hover:bg-black hover:text-white transition duration-300">
                  Order Now
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Asgaard;
