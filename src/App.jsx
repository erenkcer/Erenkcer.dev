import { useEffect } from 'react';

import {
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Database,
  Download,
  ExternalLink,
  FileText,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  PackageSearch,
  PanelTop,
  ShieldCheck,
  Sparkles,
  Code2,
  Workflow,
  Wrench
} from 'lucide-react';

const cvPath = '/Muhammed_Eren_Kocer_CV.pdf';
const adadafiyatUrl = 'https://adadafiyat.com';

const projectStack = ['Python', 'FastAPI', 'PostgreSQL', 'Scrapers', 'Cloudflare', 'Heroku', 'SEO'];

const heroStats = [
  { label: 'Products indexed', value: '12k+' },
  { label: 'Project focus', value: 'Price intelligence' },
  { label: 'Deployment', value: 'Production live' }
];

const projectMetrics = [
  { value: '12k+', label: 'products', icon: PackageSearch },
  { value: 'SEO', label: 'ready pages', icon: PanelTop },
  { value: 'Admin', label: 'analytics', icon: BarChart3 },
  { value: 'Live', label: 'deployment', icon: ShieldCheck }
];

const buildCards = [
  {
    title: 'Web Systems',
    description: 'Clean frontend surfaces, admin workflows, SEO-ready pages, and production-minded deployments.',
    icon: Layers3
  },
  {
    title: 'Automation & Scraping',
    description: 'Scraper pipelines for product, price, and merchant data with practical cleanup workflows.',
    icon: Workflow
  },
  {
    title: 'Odoo / Store Operations',
    description: 'Odoo XML/QWeb support, invoice template adjustments, stock workflows, and store system help.',
    icon: Wrench
  }
];

const nowCards = [
  {
    title: 'Python & automation',
    description: 'Building scraper pipelines, product data cleanup workflows, and small tools.',
    icon: Workflow
  },
  {
    title: 'Web systems',
    description: 'Creating clean frontend surfaces, SEO pages, analytics-aware flows, and production deployments.',
    icon: Code2
  },
  {
    title: 'Odoo & store operations',
    description: 'Supporting business workflows around stock, invoices, product data, and store systems.',
    icon: Wrench
  }
];

const skillGroups = [
  {
    title: 'Backend & Data',
    skills: ['Python', 'SQL', 'FastAPI', 'PostgreSQL', 'Web Scraping']
  },
  {
    title: 'Frontend',
    skills: ['HTML/CSS', 'JavaScript', 'Responsive UI', 'SEO Pages']
  },
  {
    title: 'Tools & Deployment',
    skills: ['Git/GitHub', 'Heroku', 'Cloudflare', 'Google Analytics/Search Console']
  },
  {
    title: 'Odoo & IT Support',
    skills: ['Odoo XML/QWeb', 'Technical Support', 'Store Systems', 'PC Assembly', 'Troubleshooting']
  }
];

