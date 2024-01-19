'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
usePathname

export default function NavBar() {
  const pathname = usePathname();
  
  return (
    <header id="top">
      <nav className="nav">
        <Link href={"/"}>
          <h1 className="nav-logo">
            mark<span className="nav-logo-span">slorach</span>.
          </h1>
        </Link>

        <div className="nav-links-container">
          {[
            ["about", "/about"],
            ["projects", "/projects"],
            ["contact", "/#contact"],
          ].map(([title, url], index) => (
            <Link key={index} href={url} className="nav-links">
              {title}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
