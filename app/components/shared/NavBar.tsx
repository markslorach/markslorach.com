import Link from "next/link";
// import ThemeSwitch from "../ui/ThemeSwitch";

const NavBar = () => {
  return (
    <nav className="flex justify-between pb-16 pt-8 md:py-16">
      <Link href="/">
        <h1 className="text-xl font-semibold text-neutral-800">
          <span className="text-blue-400">mark</span>slorach
          <span className="text-blue-400">.</span>
        </h1>
      </Link>
      {/* <ThemeSwitch/> */}
    </nav>
  );
};

export default NavBar;
