import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); 
    console.log('Parsed body:', body);

    // get client url from env 
    const clientUrl = process.env.CLIENT_URL;
    if (!clientUrl) {
      throw new Error('CLIENT_URL is not defined in the environment variables');
    }

 
    const successUrl = `${clientUrl}/success?session_id={CHECKOUT_SESSION_ID}`;

    return NextResponse.json(
      // when payment method complete give success message
      { message: 'Checkout created successfully', data: body, successUrl },
      { status: 200 }
    );
  } catch (error) {
    //  error handling to capture specific issues
    if (error instanceof Error) {
      console.error('Error in POST:', error.message);

      return NextResponse.json(
        { message: 'Internal Server Error', error: error.message },
        { status: 500 }
      );
    } else {
      console.error('Unexpected error:', error);

      return NextResponse.json(
        { message: 'Internal Server Error', error: 'An unexpected error occurred' },
        { status: 500 }
      );
    }
  }
}