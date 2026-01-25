import dbConnect from "@/lib/dbConnect";
import { User } from "@/models/user.model";
import { ApiError } from "@/utils/apiError";
import { ApiResponse } from "@/utils/apiResponse";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
    const {username, email, password} = await request.json()

    if (!username) {
        throw new ApiError(422,"Username is required")
    }
    if (!email) {
        throw new ApiError(422,"Email is required")
    }
    if (!password) {
        throw new ApiError(422,"Password is required")
    }

    await dbConnect();

    const existedUser = await User.findOne({
        $or: [
            {email},
            {username}
        ]
    })

    if (existedUser) {
        throw new ApiError(404,"User already existed - Please try different credentials")
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
        username,
        email,
        password: hashedPassword
    })

    return NextResponse.json(
        new ApiResponse(true, "User created successfully")
    )
}