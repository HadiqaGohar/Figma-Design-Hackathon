import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import banner from './banner'
import secondbanner from './secondbanner'
import blog from './blog'
// import order from './order'
// import comment from './comment'
import shippingAddress from './shippingAddress'
import orderDetails from './orderDetails'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, banner, secondbanner, blog, shippingAddress, orderDetails],
}
