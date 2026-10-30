import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

type Props = { icon: LucideIcon; title: string; description: string; tag?: string };
export function ProgramCard({ icon: Icon, title, description, tag }: Props) {
  return <article className="program-card"><div className="program-icon"><Icon size={25} /></div>{tag && <span className="program-tag">{tag}</span>}<h3>{title}</h3><p>{description}</p><Link to="/academics" className="text-link">Explore program <ArrowUpRight size={15} /></Link></article>;
}
