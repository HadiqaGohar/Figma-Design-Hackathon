// ./schemas/shippingAddress.js
const shippingAddress = {
  name: 'shippingAddress',
  title: 'Shipping Address',
  type: 'document',
  fields: [
    { name: 'fullName', title: 'Full Name', type: 'string' },
    { name: 'address', title: 'Address', type: 'string' },
    { name: 'city', title: 'City', type: 'string' },
    { name: 'postalCode', title: 'Postal Code', type: 'string' },
    { name: 'country', title: 'Country', type: 'string' },
  ],
};
export default shippingAddress