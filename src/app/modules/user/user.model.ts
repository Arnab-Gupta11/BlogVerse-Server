import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';

const UserSchema: Schema = new Schema<TUser>({
  authInfo: { type: Schema.Types.ObjectId, ref: 'Auth', required: true },
  name: { type: String, required: true },
  userName: { type: String, required: true, unique: true },
  profilePicture: { type: String, default: '' },
  bio: { type: String, default: '' },
  socialLinks: { type: [{ platform: String, url: String }], default: [] },
  location: { type: String, default: '' },
  isProfilePublic: { type: Boolean, default: true },
  allowComments: { type: Boolean, default: true },
});
export const User = model<TUser>('User', UserSchema);
