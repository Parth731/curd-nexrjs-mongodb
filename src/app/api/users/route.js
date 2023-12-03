

import { connectToDB } from "../../../libs/mongodb";
import User from "../../../models/usermodel";
import { NextResponse } from "next/server";

export async function POST(request) {
    if (request.method !== 'POST') {
        return NextResponse.json({ message: "not post request" }, { status: 405 })
    }
    const { username, password, email, dateOfBirth } = await request.json();
    console.log(username, password, email, dateOfBirth)
    try {

        await connectToDB();
        const newProduct = new User({
            username,
            password,
            email,
            dateOfBirth,
        });

        await newProduct.save();
        return NextResponse.json({ message: "User created successfully" }, { status: 201 })

    } catch (err) {
        console.log(err);
        // throw new Error("Failed to create product!");
        return NextResponse.json({ message: "Internal Server Error", status: 500 })
    }
}

export async function GET() {

    try {

        await connectToDB();
        const users = await User.find();
        return NextResponse.json({ users, message: "get user data successfully" });
    }
    catch (err) {
        console.log(err.message);
        throw new Error("Failed to fetch user!");

    }
}

export async function DELETE(request) {

    try {
        const id = request.nextUrl.searchParams.get("id");
        console.log(id)
        await connectToDB();
        await User.findByIdAndDelete(id);
        return NextResponse.json({ message: "user delete success fully" }, { status: 200 });
    }
    catch (err) {
        console.log(err.message);
        throw new Error("Failed to delete user!");

    }
}