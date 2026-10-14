import type { Metadata } from "next";
import SkimReader from "../components/SkimReader";

export const metadata: Metadata = {
  title: "SKIM Reading Mode",
  description:
    "Scan key facts, responsibilities, and clauses in PRISMM SKIM mode.",
};

export default function SkimPage() {
  return <SkimReader />;
}
