import React from 'react';
import { Link } from 'react-router-dom';

const ROLE_CARD: Record<
  string,
  { blurb: string; accent: string; bg: string; border: string }
> = {
  Landlords: {
    blurb: 'Owners, trusts, and portfolio leads—leases and cash flow on the line.',
    accent: 'text-amber-900',
    bg: 'bg-amber-500/10',
    border: 'border-amber-400/25',
  },
  Tenants: {
    blurb: 'Residents who need clarity on rent, access, and maintenance.',
    accent: 'text-teal-900',
    bg: 'bg-teal-500/10',
    border: 'border-teal-400/25',
  },
  Agents: {
    blurb: 'Listing, mandates, and handoffs between enquiries and signed leases.',
    accent: 'text-violet-900',
    bg: 'bg-violet-500/10',
    border: 'border-violet-400/25',
  },
  Contractors: {
    blurb: 'Field teams—quotes, jobs, and proof of work without chasing context.',
    accent: 'text-orange-900',
    bg: 'bg-orange-500/10',
    border: 'border-orange-400/25',
  },
};

/** Decorative hub: spokes to each role */
const FlowHubDiagram: React.FC = () => (
  <div className="relative mx-auto max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 p-6 shadow-2xl ring-1 ring-white/5 backdrop-blur-sm sm:max-w-none sm:p-8">
    <svg
      className="mx-auto h-auto w-full max-w-md text-white/30 sm:max-w-lg"
      viewBox="0 0 400 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <line x1="200" y1="170" x2="200" y2="58" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="200" y1="170" x2="62" y2="170" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="200" y1="170" x2="338" y2="170" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="200" y1="170" x2="200" y2="282" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      <circle cx="200" cy="170" r="44" className="fill-teal-500/20 stroke-teal-400/50" strokeWidth="1.5" />
      <circle cx="200" cy="58" r="8" className="fill-amber-400/80" />
      <circle cx="62" cy="170" r="8" className="fill-violet-400/80" />
      <circle cx="338" cy="170" r="8" className="fill-teal-400/80" />
      <circle cx="200" cy="282" r="8" className="fill-orange-400/80" />
    </svg>
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center pb-4 pt-2 sm:pb-6">
      <div className="rounded-2xl border border-teal-400/40 bg-gradient-to-br from-teal-600/30 to-slate-900/90 px-5 py-3 text-center shadow-lg backdrop-blur-md">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-200/90">Centre of gravity</p>
        <p className="mt-1 text-sm font-semibold text-white">Property Os</p>
      </div>
    </div>
    <div className="pointer-events-none absolute left-1/2 top-[10%] -translate-x-1/2 text-center sm:top-[11%]">
      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-100/90">Landlords</span>
    </div>
    <div className="pointer-events-none absolute left-[8%] top-1/2 -translate-y-1/2 text-center sm:left-[10%]">
      <span className="text-[10px] font-bold uppercase tracking-wider text-violet-100/90">Agents</span>
    </div>
    <div className="pointer-events-none absolute right-[8%] top-1/2 -translate-y-1/2 text-center sm:right-[10%]">
      <span className="text-[10px] font-bold uppercase tracking-wider text-teal-100/90">Tenants</span>
    </div>
    <div className="pointer-events-none absolute bottom-[10%] left-1/2 -translate-x-1/2 text-center sm:bottom-[11%]">
      <span className="text-[10px] font-bold uppercase tracking-wider text-orange-100/90">Contractors</span>
    </div>
  </div>
);

const FlowPage: React.FC = () => {
  const uniqueRoles = ['Landlords', 'Tenants', 'Agents', 'Contractors'] as const;

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 antialiased">
      <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-white/90 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
          <div className="flex items-baseline gap-2">
            <Link
              to="/"
              className="text-lg font-semibold tracking-tight text-teal-700 transition hover:text-teal-800"
            >
              Property Os
            </Link>
            <span className="hidden text-xs font-medium uppercase tracking-widest text-slate-400 sm:inline">
              SA rentals
            </span>
          </div>
          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
            <a href="/#roles" className="transition hover:text-teal-700">
              Roles
            </a>
            <a href="/#platform" className="transition hover:text-teal-700">
              Platform
            </a>
            <span className="font-semibold text-teal-700" aria-current="page">
              Flow
            </span>
            <a href="/#insights" className="transition hover:text-teal-700">
              Insights
            </a>
          </nav>
          <div className="flex shrink-0 flex-wrap items-center justify-end gap-2">
            <Link
              to="/login"
              className="text-sm font-medium text-slate-600 transition hover:text-teal-700"
            >
              Sign in
            </Link>
            <a
              href="mailto:sales@propertyos.app?subject=Property%20Os%20—%20sales%20enquiry"
              className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-teal-300 hover:text-teal-800 sm:px-4 sm:text-sm"
            >
              Contact Sales
            </a>
            <a
              href="/#download"
              className="rounded-full bg-teal-600 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-teal-700 sm:px-4 sm:text-sm"
            >
              Download
            </a>
          </div>
        </div>
      </header>

      {/* Compact hero: headline + stat pills only */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.35) 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
          aria-hidden
        />
        <div className="pointer-events-none absolute -left-24 top-0 h-56 w-56 rounded-full bg-teal-500/20 blur-[80px]" aria-hidden />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-violet-500/12 blur-[70px]" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-5 pb-8 pt-8 sm:pb-10 sm:pt-10">
          <h1 className="max-w-3xl font-serif text-3xl font-medium leading-[1.12] tracking-tight sm:text-4xl lg:max-w-2xl lg:text-[2.25rem]">
            One surface where landlords, tenants, agents, and contractors actually meet.
          </h1>
          <div className="mt-5 flex flex-wrap gap-2 sm:mt-6 sm:gap-2.5">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200 sm:text-sm">
              <span className="font-semibold text-white">4</span> roles
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200 sm:text-sm">
              <span className="font-semibold text-white">5</span> core handoffs
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200 sm:text-sm">
              <span className="font-semibold text-white">1</span> platform thread
            </span>
          </div>
        </div>
      </section>

      {/* Roles + diagram — clear top margin so nothing overlaps the hero */}
      <section className="relative mx-auto max-w-6xl px-5 pb-16 pt-10 sm:pb-20 sm:pt-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <div className="order-2 grid gap-4 sm:grid-cols-2 lg:order-1">
            {uniqueRoles.map((role) => {
              const meta = ROLE_CARD[role];
              return (
                <article
                  key={role}
                  className={`rounded-2xl border ${meta.border} ${meta.bg} p-5 shadow-sm backdrop-blur-sm transition hover:shadow-md`}
                >
                  <h2 className={`font-serif text-xl font-medium ${meta.accent}`}>{role}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{meta.blurb}</p>
                </article>
              );
            })}
          </div>
          <div className="order-1 lg:order-2 lg:pt-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Lens</p>
            <p className="mt-2 font-serif text-2xl font-medium text-slate-900 sm:text-3xl">
              Who orbits the workspace
            </p>
            <p className="mt-3 text-slate-600">
              Each role plugs into the same Property Os core. The diagram is simplified—real workflows have many more
              touchpoints between these parties.
            </p>
            <div className="mt-8">
              <FlowHubDiagram />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-950 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row">
          <p className="text-center text-sm text-slate-500 sm:text-left">
            Ready to see this in your portfolio? Start on the home page or talk to sales.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/"
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Back to home
            </Link>
            <a
              href="mailto:sales@propertyos.app?subject=Property%20Os%20—%20flow%20%26%20demo"
              className="rounded-full bg-teal-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-teal-400"
            >
              Talk to us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FlowPage;