function App() {
  useMouseGlow();

  return (
    <main id="top" className="relative min-h-screen overflow-hidden bg-ink text-white">
      <BackgroundFX />
      <Header />

      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-5 pb-12 pt-24 sm:px-8 sm:pb-14 sm:pt-28 lg:px-10">
        <div className="grid items-center gap-9 lg:grid-cols-[0.98fr_1.02fr] lg:gap-14">
          <div className="reveal">
            <div className="status-badge">
              <span className="status-dot" />
              Available for Junior / Odoo / Web Systems roles
            </div>

            <p className="mt-6 flex items-center gap-2 text-sm uppercase tracking-[0.24em] text-cyan/85">
              <MapPin size={16} aria-hidden="true" />
              Magusa / Northern Cyprus
            </p>

            <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-[1.02] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Practical{' '}
              <span className="text-gradient">web systems.</span>
              <span className="block">Built with product thinking.</span>
            </h1>

            <p className="mt-5 max-w-3xl text-lg font-semibold text-white/82 sm:text-xl">
              Muhammed Eren Kocer
              <span className="block pt-2 text-base font-medium text-white/58 sm:text-lg">
                Junior Software Developer | IT Support & Odoo/Web Systems
              </span>
            </p>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/64 sm:text-lg">
              I build automation, Odoo workflows, and web systems around real store operations.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PremiumLink href={adadafiyatUrl} label="Visit AdadaFiyat" icon={ArrowUpRight} primary />
              <PremiumLink href={cvPath} label="View CV" icon={FileText} />
              <PremiumLink href="mailto:erenkcer@gmail.com" label="Contact" icon={Mail} />
            </div>
          </div>

          <HeroVisual />
        </div>
      </section>

      <FeaturedProject />
      <WhatIBuild />
      <Now />
      <Skills />
      <CVSection />
      <Contact />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-ink/72 backdrop-blur-2xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10" aria-label="Main navigation">
        <a href="#top" className="group flex items-center gap-3 rounded-full focus-ring">
          <span className="logo-mark">EK</span>
          <span className="hidden text-sm text-white/70 sm:block">erenkcer.dev</span>
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          <a className="nav-link" href="#project">Project</a>
          <a className="nav-link" href="#build">Build</a>
          <a className="nav-link" href="#skills">Skills</a>
          <a className="nav-link" href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="reveal delay-150 relative">
      <div className="hero-shell">
        <div className="hero-window">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/42">Featured build</p>
              <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">AdadaFiyat</h2>
            </div>
            <div className="live-chip">
              <span />
              Live
            </div>
          </div>

          <div className="terminal-card">
            <div className="mb-4 flex items-center gap-2 text-white/42">
              <span className="h-3 w-3 rounded-full bg-[#ff6b6b]" />
              <span className="h-3 w-3 rounded-full bg-[#ffcf6b]" />
              <span className="h-3 w-3 rounded-full bg-[#72f6b2]" />
            </div>
            <div className="space-y-2.5 font-mono text-sm">
              <p><span className="text-mint">$</span> scrape:prices --region=northern-cyprus</p>
              <p className="text-white/58">product data · seo pages · admin analytics</p>
              <p><span className="text-cyan">status</span> production deployment ready</p>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <Stat key={stat.label} {...stat} />
            ))}
          </div>

          <div className="mt-4 rounded-3xl border border-white/10 bg-white/[0.045] p-4">
            <div className="flex items-center gap-3">
              <Database className="text-amber" size={22} aria-hidden="true" />
              <p className="text-sm leading-6 text-white/68">
                A live product platform shaped around price data, search visibility, analytics, and useful operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeaturedProject() {
  return (
    <Section id="project" eyebrow="Featured Project" title="AdadaFiyat, presented like a product.">
      <div className="project-card premium-panel grid gap-8 p-5 sm:p-7 lg:grid-cols-[1fr_0.82fr] lg:p-9">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-mint/25 bg-mint/[0.10] px-3 py-1.5 text-sm font-medium text-mint">
            <Sparkles size={15} aria-hidden="true" />
            Live price comparison platform
          </div>
          <h3 className="font-display text-4xl font-semibold text-white sm:text-5xl">AdadaFiyat</h3>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/66">
            A live price comparison platform for Northern Cyprus, built with Python scraper pipelines, FastAPI,
            PostgreSQL, admin dashboard workflows, SEO-ready product pages, sitemap, analytics, Cloudflare Pages, and
            Heroku.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {projectStack.map((item) => (
              <span key={item} className="stack-pill">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <PremiumLink href={adadafiyatUrl} label="Live Site" icon={ExternalLink} primary />
            <PremiumLink href="mailto:erenkcer@gmail.com?subject=AdadaFiyat%20case%20study" label="Case Study" icon={FileText} />
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {projectMetrics.map((metric) => (
            <Metric key={metric.label} {...metric} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function WhatIBuild() {
  return (
    <Section id="build" eyebrow="What I Build" title="Software that is useful before it is flashy.">
      <div className="grid gap-4 lg:grid-cols-3">
        {buildCards.map(({ title, description, icon: Icon }) => (
          <article key={title} className="lift-card premium-panel p-6">
            <div className="icon-tile">
              <Icon size={24} aria-hidden="true" />
            </div>
            <h3 className="mt-8 font-display text-2xl font-semibold text-white">{title}</h3>
            <p className="mt-4 text-sm leading-7 text-white/62">{description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="A concise toolkit for web systems and operations.">
      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <article key={group.title} className="premium-panel p-5 sm:p-6">
            <div className="mb-5 flex items-center gap-3">
              <CheckCircle2 className="text-mint" size={20} aria-hidden="true" />
              <h3 className="font-display text-lg font-semibold text-white">{group.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Now() {
  return (
    <Section id="now" eyebrow="Now" title="Currently focused on practical systems.">
      <div className="grid gap-4 lg:grid-cols-3">
        {nowCards.map(({ title, description, icon: Icon }) => (
          <article key={title} className="lift-card premium-panel p-6">
            <div className="mb-8 flex items-center justify-between gap-4">
              <div className="icon-tile">
                <Icon size={23} aria-hidden="true" />
              </div>
              <span className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1 text-xs uppercase tracking-[0.16em] text-white/55">
                Focus
              </span>
            </div>
            <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
            <p className="mt-4 text-sm leading-7 text-white/62">{description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function CVSection() {
  return (
    <Section eyebrow="CV" title="Want the full details?">
      <div className="cv-panel premium-panel p-6 sm:p-8">
        <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber/25 bg-amber/[0.10] px-3 py-1 text-sm text-amber">
              <FileText size={15} aria-hidden="true" />
              PDF available
            </div>
            <p className="max-w-2xl text-base leading-7 text-white/66">
              The page stays portfolio-focused. The downloadable CV keeps education, professional experience, and the
              complete formal snapshot one click away.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <PremiumLink href={cvPath} label="View CV" icon={FileText} primary />
            <PremiumLink href={cvPath} label="Download CV" icon={Download} download="Muhammed_Eren_Kocer_CV.pdf" />
          </div>
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let’s build practical software.">
      <div className="contact-panel premium-panel p-6 text-center sm:p-10">
        <p className="mx-auto max-w-2xl text-base leading-8 text-white/66">
          Open to junior software, Odoo/web systems, IT support, and product-focused development opportunities.
        </p>
        <div className="mx-auto mt-8 flex max-w-3xl flex-col gap-3 sm:flex-row sm:justify-center">
          <PremiumLink href="mailto:erenkcer@gmail.com" label="Email Me" icon={Mail} primary />
          <PremiumLink href="https://www.linkedin.com/in/eren-kocer" label="LinkedIn" icon={Linkedin} />
          <PremiumLink href={adadafiyatUrl} label="AdadaFiyat" icon={ArrowUpRight} />
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="relative mx-auto max-w-7xl px-5 pb-10 pt-8 text-sm text-white/42 sm:px-8 lg:px-10">
      <div className="flex flex-col gap-3 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Muhammed Eren Kocer. All rights reserved.</p>
        <div className="flex gap-4">
          <a className="hover:text-white" href="mailto:erenkcer@gmail.com">Email</a>
          <a className="hover:text-white" href="https://www.linkedin.com/in/eren-kocer" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="section-shell reveal">
      <div className="mb-8 sm:mb-10">
        <p className="mb-3 text-sm uppercase tracking-[0.24em] text-cyan/80">{eyebrow}</p>
        <h2 className="max-w-4xl font-display text-3xl font-semibold leading-tight text-white sm:text-5xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function PremiumLink({ href, label, icon: Icon, primary = false, download }) {
  return (
    <a
      href={href}
      download={download}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className={primary ? 'premium-button' : 'secondary-button'}
      aria-label={label}
    >
      <span>{label}</span>
      <Icon size={18} aria-hidden="true" />
    </a>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
      <p className="text-xs uppercase tracking-[0.18em] text-white/42">{label}</p>
      <p className="mt-2 text-sm font-semibold text-white">{value}</p>
    </div>
  );
}

function Metric({ value, label, icon: Icon }) {
  return (
    <div className="lift-card rounded-3xl border border-white/10 bg-black/30 p-5">
      <Icon className="mb-8 text-cyan" size={24} aria-hidden="true" />
      <p className="font-display text-3xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-sm text-white/52">{label}</p>
    </div>
  );
}

function BackgroundFX() {
  return (
    <div className="background-fx pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      <div className="base-depth" />
      <div className="aurora-field" />
      <div className="hero-spotlight" />
      <div className="light-beam" />
      <div className="grid-mask absolute inset-0" />
      <div className="noise-mask absolute inset-0" />
      <div className="mouse-glow" />
      <div className="vignette-layer" />
    </div>
  );
}

function useMouseGlow() {
  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reduceMotion) {
      return undefined;
    }

    let frame = 0;
    const updateGlow = (event) => {
      if (frame) {
        return;
      }
      frame = window.requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`);
        document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`);
        frame = 0;
      });
    };

    window.addEventListener('pointermove', updateGlow, { passive: true });
    return () => {
      window.removeEventListener('pointermove', updateGlow);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);
}

export default App;
