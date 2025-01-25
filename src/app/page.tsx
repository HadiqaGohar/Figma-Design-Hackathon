'use client'
import React, { Suspense } from 'react'
import Hero from './hero/page'


// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined)

function Home() {
  // const amount = 49.99;
  return (
    <Suspense fallback={<div>loading...</div>}>
      <div className='w-full-2xl mx-auto'>
        <Hero />
      </div>
    </Suspense>
  )
}

export default Home