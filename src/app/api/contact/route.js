import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lip/mongodb";
import Post from "../../../../Models/post";

export async function POST(req) {
    try {
        const { firstName, lastName, email, content} = await req.json();
        await connectMongoDB();
        await Post.create({ firstName, lastName, email, content});

        return NextResponse.json({ message: "User transacted"}, {status: 201});

    } catch(error) {

        return NextResponse.json({ message: "An error occurred while transacting the message"}, {status: 500});
        
    }
}