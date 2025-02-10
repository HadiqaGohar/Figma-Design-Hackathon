const order = {
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    {
      name: "firstName",
      title: "FirstName",
      type: "string",
    },
    {
      name: "lastName",
      title: "FirstName",
      type: "string",
    },
    {
      name: "country",
      title: "Country",
      type: "string",
    },
    {
      name: "street",
      title: "Street",
      type: "string",
    },
    {
      name: "city",
      title: "City",
      type: "string",
    },
    {
      name: "provinces",
      title: "Provinces",
      type: "string",
    },
    {
      name: "postalCode",
      title: "Postal Code",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
    },
   
    {
      name: "email",
      title: "Email",
      type: "string",
    },
   
    // {
    //   name: "cartItems",
    //   title: "Cart Items",
    //   type: "array",
    //   of: [{ type: "reference", to: { type: "product" } }],
    // },
    {
      title: "Cart Items",
      name: "cartItems",
      type: "array",
      of: [{ type: "object", fields: [
        { name: "product", type: "string", title: "Product" },
        { name: "quantity", type: "number", title: "Quantity" }
        
      ]}]
    },
    
 
    {
      name: "status",
      title: "Order Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Success", value: "success" },
          { title: "Dispatch", value: "dispatch" },
        ],
        layout: "radio",
      },
      initialValue: "pending",
    },
    {
      name: "productName",
      title: "ProductName",
      type: "string",
    },
    {
      name: 'id',
      type: 'number',
      title: 'Product ID',
    },
    // {
    //   name: "image",
    //   title: "Image",
    //   type: "string",
    // },
    {
      title: "Image",
      name: 'image',
      type: 'array',
      options: {
        hotspot: true, // Enables cropping and focal point selection
      },
      of: [{ type: 'string' }] // Allows multiple image URLs
    },
    
    {
      name: "subtotal",
      title: "Subtotal",
      type: "number",
    },
    {
      name: "shippingPrice",
      title: "Shipping Price",
      type: "number",
    },
    {
      name: "totalPrice",
      title: "TotalPrice ",
      type: "number",
    },
  ],
};

export default order;


// // schemas/orderDetails.js

// const orderDetails = {
//   name: 'orderDetails',
//   title: 'Order Details',
//   type: 'document',
//   fields: [
//     {
//       name: 'firstName',
//       title: 'First Name',
//       type: 'string',
//     },
//     {
//       name: 'lastName',
//       title: 'Last Name',
//       type: 'string',
//     },
//     {
//       name: 'country',
//       title: 'Country / Region',
//       type: 'string',
//     },
//     {
//       name: 'address',
//       title: 'Street Address',
//       type: 'string',
//     },
//     {
//       name: 'city',
//       title: 'Town / City',
//       type: 'string',
//     },
//     {
//       name: 'zipCode',
//       title: 'Postal Code',
//       type: 'string',
//     },
//     {
//       name: 'phone',
//       title: 'Phone',
//       type: 'string',
//     },
//     {
//       name: 'email',
//       title: 'Email Address',
//       type: 'string',
//     },
//     {
//       name: 'cartItems',
//       title: 'Cart Items',
//       type: 'array',
//       of: [
//         {
//           type: 'object',
//           fields: [
//             { name: 'id', type: 'string' },
//             { name: 'name', type: 'string' },
//             { name: 'qty', type: 'number' },
//             { name: 'price', type: 'number' },
//             { name: 'image', type: 'image' },
//           ],
//         },
//       ],
//     },
//     {
//       name: 'paymentMethod',
//       title: 'Payment Method',
//       type: 'string',
//     },
//     {
//       name: 'totalAmount',
//       title: 'Total Amount',
//       type: 'number',
//     },
//   ],
// };
// export default orderDetails