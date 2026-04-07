import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const chartData = [
  { name: 'Jan', collections: 72 },
  { name: 'Feb', collections: 78 },
  { name: 'Mar', collections: 81 },
  { name: 'Apr', collections: 85 },
  { name: 'May', collections: 89 },
  { name: 'Jun', collections: 93 },
];

const HERO_SLIDE_INTERVAL_MS = 3000;

const heroSlides: { src: string; alt: string }[] = [
  {
    src: `${import.meta.env.BASE_URL}hero-slides/slide-01.png`,
    alt: 'Property Os tenant vetting centre',
  },
  {
    src: `${import.meta.env.BASE_URL}hero-slides/slide-03.png`,
    alt: 'Property Os contractor job board',
  },
  {
    src: `${import.meta.env.BASE_URL}hero-slides/slide-04.png`,
    alt: 'Property Os agent dashboard',
  },
  {
    src: `${import.meta.env.BASE_URL}hero-slides/slide-05.png`,
    alt: 'Property Os property listings',
  },
  {
    src: `${import.meta.env.BASE_URL}hero-slides/slide-06.png`,
    alt: 'Property Os document manager',
  },
];

const HeroAppSlideshow: React.FC = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % heroSlides.length);
    }, HERO_SLIDE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-1 shadow-2xl ring-1 ring-white/10 backdrop-blur-sm">
      <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        </div>
        <span className="ml-2 text-xs text-slate-500">property-os.app</span>
      </div>
      <div
        className="relative mx-auto h-[291px] w-full max-w-[532px] overflow-hidden rounded-b-xl bg-slate-950"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        role="region"
        aria-roledescription="carousel"
        aria-label="Product screenshots"
      >
        {heroSlides.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            width={532}
            height={291}
            className={`absolute inset-0 h-full w-full object-cover object-left-top transition-opacity duration-300 ease-out motion-reduce:transition-none ${
              i === active ? 'z-10 opacity-100' : 'z-0 opacity-0'
            }`}
            loading={i === 0 ? 'eager' : 'lazy'}
            decoding="async"
          />
        ))}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-slate-950/90 to-transparent pb-3 pt-8">
          <div className="pointer-events-auto flex justify-center gap-1.5 px-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show screenshot ${i + 1} of ${heroSlides.length}`}
                aria-current={i === active ? 'true' : undefined}
                className={`h-1.5 rounded-full transition-all ${
                  i === active ? 'w-5 bg-teal-400' : 'w-1.5 bg-white/45 hover:bg-white/70'
                }`}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/** Gradients shared by wedge bubbles (teal / slate / cyan only) */
const WEDGE_BUBBLE_GRADIENTS = [
  'from-teal-500/12 to-cyan-900/20',
  'from-teal-600/15 to-slate-900/60',
  'from-teal-500/20 to-slate-800/40',
  'from-cyan-500/10 to-teal-900/25',
];

/** Single-use “wedges”—adopt one capability without committing to the full platform */
const platformWedges = [
  {
    title: 'AI rental assistant',
    body: 'Ask questions, draft wording, and sanity-check notices—useful even if you keep listings and spreadsheets elsewhere.',
  },
  {
    title: 'Tenant vetting',
    body: 'Screen and score applicants in a structured flow; you can lean on this alone before you move other processes in.',
  },
  {
    title: 'Maintenance & work orders',
    body: 'Log issues, assign work, and track status in one thread—without adopting full payments or listings on day one.',
  },
  {
    title: 'Rent reminders & collections',
    body: 'Automated reminders and a clear view of what’s due—so you tighten collections even if the rest of the stack is light.',
  },
  {
    title: 'Deposits & wallet',
    body: 'Track deposit-related flows and hand-offs where you enable them—other modules stay optional.',
  },
  {
    title: 'Document hub',
    body: 'Central place for leases, addenda, and notices—minimal ops overhead for teams that mainly need order, not automation.',
  },
  {
    title: 'Lease generation',
    body: 'Assemble or generate lease packs as a focused workflow—then plug into broader ops when you’re ready.',
  },
  {
    title: 'Messaging & enquiries',
    body: 'One channel for tenant or agent conversations so context doesn’t scatter—without running a full CRM.',
  },
  {
    title: 'Listings & enquiries',
    body: 'Market vacancies and manage inbound interest only; expand into vetting and leases when it makes sense.',
  },
  {
    title: 'Contractor workflow',
    body: 'Quotes, jobs, and field updates for partners—landlords can stay thin on other modules while work gets done.',
  },
  {
    title: 'Analytics & reporting',
    body: 'Occupancy, arrears, and collection trends for owners who mainly need visibility—even if day-to-day is outsourced.',
  },
  {
    title: 'Calendar & scheduling',
    body: 'Viewings and maintenance windows with a small footprint—useful when you only want scheduling discipline.',
  },
];

