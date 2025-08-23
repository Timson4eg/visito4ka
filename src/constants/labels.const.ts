import ant from "../assets/icons/Ant.svg";
import git from "../assets/icons/Git.svg";
import js from "../assets/icons/Js.svg";
import ts from "../assets/icons/Ts.svg";
import vite from "../assets/icons/Vite.svg";
import vscode from "../assets/icons/Vscode.svg";
import github from "../assets/icons/gitHub.svg";
import react from "../assets/icons/react.svg";

export interface Ilabel {
  id: number;
  logo: string;
  label: string;
  title: string;
  alt: string;
}

export const Labels: Ilabel[] = [
  {
    id: 1,
    logo: react,
    label: "React",
    title: "Frontend library",
    alt: "",
  },
  {
    id: 2,
    logo: js,
    label: "Js",
    title: "Programming language of the web",
    alt: "JavaScript logo",
  },
  {
    id: 3,
    logo: ts,
    label: "React",
    title: "Typed superset of JavaScript",
    alt: "",
  },
  //   {
  //     id: 4,
  //     logo: "../assets/icons/vue.svg",
  //     label: "React",
  //     title: "Frontend library",
  //     alt: "",
  //   },
  {
    id: 5,
    logo: git,
    label: "Git",
    title: "Version control system",
    alt: "",
  },
  {
    id: 6,
    logo: github,
    label: "gitHub",
    title: "Code hosting platform",
    alt: "",
  },
  {
    id: 7,
    logo: vscode,
    label: "Vs Code",
    title: "IDE",
    alt: "",
  },
  {
    id: 8,
    logo: ant,
    label: "Ant design",
    title: "React UI library",
    alt: "",
  },
  {
    id: 9,
    logo: vite,
    label: "Ant design",
    title: "Frontend build tool",
    alt: "",
  },
];
