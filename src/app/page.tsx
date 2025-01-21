'use client'
import React from 'react'
import Hero from './hero/page'


// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined)

function Home() {
  // const amount = 49.99;
  return (
    <div className='w-full-2xl mx-auto'>

      <Hero />

      {/* <p>{amount}</p>
      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubcurrency(amount), // cents
          currency: "usd"
        }}
      >
        <CheackoutPage amount={amount} />
      </Elements> */}

    </div>
  )
}

export default Home