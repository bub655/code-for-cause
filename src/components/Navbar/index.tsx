import { DesktopNav } from "./NavbarDesktop";
import { NavbarMobile } from "./NavbarMobile";

export const Navbar = () => {
	return (
		<>
			{/* desktop nav */}
			<div className="sticky bg-purple z-40 top-0 p-6 text-white hidden md:flex items-center justify-between space-x-8 align-middle">
				<DesktopNav />
			</div>
			{/* mobile nav */}
			<div className="sticky bg-purple z-40 top-0 p-6 flex md:hidden items-center justify-end">
				<NavbarMobile />
			</div>
		</>
	);
};
