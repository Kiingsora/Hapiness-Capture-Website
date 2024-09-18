import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "~/lib/mongodb"; // Assurez-vous que ce chemin est correct

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),  // Utilise MongoDB comme base de données
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user}: { 
      user: any, 
    }): Promise<boolean> {
      try {
        // Connexion à MongoDB
        const client = await clientPromise;
        const db = client.db("Hapiness-Capture-db");
        const usersCollection = db.collection("users");
        
        // Vérifiez si l'utilisateur existe déjà
        const existingUser = await usersCollection.findOne({ email: user.email });
        if (!existingUser) {
          // Si l'utilisateur n'existe pas, insérez-le
          await usersCollection.insertOne({
            name: user.name,
            email: user.email,
            // Ajoutez d'autres champs si nécessaire
          });
        }
        return true; // Retournez true pour permettre la connexion
      } catch (error) {
        console.error("Erreur lors de la connexion :", error);
        return false; // Retournez false en cas d'erreur
      }
    }
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }; // Exportation des méthodes GET et POST
