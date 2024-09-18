import mongoose, {Schema,Document} from 'mongoose';

// interface du modèle utilisateur. Définit les propriétés obligatoires pour chaque user.

interface IUser extends Document {
    email: string;
    token: string;
    isAuthenticated: boolean;
    clientId: string; //id unique par client
    createdAt : Date;
}

// Shéma mongoose pour les users (structure des données stocké dans MDB pour un user)

const UserShema =  new Schema({
    email: {type: String, required : true, unique: true },
    token: {type: String, required : true, unique: true },
    clientId: {type: String, required : true, unique: true },
    isAuthenticated: { type: Boolean, default: false}
});

const User = mongoose.models.User || mongoose.model<IUser>('User', UserShema);

export default User;