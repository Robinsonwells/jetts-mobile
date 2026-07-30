import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin, ArrowRight, Star, Check, Wrench, Truck, HardHat, Hammer, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence } from "motion/react";

import excavator from "@/assets/excavator.jpg.asset.json";
import sewerInstall from "@/assets/sewer-install.jpg.asset.json";
import foundation from "@/assets/foundation.jpg.asset.json";
import waterline from "@/assets/waterline.jpg.asset.json";
import driveway from "@/assets/driveway.jpg.asset.json";
import retainingWall from "@/assets/retaining-wall.jpg.asset.json";
import lotClearing from "@/assets/lot-clearing.jpg.asset.json";
import sitePrep from "@/assets/site-prep.jpg.asset.json";
import homeFinished from "@/assets/home-finished.jpg.asset.json";
import compaction from "@/assets/compaction.jpg.asset.json";
import landscapedHome from "@/assets/landscaped-home.jpg.asset.json";
import yanmarExcavator from "@/assets/yanmar-excavator.jpg.asset.json";
import lawnTruck from "@/assets/lawn-truck.jpg.asset.json";
import foundationPour from "@/assets/foundation-pour.jpg.asset.json";
import gravelPad from "@/assets/gravel-pad.jpg.asset.json";
import lotGraded from "@/assets/lot-graded.jpg.asset.json";
import jobsite1 from "@/assets/jobsite-1.mp4.asset.json";
import jobsite2 from "@/assets/jobsite-2.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Scott Teitge | Tacoma Sewer, Excavation & Site Work" },
      {
        name: "description",
        content:
          "Scott Teitge — Tacoma's trusted sewer, excavation & site work contractor. Free estimates. Call (253) 883-1795.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 1700);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative bg-background text-foreground">
      <IntroReveal revealed={revealed} />
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <WorkSlideshow />
      <FinishedSlideshow />
      <VideoReel />
      <Process />
      <Reviews />
      <About />
      <CTA />
      <Footer />
    </div>
  );
}

function IntroReveal({ revealed }: { revealed: boolean }) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: revealed ? "-100%" : 0 }}
      transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: revealed ? 0 : 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white pointer-events-none"
    >
      <div className="text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs tracking-[0.4em] text-neutral-500 mb-4"
        >
          EST. TACOMA · WA
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-neutral-900 leading-[0.9]"
        >
          SCOTT TEITGE
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mx-auto mt-6 h-[3px] w-24 bg-primary origin-left"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-4 text-sm tracking-[0.3em] text-neutral-600"
        >
          SEWER · EXCAVATION · SITE WORK
        </motion.div>
      </div>
    </motion.div>
  );
}

function Nav() {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.8 }}
      className="fixed top-0 inset-x-0 z-40 backdrop-blur bg-background/80 border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-lg tracking-tight">
          SCOTT<span className="text-primary">.</span>TEITGE
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#services" className="hover:text-primary transition">Services</a>
          <a href="#work" className="hover:text-primary transition">Work</a>
          <a href="#reviews" className="hover:text-primary transition">Reviews</a>
          <a href="#contact" className="hover:text-primary transition">Contact</a>
        </div>
        <a
          href="tel:2538831795"
          className="inline-flex items-center gap-2 rounded-sm bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition"
        >
          <Phone className="h-4 w-4" />
          (253) 883-1795
        </a>
      </div>
    </motion.nav>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative min-h-screen overflow-hidden pt-16">
      <motion.div style={{ y }} className="absolute inset-0">
        <img src={homeFinished.url} alt="Finished home and site work" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32 md:pt-32">
        <FadeUp delay={1.9}>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur px-4 py-1.5 text-xs tracking-widest text-white uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Now booking · Pierce County
          </div>
        </FadeUp>
        <FadeUp delay={2.0}>
          <h1 className="mt-6 font-display text-white text-5xl sm:text-7xl md:text-[7.5rem] leading-[0.88] max-w-5xl">
            DIRT MOVED.
            <br />
            <span className="text-primary">DONE RIGHT.</span>
          </h1>
        </FadeUp>
        <FadeUp delay={2.15}>
          <p className="mt-8 max-w-xl text-lg text-white/80 leading-relaxed">
            Sewer lines, excavation, foundations, and full site prep across Tacoma
            and the South Sound. Locally owned. Honestly priced. Built to last.
          </p>
        </FadeUp>
        <FadeUp delay={2.3}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-sm bg-primary px-7 py-4 font-semibold text-primary-foreground hover:bg-primary/90 transition"
            >
              Get a free estimate
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-3 rounded-sm border border-white/40 bg-transparent px-7 py-4 font-semibold text-white hover:bg-white/10 transition"
            >
              See the work
            </a>
          </div>
        </FadeUp>
        <FadeUp delay={2.5}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl border-t border-white/20 pt-8">
            <Stat n="15+" l="Years experience" />
            <Stat n="200+" l="Sites completed" />
            <Stat n="24/7" l="Emergency service" />
            <Stat n="100%" l="Licensed & insured" />
          </div>
        </FadeUp>
      </motion.div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-display text-white text-3xl md:text-4xl">{n}</div>
      <div className="text-xs uppercase tracking-widest text-white/60 mt-1">{l}</div>
    </div>
  );
}