/** Ellipse ring: radii chosen so 12 × ~8rem bubbles clear each other and stay inside inset + float */
function wedgeBubbleRingPosition(index: number, total: number): { left: string; top: string } {
  const rx = 36;
  const ry = 33;
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
  const left = 50 + rx * Math.cos(angle);
  const top = 50 + ry * Math.sin(angle);
  return { left: `${left}%`, top: `${top}%` };
}

type Wedge = (typeof platformWedges)[number];

const WedgeBubble: React.FC<{ item: Wedge; accentClass: string; className?: string }> = ({
  item,
  accentClass,
  className = '',
}) => (
  <div tabIndex={0} className={`group outline-none ${className}`}>
    <div
      className={`relative w-max max-w-[8rem] overflow-hidden rounded-full border-2 border-white bg-gradient-to-br px-3 py-2.5 shadow-lg transition-all duration-500 ease-out group-hover:z-[60] group-hover:max-w-[min(calc(100vw-2.5rem),22rem)] group-hover:rounded-2xl group-hover:px-5 group-hover:py-4 group-hover:shadow-2xl group-hover:ring-2 group-hover:ring-teal-400/30 group-focus-visible:z-[60] group-focus-visible:max-w-[min(calc(100vw-2.5rem),22rem)] group-focus-visible:rounded-2xl group-focus-visible:px-5 group-focus-visible:py-4 group-focus-visible:shadow-2xl group-focus-visible:ring-2 group-focus-visible:ring-teal-400/30 sm:max-w-[8.5rem] ${accentClass}`}
    >
      <p className="text-center text-[10px] font-semibold leading-tight text-slate-900 sm:text-[11px]">
        {item.title}
      </p>
      <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-out group-hover:max-h-[220px] group-hover:pt-3 group-hover:opacity-100 group-focus-within:max-h-[220px] group-focus-within:pt-3 group-focus-within:opacity-100">
        <p className="text-left text-xs leading-relaxed text-slate-700">{item.body}</p>
      </div>
    </div>
  </div>
);

const roles = [
  {
    label: 'Landlords',
    hint: 'Portfolio control',
    items: [
      'List vacancies, track leases, and store documents in one place.',
      'Run tenant vetting, deposits, and rent reminders without spreadsheet chaos.',
      'See portfolio analytics—occupancy, arrears, and collection trends.',
    ],
  },
  {
    label: 'Tenants',
    hint: 'Rent & requests',
    items: [
      'View rent schedules and get timely payment reminders.',
      'Log maintenance issues and follow progress in a single thread.',
      'Keep lease paperwork and messages organised.',
    ],
  },
  {
    label: 'Agents',
    hint: 'Listings & deals',
    items: [
      'Manage enquiries and hand off qualified applicants to landlords.',
      'Coordinate showings and listing updates from a shared workspace.',
      'Stay aligned on deals without losing context across tools.',
    ],
  },
  {
    label: 'Contractors',
    hint: 'Work orders',
    items: [
      'Receive scoped jobs with clear site and access details.',
      'Share quotes, updates, and completion notes in one flow.',
      'Get paid and referenced without chasing messages elsewhere.',
    ],
  },
];

type WaitlistStatus = 'idle' | 'loading' | 'success' | 'error';

