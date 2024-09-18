import { MongoClient } from "mongodb";

// Étendre le type global pour ajouter la propriété _mongoClientPromise
declare global {
  namespace NodeJS {
    interface Global {
      _mongoClientPromise: Promise<MongoClient> | null;
    }
  }
}

// Pour que TypeScript traite ce fichier comme un module
export {};