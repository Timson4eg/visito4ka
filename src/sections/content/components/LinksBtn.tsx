import cvIcon from "../../../assets/icons/cv.svg";
import githubIcon from "../../../assets/icons/gitw.svg";
import linkedinIcon from "../../../assets/icons/Linkidn.svg";

type LinkItem = {
  href: string;
  icon: string;
  alt: string;
  label?: string;
  download?: boolean; // для sr-only текста, если нужно
};

const links: LinkItem[] = [
  {
    href: "https://github.com/Timson4eg",
    icon: githubIcon,
    alt: "GitHub",
    label: "GitHub profile",
  },
  {
    href: "https://linkedin.com/in/timur-nazipov-b83039221",
    icon: linkedinIcon,
    alt: "LinkedIn",
    label: "LinkedIn profile",
  },
  {
    href: "/TNt.pdf",
    icon: cvIcon,
    alt: "Download CV",
    label: "Download CV (PDF)",
    download: true,
  },
];

const LinksBtn = () => {
  return (
    <section aria-labelledby="contacts">
      <h2 id="contacts" className="sr-only">
        Contacts
      </h2>

      <ul className="flex gap-2.5">
        {links.map(({ href, icon, alt, label }) => (
          <li key={href}>
            <a
              href={href}
              download={
                label?.includes("CV") ? "Timur_Nazipov_CV.pdf" : undefined
              }
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`
                flex items-center justify-center
                w-[120px] h-[120px] sm:w-[130px] sm:h-[130px]
                rounded-xl
                bg-gradient-to-tr from-[#0f0f0f] via-[#141414] to-[#181826]
                text-white border-2 border-[#444444]
                transition-all duration-300 ease-out cursor-default
                hover:-translate-y-2 hover:scale-[1.01] hover:border-[#1c5564]
                hover:shadow-xl hover:shadow-[#00c8ff]/20
                focus:outline-none focus:ring-2 focus:ring-neutral-400/60
              `}
            >
              <img
                src={icon}
                alt={alt}
                className="w-12 h-12 sm:w-20 sm:h-20 pointer-events-none"
                loading="lazy"
                width={80}
                height={80}
              />
              {label ? <span className="sr-only">{label}</span> : null}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LinksBtn;
