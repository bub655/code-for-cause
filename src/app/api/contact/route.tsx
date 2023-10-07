import { db } from "@/utils/firebase";
import sendContactEmail from "@/utils/sendContactEmail";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;

	const email = "" + searchParams.get("email");
	const name = "" + searchParams.get("name");
	const message = "" + searchParams.get("msg");
	try {
		await sendContactEmail(message, email, name);
		await addDoc(collection(db, "messages"), {
			email: searchParams.get("email"),
			name: searchParams.get("name"),
			message: searchParams.get("msg"),
			timeSent: serverTimestamp(),
		});
		console.log("Saved message: ", email);
	} catch (e: any) {
		console.log("Error saving message: ", e);
		return NextResponse.json({ success: false, error: e }, { status: 500 });
	}

	return NextResponse.json({ success: true });
}
