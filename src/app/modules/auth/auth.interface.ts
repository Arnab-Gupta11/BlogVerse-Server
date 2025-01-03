export type TAuth = {
  email: string;
  password: string;
  role: 'admin' | 'user' | 'super-admin';
  isPasswordTemporary?: boolean; // Only relevant for admins
  isDeleted: boolean;
  isBlocked: boolean;
  isVerified?: boolean; // Only relevant for users
  createdAt: Date;
  updatedAt: Date;
};
