"use client";

const facts = [
  {
    category: "MONTHLY PAYMENT",
    title: "Monthly rent",
    value: "₹12,000",
    description: "Illustrative monthly payment",
    icon: "₹",
  },
  {
    category: "SECURITY",
    title: "Security deposit",
    value: "₹24,000",
    description: "Illustrative refundable deposit",
    icon: "◈",
  },
  {
    category: "DURATION",
    title: "Agreement duration",
    value: "11 months",
    description: "Illustrative agreement term",
    icon: "◷",
  },
  {
    category: "NOTICE",
    title: "Notice period",
    value: "30 days",
    description: "Illustrative notice requirement",
    icon: "↗",
  },
];

const obligations = [
  {
    party: "TENANT",
    title: "Pay rent on time",
    description:
      "The example agreement specifies rent payment by the fifth day of each month.",
    clause: 3,
  },
  {
    party: "TENANT",
    title: "Maintain the property",
    description:
      "Keep the property reasonably clean and report significant maintenance problems.",
    clause: 7,
  },
  {
    party: "BOTH PARTIES",
    title: "Clarify responsibilities",
    description:
      "Review maintenance, utilities, access, and termination conditions in the actual agreement.",
    clause: 6,
  },
  {
    party: "BOTH PARTIES",
    title: "Review before signing",
    description:
      "Confirm the details and retain a copy of the final agreement.",
    clause: 12,
  },
];

const clauseSummaries = [
  {
    number: 1,
    title: "Parties to the agreement",
    summary: "Identifies the parties and purpose of the agreement.",
  },
  {
    number: 2,
    title: "Property and permitted use",
    summary: "Explains the property's intended residential use.",
  },
  {
    number: 3,
    title: "Monthly rent",
    summary: "Describes the example rent amount and payment date.",
  },
  {
    number: 4,
    title: "Security deposit",
    summary: "Describes the example deposit and the need to clarify its return.",
  },
  {
    number: 5,
    title: "Agreement duration",
    summary: "Explains the example eleven-month term.",
  },
  {
    number: 6,
    title: "Utilities and services",
    summary: "Highlights the need to clarify responsibility for service charges.",
  },
  {
    number: 7,
    title: "Maintenance responsibilities",
    summary: "Describes property care and reporting maintenance problems.",
  },
  {
    number: 8,
    title: "Property modifications",
    summary: "Explains that some property alterations may require permission.",
  },
  {
    number: 9,
    title: "Property access",
    summary: "Highlights arrangements for inspections and repairs.",
  },
  {
    number: 10,
    title: "Notice period",
    summary: "References the example thirty-day notice period.",
  },
  {
    number: 11,
    title: "Early termination",
    summary: "Highlights conditions for ending an agreement early.",
  },
  {
    number: 12,
    title: "Agreement review",
    summary: "Encourages reviewing the complete document before signing.",
  },
];

