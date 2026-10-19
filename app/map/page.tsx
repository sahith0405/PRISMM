import { Suspense } from "react";
import type { Metadata } from "next";
import MapReader from "../components/MapReader";

export const metadata: Metadata = {
  title: "MAP",
  description:
    "Explore how clauses in a rental agreement connect with PRISMM MAP.",
};

export default function MapPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-background text-foreground">
          <p className="text-sm text-text-secondary">
            Loading clause map...
          </p>
        </main>
      }
    >
      <MapReader />
    </Suspense>
  );
}
