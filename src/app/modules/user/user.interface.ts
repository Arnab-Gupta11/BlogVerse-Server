import mongoose from 'mongoose';

export interface IUserProfile {
  name: string;
  username: string;
  email: string;
  password: string;
  isVerified: boolean;
  isBlocked: boolean;
  profilePicture: string;
  bio: string;
  socialLinks: Array<{ platform: string; url: string }>;
  location: string;
  // totalBlogs: number;
  // totalViews: number;
  // totalComments: number;
  // followerCount: number;
  // followers: mongoose.Types.ObjectId[];
  // following: mongoose.Types.ObjectId[];
  // favoriteTags: string[];
  // bookmarkedBlogs: mongoose.Types.ObjectId[];
  // comments: Array<{
  //   blogId: mongoose.Types.ObjectId;
  //   content: string;
  //   createdAt: Date;
  // }>;
  // preferredCategories: string[];
  // receiveNotifications: boolean;
  isProfilePublic: boolean;
  allowComments: boolean;
  recentActivity: Array<{
    type: string;
    blogId: mongoose.Types.ObjectId;
    createdAt: Date;
  }>;
  lastActiveAt: Date;
}
