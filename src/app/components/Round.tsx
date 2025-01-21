import React from 'react';
import { FaTruckFast } from 'react-icons/fa6';
import { GiReceiveMoney } from 'react-icons/gi';
import { MdHeadsetMic } from 'react-icons/md';

function Round() {
    return (
        <div>
            <div className="flex flex-col sm:flex-row mx-auto text-center justify-center gap-28 mt-20">
                {/* FREE AND FAST DELIVERY */}
                <div className="flex flex-col items-center text-center">
                    <div className="bg-[#C1C1C1] rounded-full h-[70px] w-[70px] p-2.5 flex items-center justify-center">
                        <div className="rounded-full h-[50px] w-[50px] bg-[#000000] flex items-center justify-center">
                            <FaTruckFast color="white" size={25} />
                        </div>
                    </div>
                    <h2 className="text-sm font-bold mt-2">FREE AND FAST DELIVERY</h2>
                    <p className="text-xs sm:text-sm">Free delivery for all orders over $140</p>
                </div>

                {/* 24/7 CUSTOMER SERVICE */}
                <div className="flex flex-col items-center text-center">
                    <div className="bg-[#C1C1C1] rounded-full h-[70px] w-[70px] p-2.5 flex items-center justify-center">
                        <div className="rounded-full h-[50px] w-[50px] bg-[#000000] flex items-center justify-center">
                            <MdHeadsetMic color="white" size={25} />
                        </div>
                    </div>
                    <h2 className="text-sm font-bold mt-2">24/7 CUSTOMER SERVICE</h2>
                    <p className="text-xs sm:text-sm">Friendly 24/7 customer support</p>
                </div>

                {/* MONEY BACK GUARANTEE */}
                <div className="flex flex-col items-center text-center">
                    <div className="bg-[#C1C1C1] rounded-full h-[70px] w-[70px] p-2.5 flex items-center justify-center">
                        <div className="rounded-full h-[50px] w-[50px] bg-[#000000] flex items-center justify-center">
                            <GiReceiveMoney color="white" size={25} />
                        </div>
                    </div>
                    <h2 className="text-sm font-bold mt-2">MONEY BACK GUARANTEE</h2>
                    <p className="text-xs sm:text-sm">We return money within 30 days</p>
                </div>
            </div>
        </div>
    );
}

export default Round;
