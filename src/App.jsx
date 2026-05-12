import { useEffect } from 'react';

import {
  ArrowUpRight,
  Code2,
  Database,
  Download,
  ExternalLink,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  PanelTop,
  Wrench
} from 'lucide-react';

const cvPath = '/Muhammed_Eren_Kocer_CV.pdf';
const adadafiyatUrl = 'https://adadafiyat.com';
const githubUrl = 'https://github.com/erenkcer';

const projectStack = ['Python', 'FastAPI', 'PostgreSQL', 'Scraping', 'Cloudflare', 'Heroku', 'SEO'];

const focusItems = [
  'Python backend geliştirme',
  'Odoo modül ve iş akışı geliştirme',
  'Veritabanı tasarımı',
  'Küçük otomasyon araçları',
  'Deployment ve proje yapısı'
];

const projectNotes = [
  {
    title: 'Problem / amaç',
    text: 'Kıbrıs’taki ürün fiyatlarını daha kolay takip edebilmek ve fiyat verisini daha düzenli göstermek.'
  },
  {
    title: 'Ne yaptım',
    text: 'Ürün, kategori ve fiyat verileri için backend yapısı kurdum; arama, listeleme, SEO sayfaları ve temel yönetim akışlarını geliştirdim.'
  },
  {
    title: 'Kullandığım teknolojiler',
    text: projectStack.join(', ')
  },
  {
    title: 'Bu projede ne öğrendim',
    text: 'Veri modelleme, scraper akışlarını sade tutma, kullanıcı akışı, deployment ve canlı projede küçük kararların etkisi.'
  }
];

const otherProjects = [
  {
    title: 'Odoo iş akışı düzenlemeleri',
    problem: 'Mağaza ve stok süreçlerinde tekrar eden bazı adımları daha anlaşılır hale getirmek.',
    work: 'Model, view ve rapor tarafında küçük düzenlemeler; fatura/sablon tarafında ihtiyaca göre iyileştirmeler.',
    tech: 'Odoo, Python, XML/QWeb',
    learned: 'ERP tarafında teknik kararların gerçek iş akışıyla birlikte düşünülmesi gerektiğini daha iyi gördüm.'
  },
  {
    title: 'Küçük otomasyon araçları',
    problem: 'Elle yapıldığında zaman alan veri temizleme ve kontrol işlerini azaltmak.',
    work: 'Python ile dosya işleme, basit veri kontrolü ve tekrar eden görevleri hızlandıran scriptler yazdım.',
    tech: 'Python, SQL, Git, Linux',
    learned: 'Küçük araçların bile doğru yerde kullanıldığında ciddi zaman kazandırabileceğini öğrendim.'
  }
];

const skillGroups = [
  {
    title: 'Backend',
    skills: ['Python', 'FastAPI', 'REST API', 'PostgreSQL', 'MySQL']
  },
  {
    title: 'Odoo',
    skills: ['Odoo model yapısı', 'View düzenleme', 'İş akışı otomasyonları', 'Modül geliştirme']
  },
  {
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'React']
  },
  {
    title: 'Tools',
    skills: ['Git', 'Docker temelleri', 'Linux', 'Cloudflare', 'Heroku']
  }
];

