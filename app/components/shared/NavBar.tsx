import { Sun } from "lucide-react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex justify-between pb-16 pt-8 md:py-16">
      <Link href="/">
        <h1 className="text-xl font-semibold">
          <span className="text-blue-400">mark</span>slorach
          <span className="text-blue-400">.</span>
        </h1>
      </Link>
      {/* <Sun /> */}
    </nav>
  );
};

export default NavBar;
