import { User } from "@/models/user.model";
import { getServerSession } from "next-auth";
import { authOptions } from "../[...nextauth]/options";
import dbConnect from "@/lib/dbConnect";
import { ApiError } from "@/utils/apiError";
import { NextResponse } from "next/server";
import { ApiResponse } from "@/utils/apiResponse";

export const PATCH = async (request: Request) => {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user?._id) {
      throw new ApiError(404,"Unauthorized Access !");
    }

    const {username, email} = await request.json()

    await dbConnect();

    if (username) {
        const existedUsername = await User.findOne({
            username,
            _id: { $ne: session.user._id}
        })

        if (existedUsername) {
            throw new ApiError(404,"User already existed with this username")
        }

        const user = await User.findByIdAndUpdate(session.user._id,{
            username
        }, { new : true })
    }

    if (email) {
        const existedEmail = await User.findOne({
            email,
            _id: { $ne: session.user._id}
        })

        if (existedEmail) {
            throw new ApiError(404,"User already existed with this email")
        }

        const user = await User.findByIdAndUpdate(session.user._id,{
            email
        }, { new : true })
    }

    return NextResponse.json(
        new ApiResponse(true,"User details changed successfully")
    )

}