import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbName = process.env.DBNAME;

if (!uri) {
  throw new Error('❌ MONGODB_URI is not defined in .env.local');
}

if (!dbName) {
  throw new Error('❌ DBNAME is not defined in .env.local');
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let clientPromise;

if (!global._mongoClientPromise) {
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export const dbConnect = async (collectionName) => {
  const client = await clientPromise;
  return client.db(dbName).collection(collectionName);
};
