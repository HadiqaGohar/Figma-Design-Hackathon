import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId : process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset : process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion :"2021-03-25",
  token : process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: process.env.NODE_ENV === 'production' ? true : false,

  // useCdn: process.env.NODE_ENV === 'production',
  // useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

client.fetch('*[_type == "shippingAddress"]').then(result => {
  console.log('Sanity client test result:', result);  // Test if the client can fetch any data
}).catch(error => {
  console.error('Sanity client test error:', error);
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => builder.image(source);
// ..