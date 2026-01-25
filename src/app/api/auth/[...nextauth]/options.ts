import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConnect";
import { User } from "@/models/user.model";
import { ApiError } from "@/utils/apiError";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",

            credentials: {
                username: { label: "Username", type: "text" },
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },

            async authorize(credentials: any): Promise<any> {
                await dbConnect();

                const { username, email, password } = credentials;

                if (!username) throw new ApiError(422, "Username is required");
                if (!email) throw new ApiError(422, "Email is required");
                if (!password) throw new ApiError(422, "Password is required");

                const existedUser = await User.findOne({
                    $or: [{ email }, { username }],
                });

                if (existedUser) {
                    throw new ApiError(409, "User already existed - Please try different credentials");
                }

                const hashedPassword = await bcrypt.hash(password, 10);

                const newUser = await User.create({
                    username,
                    email,
                    password: hashedPassword,
                });

                return {
                    _id: newUser._id.toString(),
                    username: newUser.username,
                    email: newUser.email,
                    role: newUser.role
                };
            }
        })
    ],

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token._id = user._id;
                token.username = user.username;
                token.email = user.email;
                token.role = user.role;
            }
            return token;
        },

        async session({ session, token }) {
            if (token) {
                session.user._id = token._id;
                session.user.username = token.username;
                session.user.email = token.email;
                session.user.role = token.role;
            }
            return session;
        },
    },

    pages: {
        signIn: "/sign-in",
    },

    session: {
        strategy: "jwt",
    },

    secret: process.env.NEXTAUTH_SECRET,
};