function Marquee() {
  const items = ["SEWER REPAIR", "EXCAVATION", "SITE PREP", "FOUNDATIONS", "WATER LINES", "GRADING", "DEMOLITION", "HAULING"];
  return (
    <div className="bg-secondary text-secondary-foreground py-5 overflow-hidden border-y border-black/20">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} className="font-display text-2xl md:text-3xl flex items-center gap-12">
            {it}
            <span className="text-primary">◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

const services = [
  { icon: Wrench, title: "Sewer & Water Lines", desc: "New installs, repairs, and full replacements. Trenchless options available." },
  { icon: Truck, title: "Excavation", desc: "From backyard digs to full lot work with modern equipment and clean job sites." },
  { icon: HardHat, title: "Site Preparation", desc: "Clearing, grading, and compaction to get your build started on solid ground." },
  { icon: Hammer, title: "Foundations & Footings", desc: "Precise excavation, forming, and prep for slab, stem wall, and full basements." },
];

function Services() {
  return (
    <section id="services" className="py-24 md:py-32 max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <FadeUp>
          <div className="text-xs tracking-[0.3em] text-primary uppercase mb-4">What we do</div>
          <h2 className="font-display text-5xl md:text-6xl leading-[0.95]">
            Heavy equipment. <br />
            <span className="text-muted-foreground">Careful hands.</span>
          </h2>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p className="text-lg text-muted-foreground leading-relaxed md:mt-8">
            Every job starts with a walkthrough and a straight answer. No surprise
            invoices, no cutting corners underground where it counts most.
          </p>
        </FadeUp>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((s, i) => (
          <FadeUp key={s.title} delay={i * 0.1}>
            <div className="group h-full bg-card border border-border p-8 hover:border-primary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300">
              <s.icon className="h-8 w-8 text-primary mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-xl mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground group-hover:text-secondary-foreground/70 leading-relaxed">
                {s.desc}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

const workSlides = [
  { src: yanmarExcavator.url, cap: "Yanmar dialed in, ready to dig" },
  { src: sewerInstall.url, cap: "Sewer line install" },
  { src: waterline.url, cap: "Water service line" },
  { src: foundation.url, cap: "Foundation footings" },
  { src: foundationPour.url, cap: "Foundation & site pour" },
  { src: lotClearing.url, cap: "Lot clearing" },
  { src: sitePrep.url, cap: "Site prep & excavation" },
  { src: compaction.url, cap: "Trench & compaction" },
  { src: gravelPad.url, cap: "Gravel pad & drainage" },
];

const finishedSlides = [
  { src: landscapedHome.url, cap: "Finished landscape & hardscape" },
  { src: retainingWall.url, cap: "Curved stone retaining wall" },
  { src: driveway.url, cap: "Fresh driveway & site finish" },
  { src: lawnTruck.url, cap: "Manicured lawn, striped clean" },
  { src: lotGraded.url, cap: "Graded, cleared & ready to build" },
  { src: homeFinished.url, cap: "Delivered turn-key" },
];

function Slideshow({ slides, tint = "dark" }: { slides: { src: string; cap: string }[]; tint?: "dark" | "light" }) {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setDir(1);
      setI((p) => (p + 1) % slides.length);
    }, 5000);
    return () => clearInterval(t);
  }, [slides.length]);

  const go = (n: number) => {
    setDir(n > i ? 1 : -1);
    setI((n + slides.length) % slides.length);
  };
  const prev = () => { setDir(-1); setI((i - 1 + slides.length) % slides.length); };
  const next = () => { setDir(1); setI((i + 1) % slides.length); };

  const chrome = tint === "dark" ? "text-white" : "text-neutral-900";
  const btn = tint === "dark"
    ? "bg-white/10 hover:bg-white/25 text-white border-white/30"
    : "bg-black/5 hover:bg-black/15 text-neutral-900 border-black/20";

  return (
    <div className="relative">
      <div className="relative aspect-[16/10] md:aspect-[16/9] overflow-hidden bg-black/40">
        <AnimatePresence initial={false} custom={dir} mode="popLayout">
          <motion.img
            key={i}
            src={slides[i].src}
            alt={slides[i].cap}
            custom={dir}
            initial={{ opacity: 0, scale: 1.08, x: dir * 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 1.04, x: dir * -40 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

        <div className="absolute bottom-0 inset-x-0 p-6 md:p-10 flex items-end justify-between gap-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-white"
            >
              <div className="text-xs tracking-[0.3em] text-primary uppercase mb-2">
                {String(i + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </div>
              <div className="font-display text-2xl md:text-4xl leading-tight max-w-xl">
                {slides[i].cap}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-2 shrink-0">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className={`h-11 w-11 md:h-12 md:w-12 border ${btn} backdrop-blur flex items-center justify-center transition`}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className={`h-11 w-11 md:h-12 md:w-12 border ${btn} backdrop-blur flex items-center justify-center transition`}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className={`mt-4 flex gap-1.5 ${chrome}`}>
        {slides.map((_, n) => (
          <button
            key={n}
            onClick={() => go(n)}
            aria-label={`Go to slide ${n + 1}`}
            className="group flex-1 h-1 bg-current/20 overflow-hidden relative"
          >
            <span
              className={`absolute inset-y-0 left-0 bg-primary transition-all duration-500 ${
                n === i ? "w-full" : n < i ? "w-full opacity-40" : "w-0"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function WorkSlideshow() {
  return (
    <section id="work" className="bg-secondary text-secondary-foreground py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-between items-end gap-6 mb-12">
          <FadeUp>
            <div className="text-xs tracking-[0.3em] text-primary uppercase mb-4">In the dirt</div>
            <h2 className="font-display text-5xl md:text-6xl leading-[0.95]">
              The work. <br />
              <span className="text-white/50">Underway.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="max-w-md text-white/60">
              Raw jobsite shots — trenching, digging, and pipe going in the ground
              across Pierce County.
            </p>
          </FadeUp>
        </div>
        <FadeUp delay={0.2}>
          <Slideshow slides={workSlides} tint="dark" />
        </FadeUp>
      </div>
    </section>
  );
}

function FinishedSlideshow() {
  return (
    <section id="finished" className="bg-background text-foreground py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-between items-end gap-6 mb-12">
          <FadeUp>
            <div className="text-xs tracking-[0.3em] text-primary uppercase mb-4">The finish</div>
            <h2 className="font-display text-5xl md:text-6xl leading-[0.95]">
              Cleaned up. <br />
              <span className="text-muted-foreground">Handed over.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="max-w-md text-muted-foreground">
              Finished driveways, landscaping, walls, and turn-key sites — the way
              we leave every job.
            </p>
          </FadeUp>
        </div>
        <FadeUp delay={0.2}>
          <Slideshow slides={finishedSlides} tint="light" />
        </FadeUp>
      </div>
    </section>
  );
}


function VideoReel() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-between items-end gap-6 mb-12">
          <FadeUp>
            <div className="text-xs tracking-[0.3em] text-primary uppercase mb-4">From the jobsite</div>
            <h2 className="font-display text-5xl md:text-6xl leading-[0.95]">
              Boots on <br />
              <span className="text-muted-foreground">the ground.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="max-w-md text-muted-foreground">
              Real jobsite footage from recent sewer, excavation, and site work across Pierce County.
            </p>
          </FadeUp>
        </div>
        <motion.div style={{ y }} className="max-w-4xl mx-auto">
          <FadeUp>
            <div className="relative overflow-hidden bg-secondary aspect-[9/16] md:aspect-video">
              <video
                src={jobsite1.url}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-black/60 backdrop-blur px-3 py-1 text-xs text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                ON SITE
              </div>
            </div>
          </FadeUp>
        </motion.div>
      </div>
    </section>
  );
}

const steps = [
  { n: "01", t: "Call or message", d: "Tell us about the job. We'll ask the right questions." },
  { n: "02", t: "On-site walkthrough", d: "Free visit, honest assessment, clear written estimate." },
  { n: "03", t: "Scheduled & dug", d: "We show up on time with the right equipment for the job." },
  { n: "04", t: "Clean handoff", d: "Site left graded, compacted, and ready for the next step." },
];

function Process() {
  return (
    <section className="py-24 md:py-32 max-w-7xl mx-auto px-6">
      <FadeUp>
        <div className="text-xs tracking-[0.3em] text-primary uppercase mb-4">The process</div>
        <h2 className="font-display text-5xl md:text-6xl leading-[0.95] mb-16 max-w-3xl">
          Simple, from first call to final grade.
        </h2>
      </FadeUp>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-border pt-12">
        {steps.map((s, i) => (
          <FadeUp key={s.n} delay={i * 0.1}>
            <div>
              <div className="font-display text-primary text-4xl mb-4">{s.n}</div>
              <h3 className="font-display text-xl mb-3">{s.t}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

const reviews = [
  {
    name: "Mark D.",
    loc: "North Tacoma",
    text: "Scott replaced our main sewer line in a single day. Clear pricing, no surprises, and the yard looked better than when they showed up.",
  },
  {
    name: "Jenna R.",
    loc: "Puyallup",
    text: "We hired Scott for site prep on our new build. Professional crew, honest timeline, and the grading was dead-on when the framers arrived.",
  },
  {
    name: "Tom & Lisa H.",
    loc: "University Place",
    text: "Excavation for our foundation went smoothly. Scott communicated every step, and the finished job was cleaner than we expected.",
  },
];

function Reviews() {
  return (
    <section id="reviews" className="bg-primary text-primary-foreground py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp>
          <div className="text-xs tracking-[0.3em] uppercase mb-4 opacity-80">What clients say</div>
          <h2 className="font-display text-5xl md:text-6xl leading-[0.95] mb-16 max-w-3xl">
            Trusted by neighbors, contractors, and homeowners.
          </h2>
        </FadeUp>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <blockquote className="h-full bg-background/10 backdrop-blur border border-white/20 p-8 flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-lg leading-relaxed mb-6 flex-1">"{r.text}"</p>
                <footer className="text-sm">
                  <div className="font-semibold">{r.name}</div>
                  <div className="opacity-70">{r.loc}</div>
                </footer>
              </blockquote>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="py-24 md:py-32 max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <FadeUp>
          <div className="relative overflow-hidden">
            <img src={homeFinished.url} alt="Finished home" className="w-full aspect-[4/3] object-cover" />
            <div className="absolute bottom-0 left-0 bg-primary text-primary-foreground p-6">
              <div className="font-display text-3xl">Local.</div>
              <div className="text-sm">Tacoma-based & owner-operated</div>
            </div>
          </div>
        </FadeUp>
        <FadeUp delay={0.15}>
          <div>
            <div className="text-xs tracking-[0.3em] text-primary uppercase mb-4">About Scott</div>
            <h2 className="font-display text-4xl md:text-5xl leading-[0.95] mb-6">
              Fifteen years of moving dirt the right way.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Scott Teitge has been running crews across Pierce County for over
              a decade, focused on the underground and site work that makes
              every project possible. From single-family sewer repairs to full
              lot prep for custom builds, the standard is the same: get in,
              do it right, leave it clean.
            </p>
            <ul className="space-y-3">
              {[
                "Fully licensed, bonded & insured in Washington",
                "Locally owned and operated in Tacoma",
                "Straight-forward pricing with written estimates",
                "Modern equipment, experienced operators",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function CTA() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.phone.trim()) next.phone = "Please enter your phone number.";
    else if (!/^[0-9\s\-\(\)\+\.]{7,}$/.test(form.phone.trim())) next.phone = "Please enter a valid number.";
    if (!form.message.trim()) next.message = "Tell us a little about the job.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      await submitEstimateRequest({
        data: {
          name: form.name.trim(),
          phone: form.phone.trim(),
          message: form.message.trim(),
        },
      });
      setStatus("sent");
      setForm({ name: "", phone: "", message: "" });
      setTimeout(() => setStatus("idle"), 6000);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-secondary text-secondary-foreground overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${sitePrep.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <FadeUp>
            <div className="text-xs tracking-[0.3em] text-primary uppercase mb-6">Free estimates</div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.9]">
              Got a job that needs <br />
              <span className="text-primary">doing right?</span>
            </h2>
          </FadeUp>
        </div>

        <FadeUp delay={0.2}>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <form
              onSubmit={handleSubmit}
              className="bg-background text-foreground p-8 md:p-10 border border-border shadow-2xl"
              noValidate
            >
              <h3 className="font-display text-2xl mb-6">Request an estimate</h3>
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder="Your name"
                    className="w-full rounded-sm bg-white px-4 py-3 text-foreground placeholder:text-neutral-500 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition"
                  />
                  {errors.name && <p className="mt-1.5 text-sm text-destructive">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    placeholder="(253) 555-1234"
                    className="w-full rounded-sm bg-white px-4 py-3 text-foreground placeholder:text-neutral-500 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition"
                  />
                  {errors.phone && <p className="mt-1.5 text-sm text-destructive">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Tell us about your job
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    placeholder="What needs done? Where is the site? Any timeline?"
                    className="w-full rounded-sm bg-white px-4 py-3 text-foreground placeholder:text-neutral-500 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition resize-none"
                  />
                  {errors.message && <p className="mt-1.5 text-sm text-destructive">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-sm bg-primary px-6 py-4 font-semibold text-primary-foreground hover:bg-primary/90 transition disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending…" : "Send estimate request"}
                </button>
                {status === "sent" && (
                  <p className="text-sm text-center text-green-700 font-medium">
                    Thanks — your request came through. Scott will be in touch shortly.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-center text-destructive font-medium">
                    Something went wrong sending that. Please call (253) 883-1795.
                  </p>
                )}
              </div>
            </form>

            <div className="space-y-6 lg:pt-10">
              <p className="text-lg text-secondary-foreground leading-relaxed">
                Prefer to talk it through? Call or email directly. Most estimates are scheduled within 24 hours.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
                <a
                  href="tel:2538831795"
                  className="group flex items-center gap-5 bg-primary text-primary-foreground p-6 hover:bg-primary/90 transition"
                >
                  <Phone className="h-6 w-6 shrink-0" />
                  <div>
                    <div className="text-xs uppercase tracking-widest opacity-90 mb-1">Call</div>
                    <div className="font-semibold">(253) 883-1795</div>
                  </div>
                </a>
                <a
                  href="mailto:scottteitge1@gmail.com"
                  className="group flex items-center gap-5 bg-black/30 border border-white/40 p-6 hover:bg-black/40 transition"
                >
                  <Mail className="h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <div className="text-xs uppercase tracking-widest opacity-90 mb-1">Email</div>
                    <div className="font-semibold text-sm break-all">scottteitge1@gmail.com</div>
                  </div>
                </a>
                <div className="flex items-center gap-5 bg-black/30 border border-white/40 p-6">
                  <MapPin className="h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <div className="text-xs uppercase tracking-widest opacity-90 mb-1">Service Area</div>
                    <div className="font-semibold">Tacoma & Pierce County</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-white/70 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-6">
        <div>
          <div className="font-display text-white text-xl">SCOTT<span className="text-primary">.</span>TEITGE</div>
          <div className="text-xs mt-1">Tacoma Sewer, Excavation & Site Work</div>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-sm">
          <a
            href="https://www.facebook.com/profile.php?id=61590103243887#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-primary transition"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Follow us on Facebook
          </a>
          <span className="hidden sm:inline text-white/30">|</span>
          <span>© {new Date().getFullYear()} Scott Teitge. Licensed & insured in WA.</span>
        </div>
      </div>
    </footer>
  );
}

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
