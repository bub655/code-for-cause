import { db } from "@/utils/firebase";
import {
	collection,
	doc,
	serverTimestamp,
	setDoc,
	updateDoc,
} from "firebase/firestore";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;
	const email = searchParams.get("email");

	try {
		await updateDoc(doc(db, `attendees/${email}`), {
			email: email,
			emailSaved: serverTimestamp(),
		});
		console.log("Email saved: ", email);
	} catch (e: any) {
		try {
			if (e.code == "not-found") {
				await setDoc(doc(db, `attendees/${email}`), {
					email: email,
					emailSaved: serverTimestamp(),
				});
				console.log("Email saved: ", email);
			} else {
				throw new Error(e);
			}
		} catch (e) {
			console.log("Error saving email: ", e);
			return NextResponse.json({ success: false, error: e }, { status: 500 });
		}

		console.error("Error adding document: ", e);
		return NextResponse.json({ success: false, error: e }, { status: 500 });
	}
	return NextResponse.json({ success: true });
}
