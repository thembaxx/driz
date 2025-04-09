import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "What will this be" },
    { name: "description", content: "We will find out soon" },
  ];
}

export default function Home() {
  return <Welcome />;
}
