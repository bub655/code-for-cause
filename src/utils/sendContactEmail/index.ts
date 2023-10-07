import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function (message: string, email: string, name: string) {
	try {
		const data = await resend.emails.send({
			from: "Code for Cause Team <team@codeforcause.dev>",
			to: "Code for Cause Team <team@codeforcause.dev>",
			subject: `Contact Form Submission ${name}`,
			text: `Name: ${name}\n\nEmail: ${email}\n\nMessage:\n${message}`,
		});

		console.log(data);
	} catch (error) {
		console.error(error);
	}
}