function App() {
  useMouseGlow();

  return (
    <main id="top" className="relative min-h-screen overflow-hidden bg-ink text-white">
      <BackgroundFX />
      <Header />

      <section className="relative mx-auto flex min-h-[88vh] w-full max-w-6xl flex-col justify-center px-5 pb-12 pt-24 sm:px-8 sm:pb-14 sm:pt-28 lg:px-10">
        <div className="grid items-center gap-9 lg:grid-cols-[1fr_0.88fr] lg:gap-12">
          <div className="reveal">
            <div className="status-badge">
              <span className="status-dot" />
              Junior Software Developer
            </div>

            <p className="mt-6 flex items-center gap-2 text-sm text-cyan/80">
              <MapPin size={16} aria-hidden="true" />
              Mağusa / Kuzey Kıbrıs
            </p>

            <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.08] text-white sm:text-5xl">
              Merhaba, ben Eren.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Python, web sistemleri ve Odoo tarafında kendimi geliştiren junior software developer’ım. Tekrar eden
              işleri otomatikleştiren, veriyi daha düzenli hale getiren ve gerçek probleme dokunan küçük ama işe yarar
              sistemler geliştirmeye odaklanıyorum.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <SimpleLink href="#projects" label="Projelerimi Gör" icon={ArrowUpRight} primary />
              <SimpleLink href="#contact" label="İletişime Geç" icon={Mail} />
            </div>
          </div>

          <HeroVisual />
        </div>
      </section>

      <About />
      <Focus />
      <Projects />
      <Skills />
      <CVSection />
      <Contact />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-ink/88 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-10" aria-label="Ana navigasyon">
        <a href="#top" className="group flex items-center gap-3 rounded-full focus-ring">
          <span className="logo-mark">EK</span>
          <span className="hidden text-sm text-white/70 sm:block">erenkcer.dev</span>
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          <a className="nav-link" href="#about">Hakkımda</a>
          <a className="nav-link" href="#projects">Projeler</a>
          <a className="nav-link" href="#skills">Yetenekler</a>
          <a className="nav-link" href="#contact">İletişim</a>
        </div>
      </nav>
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="reveal delay-150 relative">
      <div className="hero-window">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-white/42">Şu an üzerinde çalıştığım ana proje</p>
            <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">AdadaFiyat</h2>
          </div>
          <a className="live-chip focus-ring" href={adadafiyatUrl} target="_blank" rel="noreferrer">
            Live
          </a>
        </div>

        <div className="screenshot-box">
          <PanelTop className="text-cyan" size={24} aria-hidden="true" />
          <div>
            <p className="font-medium text-white">Screenshot alanı</p>
            <p className="mt-1 text-sm leading-6 text-white/58">
              Burada AdadaFiyat’ın fiyat listesi, kategori veya ürün sayfası gösterilebilir.
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.035] p-4">
          <div className="flex items-start gap-3">
            <Database className="mt-1 text-amber" size={20} aria-hidden="true" />
            <p className="text-sm leading-6 text-white/68">
              Ürün, kategori ve fiyat verilerini düzenli tutmaya odaklanan canlı bir fiyat karşılaştırma projesi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="Hakkımda" title="Kodun gerçek bir işi kolaylaştırdığı yerler ilgimi çekiyor.">
      <div className="plain-panel max-w-4xl space-y-5 p-6 sm:p-8">
        <p>
          Ben Muhammed Eren Koçer. Python ağırlıklı backend geliştirme, Odoo ERP süreçleri ve web tabanlı sistemlerle
          ilgileniyorum.
        </p>
        <p>
          Kod yazarken en çok gerçek bir süreci basitleştiren işler ilgimi çekiyor: tekrar eden işleri
          otomatikleştirmek, veriyi düzenli tutmak, küçük ama kullanışlı paneller ve servisler geliştirmek.
        </p>
        <p>
          Şu anda AdadaFiyat ve benzeri projeler üzerinden hem teknik tarafımı hem de ürün düşünme becerimi
          geliştirmeye çalışıyorum.
        </p>
      </div>
    </Section>
  );
}

