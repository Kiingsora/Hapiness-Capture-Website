// import { v4 as uuidv4 } from 'uuid';  // Importer la fonction uuid
// import connectToDatabase from './mongodb';  // Connexion à MongoDB

// // Fonction pour générer un lien unique pour un client
// export async function generateUniqueLink(userEmail: string) {
//   try {
//     const { db } = await connectToDatabase();  // Connexion à MongoDB

//     // Génération d'un token unique avec uuid
//     const uniqueToken = uuidv4();
    
//     // Construction du lien
//     const uniqueLink = `https://ton-site.com/client/photos/${uniqueToken}`;

//     // Mise à jour de l'utilisateur dans MongoDB pour ajouter le lien unique
//     const result = await db.collection('users').findOneAndUpdate(
//       { email: userEmail },  // On cherche l'utilisateur par email
//       { $set: { accessLink: uniqueLink } },  // On ajoute le lien unique dans le champ `accessLink`
//       { returnDocument: 'after' }  // On retourne le document mis à jour
//     );

//     if (result.ok) {
//       return uniqueLink;  // Si la mise à jour est réussie, retourner le lien
//     } else {
//       throw new Error('Échec de la génération du lien.');
//     }
//   } catch (error) {
//     console.error('Erreur lors de la génération du lien :', error);
//     throw new Error('Erreur lors de la génération du lien unique.');
//   }
// }
