import AntIcon from "@/assets/icons/Ant.svg";
import gitIcon from "@/assets/icons/Git.svg";
import GitHubIcon from "@/assets/icons/gitw.svg";
import JsIcon from "@/assets/icons/Js.svg";
import ReactIcon from "@/assets/icons/react.svg";
import tailwindIcon from "@/assets/icons/tailwind.svg";
import Tsicon from "@/assets/icons/Ts.svg";
import ViteIcon from "@/assets/icons/Vite.svg";
import VsCodeIcon from "@/assets/icons/Vscode.svg";

const atributs = [
  { src: JsIcon, alt: "Js" },
  { src: Tsicon, alt: "Ts" },

  { src: ReactIcon, alt: "React" },
  { src: gitIcon, alt: "git" },
  { src: tailwindIcon, alt: "tailwind" },
  { src: ViteIcon, alt: "Vite" },

  { src: GitHubIcon, alt: "GitHub" },
  { src: VsCodeIcon, alt: "VsCode" },
  { src: AntIcon, alt: "Ant" },
  // { src: ReactIcon, alt: "React",},
  // { src: ReactIcon, alt: "React",},
];

const TechStack = () => {
  return (
    <section className="block">
      <div></div>
      <h2 className="title-xl">Tech Stack</h2>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(90px,1fr))] gap-6 mt-5 justify-items-center">
        {atributs.map((item) => (
          <li
            key={item.alt}
            className="flex flex-col items-center justify-center bg-neutral-800 rounded-xl w-24 h-24 p-4"
          >
            <img src={item.src} alt={item.alt} className="w-20 h-20" />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TechStack;
