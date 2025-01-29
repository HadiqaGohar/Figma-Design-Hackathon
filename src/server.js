const express = require('express');
const stripe = require('stripe')('your-secret-key'); // Replace with your actual Stripe secret key
const app = express();

app.use(express.json());

// Route to create a Stripe Checkout session
app.post('/create-checkout-session', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Sample Product',
            },
            unit_amount: 2000, // Price in cents (2000 = $20)
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'http://localhost:3000/cancel',
    });

    res.json({ id: session.id });
  } catch (err) {
    console.log(err);
    res.status(500).send('Error creating checkout session');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
