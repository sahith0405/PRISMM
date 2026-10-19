"use client";

import Link from "next/link";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

const clauses = [
  { id: 1, title: "Parties & Property", category: "Agreement", summary: "Identifies the landlord, tenant, and rented property.", x: 300, y: 55, color: "#6d5dfc" },
  { id: 2, title: "Agreement Term", category: "Timeline", summary: "Defines the 11-month rental period and its start and end dates.", x: 300, y: 145, color: "#0ea5e9" },
  { id: 3, title: "Monthly Rent", category: "Payment", summary: "Monthly rent is ₹12,000, payable according to the agreed schedule.", x: 125, y: 245, color: "#0d9488" },
  { id: 4, title: "Security Deposit", category: "Payment", summary: "The security deposit is ₹24,000, subject to the agreement's return conditions.", x: 475, y: 245, color: "#0d9488" },
  { id: 5, title: "Utilities", category: "Responsibility", summary: "Explains responsibility for electricity, water, and other utility charges.", x: 125, y: 345, color: "#d97706" },
  { id: 6, title: "Maintenance", category: "Responsibility", summary: "Separates routine tenant care from major property repairs.", x: 475, y: 345, color: "#d97706" },
  { id: 7, title: "Property Use", category: "Responsibility", summary: "Sets expectations for residential use and care of the property.", x: 125, y: 445, color: "#d97706" },
  { id: 8, title: "Entry & Inspection", category: "Access", summary: "Describes reasonable landlord access for inspection or repairs.", x: 475, y: 445, color: "#64748b" },
  { id: 9, title: "Notice Period", category: "Deadline", summary: "A 30-day notice period is used in this illustrative agreement.", x: 300, y: 545, color: "#e11d48" },
  { id: 10, title: "Termination", category: "Deadline", summary: "Explains how the rental arrangement may end under agreed conditions.", x: 300, y: 635, color: "#e11d48" },
  { id: 11, title: "Deposit Return", category: "Payment", summary: "Connects move-out conditions, outstanding dues, and deposit settlement.", x: 475, y: 735, color: "#0d9488" },
  { id: 12, title: "Dispute Resolution", category: "Legal", summary: "Describes a process for addressing disagreements between the parties.", x: 125, y: 735, color: "#7c3aed" },
];

const edges = [
  [1, 2], [2, 3], [2, 4], [3, 5], [3, 6], [4, 6],
  [5, 7], [6, 8], [7, 9], [8, 9], [9, 10], [10, 11], [10, 12],
];

const categoryColors: Record<string, string> = {
  Agreement: "#6d5dfc",
  Timeline: "#0ea5e9",
  Payment: "#0d9488",
  Responsibility: "#d97706",
  Access: "#64748b",
  Deadline: "#e11d48",
  Legal: "#7c3aed",
};

