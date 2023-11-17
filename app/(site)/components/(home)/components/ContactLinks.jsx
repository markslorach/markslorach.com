import Link from "next/link";

// Icons
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const contactDetails = [
    {
        href: "/",
        icon: <EmailIcon />,
        text: "hello@markslorach.com",
    },
    {
        href: "https://www.linkedin.com/in/markslorach/",
        icon: <LinkedInIcon />,
        text: "in/markslorach",
    },
    {
        href: "https://github.com/markslorach",
        icon: <GitHubIcon />,
        text: "git/markslorach",
    },
];

export default function ContactLinks() {
    return (
        <section className="home-contact-links-container">
            {contactDetails.map((link, index) => (
                <Link key={index} target="_blank" className="home-contact-links" href={link.href}>
                    {link.icon}
                    {link.text}
                </Link>
            ))}
        </section>
    );
}
