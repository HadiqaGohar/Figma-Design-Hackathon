// schemas/orderDetails.js

const orderDetails = {
  name: 'orderDetails',
  title: 'Order Details',
  type: 'document',
  fields: [
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
    },
    {
      name: 'country',
      title: 'Country / Region',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Street Address',
      type: 'string',
    },
    {
      name: 'town',
      title: 'Town / City',
      type: 'string',
    },
    {
      name: 'zip',
      title: 'Postal Code',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
    },
    {
      name: 'cartItems',
      title: 'Cart Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'id', type: 'string' },
            { name: 'name', type: 'string' },
            { name: 'qty', type: 'number' },
            { name: 'price', type: 'number' },
            { name: 'image', type: 'image' },
          ],
        },
      ],
    },
    {
      name: 'paymentMethod',
      title: 'Payment Method',
      type: 'string',
    },
    {
      name: 'totalAmount',
      title: 'Total Amount',
      type: 'number',
    },
  ],
};
export default orderDetails