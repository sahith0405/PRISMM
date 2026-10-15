import type { Metadata } from "next";
import MapReader from "../components/MapReader";

export const metadata: Metadata = {
  title: "MAP | PRISMM",
  description: "Explore how clauses in a rental agreement connect with PRISMM MAP.",
};

export default function MapPage() {
  return <MapReader />;
}
