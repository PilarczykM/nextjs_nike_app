import Image from "next/image";
import Link from "next/link";
import headerLogo from "@/assets/images/header-logo.svg";
import hamburger from "@/assets/icons/hamburger.svg";
import { navLinks } from "@/constants/index";

const Nav = () => {
  return (
    <nav className="padding-x py-8 absolute z-10 w-full">
      <div className="flex justify-between items-center max-container">
        <Link href="/">
          <Image src={headerLogo} width={130} height={29} alt="Nike logo" />
        </Link>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item, index) => (
            <li className="" key={index}>
              <Link
                className="font-montserrat leading-normal text-lg"
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <Image src={hamburger} width={25} height={25} alt="Hamburger" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