function Focus() {
  return (
    <Section id="focus" eyebrow="Odak" title="Şu ara odaklandıklarım">
      <div className="focus-list">
        {focusItems.map((item) => (
          <div key={item} className="focus-item">
            <Code2 size={18} aria-hidden="true" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" eyebrow="Projeler" title="Küçük başlayan, gerçek ihtiyaca dokunan işler.">
      <div className="project-card plain-panel p-5 sm:p-7">
        <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm text-cyan/80">Canlı proje</p>
            <h3 className="mt-2 font-display text-3xl font-semibold text-white sm:text-4xl">AdadaFiyat</h3>
            <p className="mt-5 leading-8 text-white/68">
              AdadaFiyat, Kıbrıs’taki ürün fiyatlarını daha kolay takip edebilmek için geliştirdiğim bir fiyat
              karşılaştırma projesi. İlk hedefim ürün, kategori ve fiyat verilerini düzenli tutan; kullanıcı için
              anlaşılır ve hızlı bir yapı kurmaktı.
            </p>
            <p className="mt-4 leading-8 text-white/68">
              Bu projede veri modelleme, backend yapısı, kullanıcı akışı ve deployment tarafında pratik kazandım.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <SimpleLink href={adadafiyatUrl} label="Live demo" icon={ExternalLink} primary />
              <SimpleLink href={githubUrl} label="GitHub" icon={Github} />
            </div>
          </div>

          <div className="grid gap-3">
            {projectNotes.map((note) => (
              <article key={note.title} className="note-card">
                <h4>{note.title}</h4>
                <p>{note.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        {otherProjects.map((project) => (
          <ProjectMiniCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}

function ProjectMiniCard({ project }) {
  return (
    <article className="plain-panel p-5 sm:p-6">
      <h3 className="font-display text-2xl font-semibold text-white">{project.title}</h3>
      <div className="mt-5 space-y-4 text-sm leading-7 text-white/66">
        <ProjectLine label="Problem / amaç" text={project.problem} />
        <ProjectLine label="Ne yaptım" text={project.work} />
        <ProjectLine label="Teknolojiler" text={project.tech} />
        <ProjectLine label="Ne öğrendim" text={project.learned} />
      </div>
      <p className="mt-5 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-white/58">
        Teknik not: Bu çalışmalar daha çok pratik, iş akışı ve bakım kolaylığı üzerine odaklandı.
      </p>
    </article>
  );
}

function ProjectLine({ label, text }) {
  return (
    <p>
      <span className="font-semibold text-white/82">{label}: </span>
      {text}
    </p>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Yetenekler" title="Üzerinde çalıştığım teknolojiler">
      <p className="-mt-4 mb-7 max-w-3xl leading-8 text-white/66">
        Kendimi en çok Python backend, Odoo ve iş süreci otomasyonları tarafında geliştiriyorum. Aşağıdaki
        teknolojilerle gerçek projelerde pratik yapıyorum.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <article key={group.title} className="plain-panel p-5 sm:p-6">
            <div className="mb-5 flex items-center gap-3">
              <Wrench className="text-mint" size={18} aria-hidden="true" />
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

function CVSection() {
  return (
    <Section eyebrow="CV" title="Daha detaylı bilgi için">
      <div className="plain-panel p-6 sm:p-8">
        <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-base leading-7 text-white/66">
            Eğitim, deneyim ve teknik detayları daha klasik bir formatta görmek istersen CV dosyam burada.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <SimpleLink href={cvPath} label="CV’yi Gör" icon={FileText} primary />
            <SimpleLink href={cvPath} label="CV’yi İndir" icon={Download} download="Muhammed_Eren_Kocer_CV.pdf" />
          </div>
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" eyebrow="İletişim" title="Tanışmak istersen yazabilirsin.">
      <div className="plain-panel p-6 text-center sm:p-9">
        <p className="mx-auto max-w-2xl text-base leading-8 text-white/66">
          Junior software developer, Odoo/web sistemleri, IT destek ve pratik otomasyon işleriyle ilgili fırsatlara
          açığım.
        </p>
        <div className="mx-auto mt-8 flex max-w-3xl flex-col gap-3 sm:flex-row sm:justify-center">
          <SimpleLink href="mailto:erenkcer@gmail.com" label="E-posta" icon={Mail} primary />
          <SimpleLink href="https://www.linkedin.com/in/eren-kocer" label="LinkedIn" icon={Linkedin} />
          <SimpleLink href={githubUrl} label="GitHub" icon={Github} />
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="relative mx-auto max-w-6xl px-5 pb-10 pt-8 text-sm text-white/42 sm:px-8 lg:px-10">
      <div className="flex flex-col gap-3 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Muhammed Eren Koçer.</p>
        <div className="flex gap-4">
          <a className="hover:text-white" href="mailto:erenkcer@gmail.com">E-posta</a>
          <a className="hover:text-white" href="https://www.linkedin.com/in/eren-kocer" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="hover:text-white" href={githubUrl} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="section-shell reveal">
      <div className="mb-8 sm:mb-10">
        <p className="mb-3 text-sm text-cyan/80">{eyebrow}</p>
        <h2 className="max-w-4xl font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function SimpleLink({ href, label, icon: Icon, primary = false, download }) {
  const isExternal = href.startsWith('http');

  return (
    <a
      href={href}
      download={download}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      className={primary ? 'primary-button' : 'secondary-button'}
      aria-label={label}
    >
      <span>{label}</span>
      <Icon size={18} aria-hidden="true" />
    </a>
  );
}

function BackgroundFX() {
  return (
    <div className="background-fx pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      <div className="base-depth" />
      <div className="grid-mask absolute inset-0" />
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
