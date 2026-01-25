import mongoose, {Schema, Document} from "mongoose";

export interface IUser extends Document{
    name: string;
    username: string;
    email: string;
    number?: number;
    password: string;
    role: string;
}

const userSchema : Schema <IUser> = new Schema({
    name: {
        type: String,
        default: "No name provided"
    },
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true
    },
    number: {
        type: Number
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "user"
    }
},{ timestamps: true })

export const User = (mongoose.models.User as mongoose.Model<IUser>) || mongoose.model<IUser>("User",userSchema)