export default function MapReader() {
  const searchParams = useSearchParams();
  const clauseParam = searchParams.get("clause");
  const requestedClause = clauseParam ? Number(clauseParam) : 1;
  const initialClause = clauses.some((clause) => clause.id === requestedClause)
    ? requestedClause
    : 1;

  const [selection, setSelection] = useState({
    clauseParam,
    selectedId: initialClause,
  });
  const selectedId =
    selection.clauseParam === clauseParam
      ? selection.selectedId
      : initialClause;
  const selectClause = (id: number) => {
    setSelection({ clauseParam, selectedId: id });
  };

  const selected = clauses.find((clause) => clause.id === selectedId) ?? clauses[0];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <Link href="/" className="text-xl font-bold tracking-tight">
            PRISMM<span className="text-primary">.</span>
          </Link>
          <nav aria-label="Reading modes" className="flex flex-wrap gap-2 text-sm font-semibold">
            <Link href="/skim" className="rounded-lg border border-border px-4 py-2 hover:border-primary">SKIM</Link>
            <Link href="/map" aria-current="page" className="rounded-lg bg-primary px-4 py-2 text-white">MAP</Link>
            <Link href="/focus" className="rounded-lg border border-border px-4 py-2 hover:border-primary">FOCUS</Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:py-12">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Perspective 02 · Relationships</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">See how clauses connect.</h1>
          <p className="mt-4 text-base leading-7 text-text-secondary">
            Explore the relationships between the terms in one illustrative rental agreement.
            Select any clause to understand its role and connected terms.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(280px,0.8fr)]">
          <section aria-label="Interactive clause relationship map" className="overflow-hidden rounded-3xl border border-border bg-surface shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-4">
              <div>
                <h2 className="font-semibold">Clause relationship map</h2>
                <p className="mt-1 text-xs text-text-secondary">Select a node to inspect a clause.</p>
              </div>
              <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">12 clauses</span>
            </div>

            <div className="overflow-x-auto">
              <svg viewBox="0 0 600 800" role="group" aria-label="Diagram connecting 12 rental agreement clauses" className="mx-auto block h-auto w-full max-w-[650px]">
                {edges.map(([from, to]) => {
                  const a = clauses.find((clause) => clause.id === from)!;
                  const b = clauses.find((clause) => clause.id === to)!;
                  const active = selectedId === from || selectedId === to;
                  return (
                    <line key={`${from}-${to}`} x1={a.x} y1={a.y + 22} x2={b.x} y2={b.y - 22}
                      stroke={active ? "#6d5dfc" : "#dce3ef"} strokeWidth={active ? 3 : 1.5} strokeLinecap="round" />
                  );
                })}

                {clauses.map((clause) => {
                  const active = selectedId === clause.id;
                  return (
                    <g key={clause.id} role="button" tabIndex={0}
                      aria-label={`Clause ${clause.id}: ${clause.title}`}
                      aria-pressed={active}
                      onClick={() => selectClause(clause.id)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          selectClause(clause.id);
                        }
                      }}
                      className="cursor-pointer outline-none">
                      <rect x={clause.x - 79} y={clause.y - 23} width="158" height="46" rx="12"
                        fill={active ? clause.color : "#ffffff"}
                        stroke={clause.color} strokeWidth={active ? 3 : 1.5} />
                      <text x={clause.x} y={clause.y - 2} textAnchor="middle"
                        fill={active ? "#ffffff" : "#192238"} fontSize="11" fontWeight="700">
                        {clause.id}. {clause.title.length > 19 ? `${clause.title.slice(0, 18)}…` : clause.title}
                      </text>
                      <text x={clause.x} y={clause.y + 12} textAnchor="middle"
                        fill={active ? "#ffffff" : clause.color} fontSize="9">
                        {clause.category}
                      </text>
                      {active && <rect x={clause.x - 83} y={clause.y - 27} width="166" height="54" rx="15" fill="none" stroke={clause.color} strokeOpacity=".25" strokeWidth="3" />}
                    </g>
                  );
                })}
              </svg>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-border px-5 py-4">
              {Object.entries(categoryColors).map(([name, color]) => (
                <span key={name} className="inline-flex items-center gap-2 text-xs text-text-secondary">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: color }} />
                  {name}
                </span>
              ))}
            </div>
          </section>

          <aside className="space-y-5">
            <section aria-live="polite" className="rounded-3xl border border-border bg-surface p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-text-muted">Selected clause · {selected.id} of 12</p>
              <div className="mt-4 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl text-lg font-bold text-white" style={{ backgroundColor: selected.color }}>
                  {selected.id}
                </span>
                <div>
                  <h2 className="text-xl font-bold">{selected.title}</h2>
                  <p className="mt-1 text-sm font-medium" style={{ color: selected.color }}>{selected.category}</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-text-secondary">{selected.summary}</p>

              <div className="mt-6 border-t border-border pt-5">
                <h3 className="text-sm font-bold">Connected clauses</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {edges.filter(([from, to]) => from === selected.id || to === selected.id)
                    .flatMap(([from, to]) => [from, to].filter((id) => id !== selected.id))
                    .map((id) => clauses.find((clause) => clause.id === id)!)
                    .map((clause) => (
                      <button key={clause.id} onClick={() => selectClause(clause.id)}
                        className="rounded-xl border border-border px-3 py-2 text-left text-xs font-semibold transition-colors hover:border-primary hover:bg-primary-soft focus-visible:outline-2 focus-visible:outline-primary">
                        {clause.id}. {clause.title}
                      </button>
                    ))}
                  {edges.every(([from, to]) => from !== selected.id && to !== selected.id) && (
                    <p className="text-sm text-text-secondary">No direct connections shown.</p>
                  )}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={`/skim#clause-${selected.id}`} className="rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white hover:bg-primary-hover">
                  Read summary →
                </Link>
                <Link href={`/focus#clause-${selected.id}`} className="rounded-xl border border-border px-4 py-3 text-sm font-semibold hover:border-primary">
                  Read full clause
                </Link>
              </div>
            </section>

            <section className="rounded-3xl border border-border bg-primary-soft/50 p-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Agreement at a glance</p>
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between gap-4"><span className="text-sm text-text-secondary">Monthly rent</span><strong>₹12,000</strong></div>
                <div className="flex items-center justify-between gap-4"><span className="text-sm text-text-secondary">Security deposit</span><strong>₹24,000</strong></div>
                <div className="flex items-center justify-between gap-4"><span className="text-sm text-text-secondary">Agreement term</span><strong>11 months</strong></div>
                <div className="flex items-center justify-between gap-4"><span className="text-sm text-text-secondary">Notice period</span><strong>30 days</strong></div>
              </div>
              <p className="mt-4 border-t border-primary/15 pt-4 text-xs leading-5 text-text-secondary">
                Demonstration content only. Actual rental terms depend on the signed agreement and applicable law.
              </p>
            </section>
          </aside>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-surface p-5">
          <div>
            <h2 className="font-semibold">Prefer another perspective?</h2>
            <p className="mt-1 text-sm text-text-secondary">Switch views without losing your place in the agreement.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/skim" className="rounded-xl border border-border px-4 py-3 text-sm font-semibold hover:border-primary">Explore SKIM</Link>
            <Link href="/focus" className="rounded-xl border border-border px-4 py-3 text-sm font-semibold hover:border-primary">Open FOCUS</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
