import Link from "next/link";

// Components
import ThemeSwitcher from "./ThemeSwitcher";

export default function NavBar() {
  return (
    <header>
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
            ["contact", "/contact"],
          ].map(([title, url], index) => (
            <Link key={index} href={url} className="nav-links">
              {title}
            </Link>
          ))}
          {/* <ThemeSwitcher /> */}
        </div>
      </nav>
    </header>
  );
}
