import clientPromise from "./mongodb";  // Importation de la promesse de connexion MongoDB

async function testMongoConnection() {
  try {
    const client = await clientPromise; // Attente de la connexion au client MongoDB
    const db = client.db("Hapiness-Capture-db"); // Accès à la base de données "hapiness-capture"
    console.log("Connected to MongoDB:", db.databaseName); // Affichage du nom de la base de données
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error); // Gestion des erreurs de connexion
  }
}

testMongoConnection(); // Appel de la fonction pour tester la connexion