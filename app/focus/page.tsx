import type { Metadata } from "next";
import FocusReader from "../components/FocusReader";

export const metadata: Metadata = {
  title: "FOCUS Reading Mode",
  description:
    "Customize typography, spacing, and reading themes with PRISMM FOCUS mode.",
};

export default function FocusPage() {
  return <FocusReader />;
}
