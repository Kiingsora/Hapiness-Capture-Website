import mongoose, { Schema, Document } from 'mongoose';

export interface IClient extends Document {
  email: string;
  token: string;
  createdAt: Date;
}

const ClientSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  token: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: '336h' } // Token expire après 24h
});

const Client = mongoose.models.Client || mongoose.model<IClient>('Client', ClientSchema);

export default Client;
