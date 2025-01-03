import { ObjectId } from 'mongoose';
import { TAuth } from '../auth/auth.interface';

export type TUser = {
  authInfo: ObjectId;
  name: string;
  userName: string;
  profilePicture?: string | null; // Optional, default is null
  bio?: string | null; // Optional, default is null
  socialLinks?: Array<{ platform: string; url: string }> | null; // Optional
  location?: string | null; // Optional
  isProfilePublic: boolean;
  allowComments: boolean;
};
export type TPopulatedUser = Omit<TUser, 'authInfo'> & { authInfo: TAuth };
