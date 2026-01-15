'use server';

import { dbConnect } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';

const COLLECTION_NAME = 'products'; 

export const getProducts = async () => {
  const collection = await dbConnect(COLLECTION_NAME);
  const products = await collection.find({}).toArray();

  return products.map(product => ({
    ...product,
    _id: product._id.toString(),
  }));
};

export const getProductById = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  const collection = await dbConnect(COLLECTION_NAME);
  const product = await collection.findOne({ _id: new ObjectId(id) });

  if (!product) return null;

  return {
    ...product,
    _id: product._id.toString(),
  };
};
