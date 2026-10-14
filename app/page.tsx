const readingModes = [
  {
    number: "01",
    name: "SKIM",
    description: "Find the important details instantly.",
    detail: "Key facts · Deadlines · Obligations",
    symbol: "↗",
  },
  {
    number: "02",
    name: "MAP",
    description: "See how everything connects.",
    detail: "Relationships · Clauses · Timelines",
    symbol: "⌘",
  },
  {
    number: "03",
    name: "FOCUS",
    description: "Read comfortably, your way.",
    detail: "Typography · Spacing · Accessibility",
    symbol: "◉",
  },
];

const documentFacts = [
  {
    label: "Security deposit",
    value: "₹24,000",
    category: "FINANCIAL",
  },
  {
    label: "Agreement duration",
    value: "11 months",
    category: "DURATION",
  },
  {
    label: "Notice period",
    value: "30 days",
    category: "IMPORTANT DATE",
  },
];

const clauses = [
  "Rent & payment terms",
  "Security deposit",
  "Maintenance responsibilities",
  "Termination & notice",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      {/* Navigation */}
      <header className="border-b border-border bg-surface">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a
            href="#home"
            aria-label="PRISMM home"
            className="flex items-center gap-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-xl font-bold text-white">
              P
            </span>

            <span className="text-xl font-bold tracking-[-0.06em]">
              PRISMM<span className="text-primary">.</span>
            </span>
          </a>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-8 text-sm font-medium text-text-secondary md:flex"
          >
            <a
              href="#workspace"
              className="transition-colors hover:text-primary"
            >
              Workspace
            </a>

            <a
              href="#how-it-works"
              className="transition-colors hover:text-primary"
            >
              How it works
            </a>

            <a
              href="#accessibility"
              className="transition-colors hover:text-primary"
            >
              Accessibility
            </a>
          </nav>

          <a
            href="#workspace"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover focus-visible:outline-offset-4"
          >
            Explore demo
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative mx-auto max-w-[1440px] px-5 pb-14 pt-16 sm:px-8 sm:pb-20 sm:pt-24 lg:px-12 lg:pt-28"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-primary-soft opacity-70 blur-3xl"
        />

        <div className="relative max-w-4xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-2 text-xs font-semibold tracking-wide text-text-secondary shadow-sm">
            <span className="h-2 w-2 rounded-full bg-success" />
            A NEW WAY TO UNDERSTAND DOCUMENTS
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.08] tracking-[-0.065em] sm:text-6xl lg:text-7xl">
            One document.
            <br />
            <span className="text-primary">Every perspective.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-text-secondary sm:text-lg">
            Some people skim. Some need the big picture. Others want space to
            focus. PRISMM helps you explore the same information in the way
            that works for you.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#workspace"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-primary-hover focus-visible:outline-offset-4"
            >
              Explore the experience
              <span aria-hidden="true">→</span>
            </a>

            <a
              href="#how-it-works"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-border bg-surface px-6 py-3 text-sm font-semibold text-text-primary transition-colors hover:bg-surface-secondary"
            >
              Discover the three modes
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-text-secondary">
            <span className="flex items-center gap-2">
              <span className="text-success">✓</span>
              Designed for different reading needs
            </span>

            <span className="flex items-center gap-2">
              <span className="text-success">✓</span>
              Three ways to explore information
            </span>
          </div>
        </div>
      </section>

      {/* Workspace */}
      <section
        id="workspace"
        aria-labelledby="workspace-heading"
        className="border-y border-border bg-surface-secondary/70"
      >
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                YOUR READING WORKSPACE
              </p>

              <h2
                id="workspace-heading"
                className="text-3xl font-semibold tracking-[-0.045em] sm:text-4xl"
              >
                Information, made clearer.
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-text-secondary">
                Start with a sample rental agreement and discover how one
                document can offer multiple ways to understand its contents.
              </p>
            </div>

            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-3 py-2 text-xs font-medium text-text-secondary">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              Interactive modes coming next
            </span>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(320px,0.8fr)]">
            {/* Document preview */}
            <article className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
              <div className="flex flex-col justify-between gap-4 border-b border-border px-6 py-5 sm:flex-row sm:items-center sm:px-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-2xl text-primary">
                    <span aria-hidden="true">▤</span>
                  </div>

                  <div>
                    <h3 className="font-semibold tracking-tight">
                      Residential Rental Agreement
                    </h3>

                    <p className="mt-1 text-sm text-text-secondary">
                      Sample document · 12 clauses
                    </p>
                  </div>
                </div>

                <span className="w-fit rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-text-secondary">
                  DEMO DOCUMENT
                </span>
              </div>

              <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-[1fr_0.85fr]">
                <div>
                  <p className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-text-muted">
                    DOCUMENT OVERVIEW
                  </p>

                  <h4 className="text-2xl font-semibold tracking-tight">
                    Your agreement,
                    <br />
                    at a glance.
                  </h4>

                  <p className="mt-4 text-sm leading-7 text-text-secondary">
                    Rental agreements contain important responsibilities,
                    payments, and deadlines. PRISMM is designed to help you
                    find and understand those details.
                  </p>

                  <div className="mt-7 space-y-4">
                    {clauses.map((clause, index) => (
                      <div
                        key={clause}
                        className="flex items-center gap-3 text-sm"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-surface-secondary text-xs font-semibold text-text-secondary">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="text-text-primary">{clause}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-background p-5 sm:p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <h4 className="text-sm font-semibold">
                      Important details
                    </h4>

                    <span className="text-xs text-text-muted">PREVIEW</span>
                  </div>

                  <div className="space-y-3">
                    {documentFacts.map((fact) => (
                      <div
                        key={fact.label}
                        className="rounded-xl border border-border bg-surface p-4"
                      >
                        <p className="text-[10px] font-bold tracking-[0.13em] text-text-muted">
                          {fact.category}
                        </p>

                        <p className="mt-2 text-sm text-text-secondary">
                          {fact.label}
                        </p>

                        <p className="mt-1 text-xl font-semibold tracking-tight">
                          {fact.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p className="mt-4 text-xs leading-5 text-text-muted">
                    Illustrative figures for a fictional agreement.
                  </p>
                </div>
              </div>

              <div className="border-t border-border bg-surface-secondary/50 px-6 py-4 sm:px-8">
                <p className="text-xs leading-5 text-text-secondary">
                  This fictional document is for demonstration purposes only
                  and does not constitute legal advice.
                </p>
              </div>
            </article>

            {/* Reading modes */}
            <aside
              id="how-it-works"
              className="flex flex-col gap-4"
              aria-labelledby="modes-heading"
            >
              <div className="mb-1">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-text-muted">
                  THREE WAYS TO READ
                </p>

                <h3
                  id="modes-heading"
                  className="mt-2 text-xl font-semibold tracking-tight"
                >
                  Choose your perspective.
                </h3>
              </div>

              {readingModes.map((mode, index) => {
                const href = {
                  SKIM: "/skim",
                  MAP: "/map",
                  FOCUS: "/focus",
                }[mode.name];

                return (
                <a
                  key={mode.name}
                  href={href}
                  aria-label={`Open ${mode.name} reading mode`}
                  className={`group block rounded-2xl border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${
                    index === 0
                      ? "border-primary/30 ring-1 ring-primary/10"
                      : "border-border"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`flex h-9 w-9 items-center justify-center rounded-xl text-lg ${
                            index === 0
                              ? "bg-primary-soft text-primary"
                              : index === 1
                                ? "bg-accent-cyan-soft text-sky-700"
                                : "bg-surface-secondary text-text-primary"
                          }`}
                        >
                          {mode.symbol}
                        </span>

                        <h4 className="font-bold tracking-wide">
                          {mode.name}
                        </h4>
                      </div>

                      <p className="mt-3 text-sm leading-6 text-text-secondary">
                        {mode.description}
                      </p>
                    </div>

                    <span className="pt-1 text-xs font-medium text-text-muted">
                      {mode.number}
                    </span>
                  </div>

                  <p className="mt-4 border-t border-border pt-3 text-xs leading-5 text-text-muted">
                    {mode.detail}
                  </p>
                </a>
                );
              })}

              <div
                id="accessibility"
                className="rounded-2xl border border-primary/15 bg-primary-soft/60 p-5"
              >
                <p className="text-sm font-semibold text-text-primary">
                  Reading should work for you.
                </p>

                <p className="mt-2 text-sm leading-6 text-text-secondary">
                  Our goal is to make information easier to explore through
                  clear layouts, accessible interactions, and adaptable
                  reading experiences.
                </p>
              </div>

              <a
                href="/focus"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover focus-visible:outline-offset-4"
              >
                Try FOCUS reading mode
                <span aria-hidden="true">→</span>
              </a>
            </aside>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <a
            href="#home"
            className="w-fit text-lg font-bold tracking-[-0.06em]"
          >
            PRISMM<span className="text-primary">.</span>
          </a>

          <p className="text-sm text-text-secondary">
            One document. Every perspective.
          </p>

          <p className="text-xs text-text-muted">
            A design project exploring adaptive reading.
          </p>
        </div>
      </footer>
    </main>
  );
}