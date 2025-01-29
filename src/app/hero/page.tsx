'use client'

import React, { Suspense } from 'react'
import Asgaard from '../asgaardsofa/page'
import Banner from '../components/Banner'
import SecondBanner from '../components/SecondBanner'
import TopPicks from '../components/TopPicks'
import OurBlog from '../components/OurBlog'
import Follow from '../components/Follow'



function Hero() {



    return (
        <Suspense>
            <div className=' text-[#000000] mx-auto max-w-screen-2xl flex flex-col '>

                {/* SECTION 1 */}

                <Banner />

                {/* SECTION 2 */}

                <SecondBanner />

                {/* SECTION 3 */}

                <TopPicks />

                {/* SECTION 4 */}

                <Asgaard />

                {/* SECTION 5 */}

                <OurBlog />

                {/* SECTION 6 */}

                <Follow />

            </div >
        </Suspense>
    )
}

export default Hero

// New