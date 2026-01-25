import dbConnect from "@/lib/dbConnect";
import { User } from "@/models/user.model";
import { authOptions } from "../[...nextauth]/options";
import { getServerSession } from "next-auth";
import { ApiError } from "@/utils/apiError";
import { NextResponse } from "next/server";
import { ApiResponse } from "@/utils/apiResponse";

export const PATCH = async (request: Request) => {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user?._id) {
      throw new ApiError(404,"Unauthorized Access !");
    }

    const {name, number} = await request.json()

    await dbConnect();

    const user = await User.findById(session.user._id)

    if (!user) {
        throw new ApiError(404,"User not found")
    }
    if (name) {
        user.name = name
    }
    if (number) {
        user.number = number
    }

    await user.save()

    return NextResponse.json(
        new ApiResponse(true,"User details changed successfully")
    )
}