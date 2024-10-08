import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center sm:flex-row py-6 w-full bg-gradient-to-r from-[#2F4BE5] to-[#004aad] text-white">
      <p className="text-xs text-white/80 mb-2 sm:mb-0">&copy; 2024 ElectricAI. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs text-white/80 hover:underline underline-offset-4 transition duration-300" href="#">
          Terms of Service
        </Link>
        <Link className="text-xs text-white/80 hover:underline underline-offset-4 transition duration-300" href="#">
          Privacy
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
