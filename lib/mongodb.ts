import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || ""; // Récupère l'URI de connexion depuis les variables d'environnement
const options = {}; // Options de connexion (peut être configuré selon les besoins)

let client; // Déclaration de la variable client
let clientPromise: Promise<MongoClient>; // Déclaration de la promesse pour le client MongoDB

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local"); // Vérifie si l'URI est défini
}

if (process.env.NODE_ENV === "development") {
  // En mode développement
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options); // Crée une nouvelle instance de MongoClient
    global._mongoClientPromise = client.connect(); // Connecte le client et stocke la promesse dans une variable globale
  }
  clientPromise = global._mongoClientPromise; // Utilise la promesse globale
} else {
  // En mode production
  client = new MongoClient(uri, options); // Crée une nouvelle instance de MongoClient
  clientPromise = client.connect(); // Connecte le client et stocke la promesse
}

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined; // Déclare une variable globale pour la promesse du client
}

export default clientPromise; // Exporte la promesse du client pour utilisation dans d'autres fichiers