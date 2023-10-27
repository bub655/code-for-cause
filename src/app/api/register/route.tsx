import { db } from "@/utils/firebase";
import sendRegistrationEmail from "@/utils/sendRegistrationEmail";
import sendDiscordMessage from "@/utils/sendDiscordRegistrationMessage";
import { doc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;

	const email = searchParams.get("email") as string;
	const name = searchParams.get("name") as string;

	try {
		await updateDoc(doc(db, `attendees/${email}`), {
			email: searchParams.get("email"),
			name: name,
			diet: searchParams.get("diet"),
			grade: searchParams.get("grade"),
			size: searchParams.get("size"),
			skill: searchParams.get("skill"),
			source: searchParams.get("source"),
			notes: searchParams.get("notes"),
			forms: false,
			registered: serverTimestamp(),
		});
		console.log("Registered: ", email);
		await sendRegistrationEmail(name, email);
		await sendDiscordMessage(name, email);
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
					source: searchParams.get("source"),
					notes: searchParams.get("notes"),
					forms: false,
					emailSaved: serverTimestamp(),
					registered: serverTimestamp(),
				});
				console.log("Registered: ", email);
				await sendRegistrationEmail(name, email);
				await sendDiscordMessage(name, email);
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