export default function SkimReader() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-border bg-surface/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <a href="/" className="text-xl font-bold tracking-tight">
            PRISMM<span className="text-primary">.</span>
          </a>

          <span className="hidden text-xs font-bold tracking-[0.16em] text-text-secondary sm:block">
            SKIM READING MODE
          </span>

          <a
            href="/focus"
            className="rounded-xl border border-border px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-surface-secondary"
          >
            Open FOCUS →
          </a>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
        <div className="mb-10 max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-3.5 py-2 text-xs font-bold tracking-wide text-primary">
            <span aria-hidden="true">↗</span>
            THE ESSENTIALS, FIRST
          </div>

          <h1 className="text-4xl font-semibold leading-tight tracking-[-0.055em] sm:text-5xl lg:text-6xl">
            Get the picture.
            <br />
            <span className="text-primary">Skip the overwhelm.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-text-secondary sm:text-lg">
            Start with the important numbers, responsibilities, and clauses.
            Explore the complete document whenever you need more detail.
          </p>
        </div>

        <section aria-labelledby="document-heading">
          <div className="flex flex-col justify-between gap-4 border-b border-border pb-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.15em] text-text-muted">
                YOUR DOCUMENT
              </p>

              <h2
                id="document-heading"
                className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl"
              >
                Residential Rental Agreement
              </h2>

              <p className="mt-2 text-sm text-text-secondary">
                Fictional demonstration · 12 clauses
              </p>
            </div>

            <a
              href="/focus"
              className="inline-flex min-h-11 w-fit items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              Read full document
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        <section className="mt-9" aria-labelledby="facts-heading">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold tracking-[0.14em] text-primary">
                01 / KEY FACTS
              </p>

              <h2
                id="facts-heading"
                className="mt-2 text-2xl font-semibold tracking-tight"
              >
                The numbers that matter.
              </h2>
            </div>

            <span className="hidden rounded-full border border-border px-3 py-1.5 text-xs text-text-secondary sm:inline-flex">
              4 essential details
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {facts.map((fact) => (
              <article
                key={fact.title}
                className="group rounded-2xl border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md sm:p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-lg font-semibold text-primary">
                    {fact.icon}
                  </span>

                  <span className="text-[10px] font-bold tracking-[0.12em] text-text-muted">
                    {fact.category}
                  </span>
                </div>

                <p className="mt-6 text-sm text-text-secondary">
                  {fact.title}
                </p>

                <p className="mt-2 text-3xl font-semibold tracking-tight">
                  {fact.value}
                </p>

                <p className="mt-3 text-xs leading-5 text-text-muted">
                  {fact.description}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-4 text-xs leading-5 text-text-muted">
            All figures and terms are illustrative examples, not verified
            legal or financial advice.
          </p>
        </section>

        <section className="mt-14" aria-labelledby="obligations-heading">
          <div className="mb-5">
            <p className="text-xs font-bold tracking-[0.14em] text-primary">
              02 / RESPONSIBILITIES
            </p>

            <h2
              id="obligations-heading"
              className="mt-2 text-2xl font-semibold tracking-tight"
            >
              What needs attention?
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-7 text-text-secondary">
              A quick overview of responsibilities mentioned in the fictional
              agreement. Check the full wording before making decisions.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {obligations.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-border bg-surface p-5 sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-success/10 text-lg text-success">
                    ✓
                  </span>

                  <div className="min-w-0">
                    <span className="text-[10px] font-bold tracking-[0.14em] text-text-muted">
                      {item.party}
                    </span>

                    <h3 className="mt-1 font-semibold">{item.title}</h3>

                    <p className="mt-2 text-sm leading-6 text-text-secondary">
                      {item.description}
                    </p>

                    <a
                      href={`/focus#clause-${item.clause}`}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                    >
                      View clause {item.clause}
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14" aria-labelledby="clauses-heading">
          <div className="mb-5">
            <p className="text-xs font-bold tracking-[0.14em] text-primary">
              03 / CLAUSE GUIDE
            </p>

            <h2
              id="clauses-heading"
              className="mt-2 text-2xl font-semibold tracking-tight"
            >
              Find the section you need.
            </h2>

            <p className="mt-2 text-sm leading-7 text-text-secondary">
              Scan all twelve sections without reading every paragraph.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            {clauseSummaries.map((clause) => (
              <article
                key={clause.number}
                className="flex flex-col gap-3 border-b border-border p-4 last:border-b-0 sm:flex-row sm:items-center sm:gap-5 sm:p-5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-surface-secondary text-xs font-bold text-text-secondary">
                  {String(clause.number).padStart(2, "0")}
                </span>

                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold">{clause.title}</h3>

                  <p className="mt-1 text-sm leading-6 text-text-secondary">
                    {clause.summary}
                  </p>
                </div>

                <a
                  href={`/focus#clause-${clause.number}`}
                  className="inline-flex w-fit shrink-0 items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
                >
                  Read clause
                  <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-primary/15 bg-primary-soft/60 p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-bold tracking-[0.15em] text-primary">
                NEED MORE CONTEXT?
              </p>

              <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                Go beyond the summary.
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-7 text-text-secondary">
                Open FOCUS to read the complete sample document with
                adjustable text size, spacing, and reading themes.
              </p>
            </div>

            <a
              href="/focus"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              Open FOCUS
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        <footer className="mt-12 border-t border-border pt-6">
          <p className="text-xs leading-6 text-text-muted">
            Disclaimer: This is a fictional educational demonstration. The
            summary is illustrative, may omit context, and is not legal advice.
            Review the complete agreement and applicable law before making
            decisions.
          </p>
        </footer>
      </div>
    </main>
  );
}
