import { IPost } from "../posts/posts.type";

export interface IUser {
    firstname?: string;
    lastname?: string;
    email?: string;
    posts?: IPost[];
    friends?: IUser[];
    profilePic?: string;
    backgroundPic?: string;
    headline?: string;
    emailVerified?: boolean;
}