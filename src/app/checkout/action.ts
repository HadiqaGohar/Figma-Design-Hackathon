
"use server";

import Stripe from "stripe";

// Function to create the payment intent
export async function createPaymentIntent(amount: number) {
  // Ensure the STRIPE_SECRET_KEY is set in your environment variables
  if (!process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY) {
    throw new Error("NEXT_PUBLIC_STRIPE_SECRET_KEY is missing in environment variables.");
  }

  // Create a Stripe instance with your secret key
  const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY, {
    apiVersion: "2024-10-28.acacia", // Specify the Stripe API version
  });

  try {
    // Create a PaymentIntent with the specified amount (in cents)
    const paymentIntent = await stripe.paymentIntents.create({
      amount, // Pass the total amount (in cents)
      currency: "usd", // Currency set to USD
      automatic_payment_methods: { enabled: true }, // Enable automatic payment methods
    });

    // Return the client secret to use in the front-end
    return { clientSecret: paymentIntent.client_secret };
  } catch (error) {
    console.error("Stripe Error:", error);
    throw error;
  }
}
