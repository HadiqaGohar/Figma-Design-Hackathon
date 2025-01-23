const productSchema = {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'id',
      type: 'string',
      title: 'Product ID',
      description: 'Unique identifier for the product',
    },
    {
      name: 'name',
      type: 'string',
      title: 'Product Name',
    },
    
    // ...
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Product Price',
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Rating',
      description: 'Rating of the product',
    },
    {
      name: 'ratingCount',
      type: 'number',
      title: 'Rating Count',
      description: 'Number of ratings',
    },
    {
      name: 'countInStock',
      type: 'number',
      title: 'Quantity',
      description: 'Quantity of the product',
    },
    {
      name: 'sku',
      type: 'string',
      title: 'SKU',
    },
    {
      name: 'tags',
      type: 'string',
      title: 'Tags',
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
    },
    {
      name: 'topPicks',
      type: 'string',
      title: 'Top Picks',
    },
    
    {
      name: 'image',
      type: 'image',
      title: 'Product Image',
      options: {
        hotspot: true, // Enables cropping and focal point selection
      },
    },
  ],
};

export default productSchema;
