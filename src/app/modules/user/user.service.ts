/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose';
import AppError from '../../errors/AppError';
import { Auth } from '../auth/auth.model';
import { User } from './user.model';

const createUserIntoDB = async (payload: any) => {
  const { name, userName, email, password } = payload;
  //Check user is already exist.
  const doesEmailExist = await Auth.exists({
    email,
  });
  if (doesEmailExist) {
    throw new AppError(
      409,
      'A user with this email already exists. Please try logging in or use a different email.',
    );
  }
  const doesUserNameExist = await User.exists({
    userName,
  });
  //Check if the userName already exist
  if (doesUserNameExist) {
    throw new AppError(
      409,
      'This username is already taken. Please choose another.',
    );
  }
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const newRegisterUser = await Auth.create(
      [
        {
          email,
          password,
          role: 'user',
          isVerified: false,
        },
      ],
      { session },
    );
    if (!newRegisterUser.length) {
      throw new AppError(400, 'Failed to register user');
    }
    const newUser = await User.create(
      [
        {
          authInfo: newRegisterUser[0]._id,
          name,
          userName,
          profilePicture: `https://avatar.iran.liara.run/username?username=${userName}&bold=false&length=1`,
        },
      ],
      { session },
    );
    if (!newUser.length) {
      throw new AppError(400, 'Failed to create user');
    }
    await session.commitTransaction();
    await session.endSession();
    const response = {
      userId: newUser[0]._id,
      email,
      name,
      userName,
      profilePicture: newUser[0].profilePicture,
      role: newRegisterUser[0].role,
    };
    return response;
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new AppError(409, err.message);
  }
};

export const UserServices = {
  createUserIntoDB,
};
