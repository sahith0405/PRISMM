"use client";

import { useEffect, useState } from "react";

type ReadingTheme = "standard" | "warm" | "contrast";

const clauses = [
  {
    title: "1. Parties to the Agreement",
    text: "This fictional residential rental agreement demonstrates how PRISMM presents document information. The parties and terms are illustrative and do not represent a real agreement.",
  },
  {
    title: "2. Property and Permitted Use",
    text: "The property is intended for residential use by the tenant. The tenant agrees to maintain the property in reasonable condition and use it according to the agreed residential purpose.",
  },
  {
    title: "3. Monthly Rent",
    text: "For this fictional example, the monthly rent is ₹12,000, payable on or before the fifth day of each month using a payment method agreed upon by both parties.",
  },
  {
    title: "4. Security Deposit",
    text: "For this fictional example, the tenant provides a security deposit of ₹24,000. Any deductions and return of the deposit would depend on the actual agreement and applicable law.",
  },
  {
    title: "5. Agreement Duration",
    text: "The illustrative agreement lasts eleven months from the agreed commencement date. Any extension or renewal would follow the terms agreed upon for the actual tenancy.",
  },
  {
    title: "6. Utilities and Services",
    text: "The parties should establish responsibility for electricity, water, internet, and other services. For this demonstration, the tenant is assumed to pay charges associated with their own consumption.",
  },
  {
    title: "7. Maintenance Responsibilities",
    text: "The tenant should keep the property reasonably clean and report significant maintenance problems promptly. Repair responsibilities depend on the actual agreement and applicable law.",
  },
  {
    title: "8. Property Modifications",
    text: "The tenant should obtain any required permission before making significant alterations to the property. The actual agreement should clarify which modifications require approval.",
  },
  {
    title: "9. Property Access",
    text: "The property owner and tenant should agree on reasonable arrangements for inspections and repairs. Access must follow the actual agreement and applicable legal requirements.",
  },
  {
    title: "10. Notice Period",
    text: "For this fictional example, the agreement refers to a thirty-day notice period. Actual notice requirements depend on the agreement and applicable law.",
  },
  {
    title: "11. Early Termination",
    text: "The parties should document conditions for ending the agreement early, including applicable notice requirements and any agreed financial obligations.",
  },
  {
    title: "12. Agreement Review",
    text: "Both parties should review the complete agreement, confirm that its details are accurate, and retain a copy. Qualified legal advice may be helpful before signing a real agreement.",
  },
];

