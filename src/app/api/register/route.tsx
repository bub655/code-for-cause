import { db } from "@/utils/firebase";
import { doc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;

	const email = searchParams.get("email");

	try {
		await updateDoc(doc(db, `attendees/${email}`), {
			email: searchParams.get("email"),
			name: searchParams.get("name"),
			diet: searchParams.get("diet"),
			grade: searchParams.get("grade"),
			size: searchParams.get("size"),
			skill: searchParams.get("skill"),
			registered: serverTimestamp(),
		});
		console.log("Registered: ", email);
	} catch (e: any) {
		try {
			if (e.code == "not-found") {
				await setDoc(doc(db, `attendees/${email}`), {
					email: searchParams.get("email"),
					name: searchParams.get("name"),
					diet: searchParams.get("diet"),
					grade: searchParams.get("grade"),
					size: searchParams.get("size"),
					skill: searchParams.get("skill"),
					emailSaved: serverTimestamp(),
					registered: serverTimestamp(),
				});
				console.log("Registered: ", email);
			} else {
				throw new Error(e);
			}
		} catch (e) {
			console.log("Error registering: ", e);
			return NextResponse.json({ success: false, error: e }, { status: 500 });
		}
	}

	return NextResponse.json({ success: true });
}
