import { connectToDB } from "../../../../libs/mongodb";
import User from "../../../../models/usermodel";
import { NextResponse } from "next/server";


export async function GET(request, { params }) {
    const { id } = params;
    console.log(id);
    try {

        await connectToDB();
        const user = await User.findOne({ _id: id });
        return NextResponse.json({ user, message: "get single user data successfully" }, { status: 200 });
    }
    catch (error) {
        throw new Error("Failed to fetch single user");

    }
}


export async function PUT(request, { params }) {
    const { id } = params;
    console.log(id);
    const { newUserName: username, newPassword: password, newEmail: email, newDoB: dateOfBirth } = await request.json();
    console.log(username, password, email, dateOfBirth)
    try {

        await connectToDB();
        const user = await User.findByIdAndUpdate(id, { username, password, email, dateOfBirth });
        return NextResponse.json({ user, message: "user data update successfully" }, { status: 200 });
    }
    catch (error) {
        throw new Error("Failed to fetch single user");

    }
}