export default function FocusReader() {
  const [fontSize, setFontSize] = useState(18);
  const [lineSpacing, setLineSpacing] = useState(1.8);
  const [theme, setTheme] = useState<ReadingTheme>("standard");
  const [distractionFree, setDistractionFree] = useState(false);
  const [preferencesLoaded, setPreferencesLoaded] = useState(false);

  // Restore saved preferences before allowing any writes to browser storage.
  useEffect(() => {
    try {
      const saved = localStorage.getItem("prismm-focus-preferences");

      if (saved) {
        const preferences = JSON.parse(saved);

        if (
          typeof preferences.fontSize === "number" &&
          preferences.fontSize >= 14 &&
          preferences.fontSize <= 26
        ) {
          setFontSize(preferences.fontSize);
        }

        if (
          typeof preferences.lineSpacing === "number" &&
          [1.5, 1.8, 2.1].includes(preferences.lineSpacing)
        ) {
          setLineSpacing(preferences.lineSpacing);
        }

        if (
          ["standard", "warm", "contrast"].includes(preferences.theme)
        ) {
          setTheme(preferences.theme as ReadingTheme);
        }
      }
    } catch {
      // Ignore unavailable or invalid browser storage.
    } finally {
      setPreferencesLoaded(true);
    }
  }, []);

  // Persist preferences only after the initial restoration has finished.
  useEffect(() => {
    if (!preferencesLoaded) return;

    try {
      localStorage.setItem(
        "prismm-focus-preferences",
        JSON.stringify({ fontSize, lineSpacing, theme })
      );
    } catch {
      // The reader still works if browser storage is unavailable.
    }
  }, [fontSize, lineSpacing, theme, preferencesLoaded]);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function updateProgress() {
      const height =
        document.documentElement.scrollHeight - window.innerHeight;

      setProgress(
        height <= 0
          ? 100
          : Math.min(
              100,
              Math.max(0, Math.round((window.scrollY / height) * 100)),
            ),
      );
    }

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const themes = {
    standard: {
      page: "bg-white text-slate-900",
      secondary: "text-slate-600",
      border: "border-slate-200",
      panel: "bg-slate-50",
    },
    warm: {
      page: "bg-[#FFF8EC] text-[#433629]",
      secondary: "text-[#665746]",
      border: "border-[#E8DCC8]",
      panel: "bg-[#F8EFDF]",
    },
    contrast: {
      page: "bg-black text-white",
      secondary: "text-white",
      border: "border-white/40",
      panel: "bg-zinc-900",
    },
  };

  const current = themes[theme];

  return (
    <main className={`min-h-screen ${current.page}`}>
      <div
        className="fixed inset-x-0 top-0 z-50 h-1 bg-slate-300"
        role="progressbar"
        aria-label="Document reading progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progress}
      >
        <div
          className="h-full bg-violet-600 transition-[width]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {!distractionFree && (
        <header className={`border-b ${current.border}`}>
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5">
            <a href="/" className="text-xl font-bold tracking-tight">
              PRISMM<span className="text-violet-600">.</span>
            </a>

            <span className="hidden text-sm opacity-70 sm:block">
              FOCUS READING MODE
            </span>

            <a
              href="/#workspace"
              className={`rounded-lg border ${current.border} px-4 py-2 text-sm`}
            >
              Exit reader
            </a>
          </div>
        </header>
      )}

      <div className="mx-auto max-w-6xl px-5 py-8 sm:py-12">
        {!distractionFree && (
          <div className="mb-8">
            <p className="text-xs font-bold tracking-[0.18em] text-violet-600">
              YOUR SPACE TO READ
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Make reading feel right.
            </h1>
            <p className={`mt-3 max-w-2xl leading-7 ${current.secondary}`}>
              Personalize your reading environment. Your preferences change
              the presentation, not the document&apos;s meaning.
            </p>
          </div>
        )}

        <div
          className={`grid items-start gap-8 ${
            distractionFree
              ? "grid-cols-1"
              : "lg:grid-cols-[250px_minmax(0,720px)] lg:justify-center"
          }`}
        >
          {!distractionFree && (
            <aside
              aria-label="Reading preferences"
              className={`rounded-2xl border ${current.border} p-5 lg:sticky lg:top-6`}
            >
              <h2 className="font-semibold">Reading preferences</h2>

              <fieldset className="mt-6">
                <legend className="text-sm font-medium">Text size</legend>
                <p className={`mt-1 text-xs ${current.secondary}`}>
                  {fontSize}px
                </p>
                <div className="mt-3 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setFontSize((n) => Math.max(14, n - 2))}
                    disabled={fontSize <= 14}
                    aria-label="Decrease text size"
                    className={`rounded-lg border ${current.border} px-4 py-2 disabled:opacity-40`}
                  >
                    A−
                  </button>
                  <button
                    type="button"
                    onClick={() => setFontSize((n) => Math.min(26, n + 2))}
                    disabled={fontSize >= 26}
                    aria-label="Increase text size"
                    className={`rounded-lg border ${current.border} px-4 py-2 disabled:opacity-40`}
                  >
                    A+
                  </button>
                </div>
              </fieldset>

              <fieldset className="mt-6">
                <legend className="text-sm font-medium">Line spacing</legend>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {[
                    { label: "Comfortable", value: 1.6 },
                    { label: "Expanded", value: 2.1 },
                  ].map((option) => (
                    <button
                      key={option.label}
                      type="button"
                      onClick={() => setLineSpacing(option.value)}
                      aria-pressed={lineSpacing === option.value}
                      className={`rounded-lg border px-2 py-2 text-sm ${
                        current.border
                      } ${
                        lineSpacing === option.value
                          ? "border-violet-600 bg-violet-600 text-white"
                          : ""
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </fieldset>

              <fieldset className="mt-6">
                <legend className="text-sm font-medium">Reading theme</legend>
                <div className="mt-3 space-y-2">
                  {[
                    { label: "Standard", value: "standard" },
                    { label: "Warm paper", value: "warm" },
                    { label: "High contrast", value: "contrast" },
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() =>
                        setTheme(option.value as ReadingTheme)
                      }
                      aria-pressed={theme === option.value}
                      className={`w-full rounded-lg border px-3 py-2.5 text-left text-sm ${
                        current.border
                      } ${
                        theme === option.value
                          ? "border-violet-600 ring-1 ring-violet-600"
                          : ""
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </fieldset>

              <label className="mt-6 flex items-start gap-3 border-t border-current/10 pt-5">
                <input
                  type="checkbox"
                  checked={distractionFree}
                  onChange={(event) =>
                    setDistractionFree(event.target.checked)
                  }
                  className="mt-1 h-4 w-4 accent-violet-600"
                />
                <span>
                  <span className="block text-sm font-medium">
                    Distraction-free
                  </span>
                  <span className={`mt-1 block text-xs ${current.secondary}`}>
                    Hide the surrounding interface.
                  </span>
                </span>
              </label>

              <button
                type="button"
                onClick={() => {
                  setFontSize(18);
                  setLineSpacing(1.8);
                  setTheme("standard");
                  setDistractionFree(false);
                }}
                className={`mt-5 w-full rounded-lg border ${current.border} px-3 py-2.5 text-sm`}
              >
                Reset preferences
              </button>
            </aside>
          )}

          <article
            className={`min-w-0 rounded-2xl border ${current.border} ${
              distractionFree ? "mx-auto w-full max-w-3xl" : ""
            }`}
          >
            <div className={`border-b ${current.border} p-6 sm:p-9`}>
              <span className="rounded-full border border-current/20 px-3 py-1.5 text-xs font-medium">
                FICTIONAL DEMO DOCUMENT
              </span>

              <h2 className="mt-7 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Residential Rental Agreement
              </h2>

              <p className={`mt-4 leading-7 ${current.secondary}`}>
                A fictional document for exploring the PRISMM reading
                experience. All amounts and terms are illustrative.
              </p>

              <p className={`mt-3 text-sm ${current.secondary}`}>
                {clauses.length} sections · Adjustable typography · Reading
                themes
              </p>
            </div>

            <div
              className="space-y-9 p-6 sm:p-9"
              style={{ fontSize: `${fontSize}px`, lineHeight: lineSpacing }}
            >
              {clauses.map((clause, index) => (
                <section
                  key={clause.title}
                  id={`clause-${index + 1}`}
                  aria-labelledby={`clause-heading-${index + 1}`}
                  className="scroll-mt-8"
                >
                  <h3
                    id={`clause-heading-${index + 1}`}
                    className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl"
                    style={{ lineHeight: 1.35 }}
                  >
                    {clause.title}
                  </h3>
                  <p className={current.secondary}>{clause.text}</p>
                </section>
              ))}
            </div>

            <div className={`border-t ${current.border} p-6 sm:p-9`}>
              <p className={`text-xs leading-6 ${current.secondary}`}>
                Disclaimer: This fictional educational demonstration is not
                a real rental agreement and does not constitute legal advice.
              </p>
              <a
                href="/#workspace"
                className={`mt-5 inline-flex rounded-lg border ${current.border} px-4 py-2.5 text-sm`}
              >
                ← Back to workspace
              </a>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
