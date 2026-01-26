import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConnect";
import { User } from "@/models/user.model";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",

            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },

            async authorize(credentials: any): Promise<any> {
                await dbConnect();

                const { email, password } = credentials;

                if (!email) throw new Error("Email is required");
                if (!password) throw new Error("Password is required");

                // FIND USER
                const user = await User.findOne({ email });

                if (!user) {
                    throw new Error("User does not exist");
                }

                // CHECK PASSWORD
                const isMatch = await bcrypt.compare(password, user.password);
                if (!isMatch) {
                    throw new Error("Invalid credentials");
                }

                return {
                    _id: user._id.toString(),
                    username: user.username,
                    email: user.email,
                    role: user.role,
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
        signIn: "/login",
    },

    session: {
        strategy: "jwt",
    },

    secret: process.env.NEXTAUTH_SECRET,
};