const App: React.FC = () => {
  const [email, setEmail] = useState('');
  const [waitlistStatus, setWaitlistStatus] = useState<WaitlistStatus>('idle');

  const handleWaitlistSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    setWaitlistStatus('loading');
    try {
      const body = new URLSearchParams({ 'form-name': 'waitlist', email }).toString();
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });
      if (res.ok) {
        setWaitlistStatus('success');
        setEmail('');
      } else {
        setWaitlistStatus('error');
      }
    } catch {
      setWaitlistStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      {/* Sticky nav */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/75 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-semibold tracking-tight text-teal-700">Property Os</span>
            <span className="hidden text-xs font-medium uppercase tracking-widest text-slate-400 sm:inline">
              SA rentals
            </span>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#roles" className="transition hover:text-teal-700">
              Roles
            </a>
            <a href="#platform" className="transition hover:text-teal-700">
              Platform
            </a>
            <Link to="/flow" className="transition hover:text-teal-700">
              Flow
            </Link>
            <a href="#insights" className="transition hover:text-teal-700">
              Insights
            </a>
          </nav>
          <div className="flex shrink-0 flex-wrap items-center justify-end gap-2">
            <Link
              to="/login"
              className="text-base font-medium text-slate-600 transition hover:text-teal-700"
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
              href="#download"
              className="rounded-full bg-teal-600 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-teal-700 sm:px-4 sm:text-sm"
            >
              Download
            </a>
          </div>
        </div>
      </header>

      {/* Hero — full-bleed dark, abstract preview */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div
          className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-teal-500/25 blur-[100px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-[90px]"
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
          <div>
            <p className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-teal-200/90">
              AI-powered · South African rental market
            </p>
            <h1 className="font-serif text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              One operating system for landlords, tenants, agents, and contractors.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              Take the grind out of managing rentals—AI and automation handle the heavy lifting, while leases,
              payments, and maintenance stay organised in one place instead of scattered across chats and spreadsheets.
            </p>
            {waitlistStatus === 'success' ? (
              <div id="early-access" className="mt-10 max-w-lg rounded-xl border border-teal-400/30 bg-teal-500/10 px-5 py-4">
                <p className="text-sm font-semibold text-teal-300">You're on the list 🎉</p>
                <p className="mt-1 text-xs text-slate-400">We'll be in touch with updates and launch timing.</p>
              </div>
            ) : (
              <form
                id="early-access"
                name="waitlist"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleWaitlistSubmit}
                className="mt-10 flex max-w-lg flex-col gap-3 sm:flex-row sm:items-center"
              >
                <input type="hidden" name="form-name" value="waitlist" />
                <input type="hidden" name="bot-field" />
                <input
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.co.za"
                  className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-teal-400/50 focus:outline-none focus:ring-2 focus:ring-teal-500/30"
                />
                <button
                  type="submit"
                  disabled={waitlistStatus === 'loading'}
                  className="rounded-xl bg-teal-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-400 disabled:opacity-60"
                >
                  {waitlistStatus === 'loading' ? 'Submitting…' : 'Join the waitlist'}
                </button>
              </form>
            )}
            {waitlistStatus === 'error' && (
              <p className="mt-2 text-xs text-red-400">Something went wrong—please try again.</p>
            )}
            <p className="mt-3 text-xs text-slate-500">
              No spam—just product updates and launch timing for early partners.
            </p>
          </div>

          {/* App screenshots carousel (same frame size as prior mock) */}
          <div className="relative">
            <HeroAppSlideshow />
          </div>
        </div>
      </section>

      {/* Roles */}
      <section id="roles" className="scroll-mt-24 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="font-serif text-3xl font-medium text-slate-900 sm:text-4xl">Who it’s for</h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Same data model, different dashboards—so nobody is fighting the wrong interface.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {roles.map((r) => (
              <div
                key={r.label}
                tabIndex={0}
                className="group flex min-w-[min(100%,16rem)] flex-1 flex-col rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition-all duration-300 hover:z-10 hover:border-teal-200 hover:shadow-md focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/40"
              >
                <span className="text-sm font-semibold text-slate-900">{r.label}</span>
                <span className="mt-1 text-xs text-slate-500">{r.hint}</span>
                <ul
                  className="mt-0 max-h-0 list-none space-y-2 overflow-hidden pl-0 text-xs leading-relaxed text-slate-600 opacity-0 transition-[max-height,opacity,margin,padding] duration-300 ease-out group-hover:mt-3 group-hover:max-h-72 group-hover:opacity-100 group-hover:pb-1 group-focus-within:mt-3 group-focus-within:max-h-72 group-focus-within:opacity-100 group-focus-within:pb-1"
                >
                  {r.items.map((line) => (
                    <li key={line} className="relative pl-3 before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-teal-500">
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-10 md:grid-cols-4">
          {[
            {
              k: 'EASE OF USE',
              v: 'A clear, guided experience—landlords, tenants, and teams get work done without wrestling menus or juggling tools.',
            },
            {
              k: 'Free Download',
              v: 'Get the app at no cost so teams can try Property Os on real devices, with updates delivered automatically.',
            },
            { k: 'Every stakeholder', v: 'Landlords, tenants, agents & contractors' },
            {
              k: 'Limitless Capability',
              v: 'Start lean with the features you need today, then expand—vetting, maintenance, documents, and more in one platform.',
            },
          ].map((s) => (
            <div key={s.k} className="text-center md:text-left">
              <p className="text-xs font-semibold leading-snug tracking-wide text-slate-900">{s.k}</p>
              <p className="mt-1.5 text-sm font-normal leading-relaxed text-slate-600">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Platform — floating wedge bubbles (expand on hover / focus) */}
      <section id="platform" className="scroll-mt-24 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-700">Platform</p>
            <h2 className="mt-2 font-serif text-3xl font-medium text-slate-900 sm:text-4xl">
              Looking to use one feature?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Each bubble is a module you can adopt on its own. Hover or focus to expand and read what it covers—nothing
              opens until you choose it.
            </p>
          </div>

          {/* Mobile / narrow: simple grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
            {platformWedges.map((item, i) => (
              <WedgeBubble
                key={item.title}
                item={item}
                accentClass={WEDGE_BUBBLE_GRADIENTS[i % WEDGE_BUBBLE_GRADIENTS.length]}
              />
            ))}
          </div>

          {/* Desktop: floating cloud — hub centred; bubbles on a ring (teal / slate / cyan only) */}
          <div
            className="relative mx-auto hidden min-h-[700px] overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-teal-50/50 via-white to-slate-100/90 shadow-inner lg:block"
            aria-label="Feature modules"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-50"
              style={{
                backgroundImage: `radial-gradient(ellipse 70% 55% at 50% 45%, rgba(45, 212, 191, 0.08) 0%, transparent 55%),
                  radial-gradient(circle at 50% 50%, rgba(148, 163, 184, 0.06) 0%, transparent 50%)`,
              }}
            />
            {/* Inner safe area so bubbles + float stay inside the rounded frame */}
            <div className="absolute inset-8 min-h-[600px]">
              <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 w-[min(85%,12rem)] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-teal-200/70 bg-gradient-to-br from-teal-50/90 to-white/95 px-4 py-3.5 text-center shadow-md backdrop-blur-[2px]">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-teal-700">Property OS</span>
                <span className="mt-1 block text-[12px] leading-snug text-slate-600">
                  12 modules — drift and explore
                </span>
              </div>
              {platformWedges.map((item, i) => {
                const pos = wedgeBubbleRingPosition(i, platformWedges.length);
                const accentClass = WEDGE_BUBBLE_GRADIENTS[i % WEDGE_BUBBLE_GRADIENTS.length];
                return (
                  <div
                    key={item.title}
                    className="bubble-float absolute z-10"
                    style={
                      {
                        left: pos.left,
                        top: pos.top,
                        '--float-delay': `${i * 0.35}s`,
                        '--float-duration': `${7 + (i % 4) * 0.5}s`,
                      } as React.CSSProperties
                    }
                  >
                    <WedgeBubble item={item} accentClass={accentClass} />
                  </div>
                );
              })}
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-xl text-center text-sm text-slate-500">
            Tip: On touch, tap a bubble to focus it—same expand behaviour as hover on desktop.
          </p>
        </div>
      </section>

      {/* Insights chart */}
      <section id="insights" className="scroll-mt-24 border-t border-slate-200 bg-slate-100/80 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-10 lg:grid-cols-5 lg:items-end">
            <div className="lg:col-span-2">
              <h2 className="font-serif text-3xl font-medium text-slate-900 sm:text-4xl">Portfolio signal</h2>
              <p className="mt-4 text-lg text-slate-600">
                Example trend: on-time collection rate over time—so you spot drift before arrears stack up.
              </p>
            </div>
            <div className="min-h-[280px] min-w-0 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm lg:col-span-3">
              <ResponsiveContainer width="100%" height="100%" minHeight={260}>
                <LineChart data={chartData} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#64748b' }} />
                  <YAxis tick={{ fontSize: 12, fill: '#64748b' }} domain={[60, 100]} />
                  <Tooltip
                    contentStyle={{
                      borderRadius: '12px',
                      border: '1px solid #e2e8f0',
                      fontSize: '12px',
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="collections"
                    name="On-time %"
                    stroke="#0d9488"
                    strokeWidth={2.5}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section id="download" className="bg-teal-700 py-16 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center">
          <div>
            <h2 className="font-serif text-2xl font-medium sm:text-3xl">Ready to shape Property Os with us?</h2>
            <p className="mt-2 max-w-xl text-teal-100">
              We’re onboarding design partners in South Africa—landlords and agencies who want fewer tools and clearer rental operations.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="mailto:sales@propertyos.app?subject=Property%20Os%20—%20sales%20enquiry"
              className="rounded-full border-2 border-white/80 bg-transparent px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact Sales
            </a>
            <a
              href="#download"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-teal-800 shadow-sm transition hover:bg-teal-50"
            >
              Download
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-950 py-10 text-center text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Property Os. Built for smarter rental operations.</p>
      </footer>
    </div>
  );
};

export default App;
