import React from 'react'
import Image from 'next/image'

function Follow() {
  return (
    <div>
        <div className="relative w-full h-[450px] flex flex-col items-center justify-center">
                <div className="relative w-full h-full">
                    {/* Image Section */}
                    <Image
                        src="/hero/sec6img1.png"
                        height={450}
                        width={1440}
                        alt="Instagram Section"
                        className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    />
                    {/* Content Section */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
                        <h2 className="text-[35px] sm:text-[40px] md:text-[45px] lg:text-[50px] xl:text-[55px] 2xl:text-[60px] font-bold text-center">
                            Our Instagram
                        </h2>
                        <p className="text-[16px] sm:text-[20px]  text-center mt-2">
                            Follow our store on Instagram
                        </p>
                        <button className="mt-4 rounded-full text-black hover:text-white hover:bg-black h-[48px] sm:h-[64px] w-[200px] sm:w-[255px] md:px-16 md:py-4 shadow-md hover:shadow-lg">
                            Follow Us
                        </button>


                    </div>
                </div>
            </div>

    </div>
  )
}

export default Follow