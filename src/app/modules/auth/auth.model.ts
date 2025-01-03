import { model, Schema } from 'mongoose';
import { TAuth } from './auth.interface';

const AuthSchema: Schema = new Schema<TAuth>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ['admin', 'user', 'super-admin'],
      required: true,
    },
    isPasswordTemporary: { type: Boolean, default: undefined }, // Will be conditionally added
    isDeleted: { type: Boolean, default: false },
    isBlocked: { type: Boolean, default: false },
    isVerified: { type: Boolean, default: undefined }, // Will be conditionally added
  },
  { timestamps: true },
);
export const Auth = model<TAuth>('Auth', AuthSchema);
