'use client';
import { client } from '@/sanity/lib/client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Product {
  _id: string;
  name: string;
  imagePath: string;
  description: string;
  price: number;
  category: string;
  stockLevel: number;
}

export default function SearchComponent() {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchingProducts = async () => {
      if (query.trim().length === 0) {
        setProducts([]);
        return;
      }

      const searchProduct = `*[_type == "product" && (category match "${query}*" || name match "${query}*" || description match "${query}*")]`;

      try {
        const results = await client.fetch(searchProduct);
        setProducts(results);
      } catch (error) {
        console.error('Error during fetching products from sanity:', error);
      }
    };

    fetchingProducts();
  }, [query]);

  return (

    <div className="p-4">
   
      <div className="flex items-center border rounded p-2 bg-white shadow-md">
        <i className="fa-solid fa-magnifying-glass text-gray-500 mr-2"></i>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search products"
          className="flex-1 outline-none bg-transparent"
        />
      </div>
      {products.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16">
          <div className="bg-gray-100 p-8 rounded-full shadow-xl mb-6">
            <Image
              src="/search.png"
              alt="Empty search list"
              className="w-52 h-52 rounded-xl"
              width={300}
              height={300}
              priority
            />
          </div>
          <p className="text-gray-500 text-center">
            No results found. Try searching with a different keyword.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {products.map((product) => (
            <div
              key={product._id}
              className="border p-4 rounded-lg shadow-md bg-white"
            >
              <div className="w-full h-48 mb-4">
                <Link href={`/product/${product._id}`}>
                  <Image
                    className="w-full h-full object-cover rounded"
                    src={product.imagePath}
                    alt={`Image of ${product.name}`}
                    width={400}
                    height={400}
                    style={{ objectFit: 'cover' }}
                  />
                </Link>
              </div>
              <Link href={`/product/${product._id}`} passHref>
                <h3 className="font-semibold text-lg text-center">{product.name}</h3>
              </Link>
              <p className="text-gray-600 text-sm mt-2">{product.description}</p>
              <p className="text-sm text-gray-500 mt-1">
                {product.stockLevel > 0 ? `${product.stockLevel} in stock` : 'Out of stock'}
              </p>
              <p className="text-sm text-gray-500">Category: {product.category}</p>
              <Link href={`/product/${product._id}`} passHref>
                <button className="bg-[#f8e29b] text-black py-2 px-4 mt-4 rounded w-full">
                  View Product
                </button>
              </Link>
            </div>
          
          ))}

        </div>
      )}
    </div>
  );
}