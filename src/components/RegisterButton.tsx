import { FaArrowRight } from "react-icons/fa6";

const RegisterButton = () => {
	return (
		<a
			href="https://www.vikinghacks.com/register"
			className="bg-[#896FBC] w-fit m-auto flex space-x-4 items-center text-2xl disabled:bg-[#7953C5] transition hover:bg-[#7953C5] font-semibold text-white px-8 py-4 rounded-full"
		>
			<div>Register now</div>
			<FaArrowRight />
		</a>
	);
};

export default RegisterButton;
