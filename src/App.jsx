import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Mail,
  MapPin,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Award,
  Clock,
  Menu,
  X,
  Upload,
  ArrowRight,
  TrendingUp,
  Target,
  Layers,
  Film,
  Share2,
  Users,
  Code,
  Zap,
  Instagram,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

/* ----------------------------------------------------------------
   Constants / Content
---------------------------------------------------------------- */
const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Approach', href: '#approach' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

const SERVICES_FULL = [
  {
    icon: TrendingUp,
    title: 'SEO & Organic Search',
    text: 'Rank on page 1, stay there. Technical SEO, content strategy, and authority building that compounds into unstoppable organic growth.',
  },
  {
    icon: Target,
    title: 'Meta Ads & Paid Media',
    text: 'Turn ad spend into profit. Precision-targeted Facebook & Instagram campaigns designed to convert cold traffic into loyal, paying customers.',
  },
  {
    icon: Layers,
    title: 'Graphic Design & Identity',
    text: 'Visual identity that stops the scroll. Logos, brand kits, social creatives — every pixel crafted to communicate your brand\'s power.',
  },
  {
    icon: Film,
    title: 'Video Editing & Content',
    text: 'Raw footage in, cinema-quality content out. Ads, brand films, testimonials — edited to captivate and convert at every touchpoint.',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    text: 'Consistent. Strategic. Viral. Full-funnel social management across Instagram, Facebook, LinkedIn & more — content to community to conversions.',
  },
  {
    icon: Users,
    title: 'Influencer Marketing & Reels',
    text: 'Authentic creators meet high-impact content. We source the right influencers and produce scroll-stopping Reels & Shorts that build real trust.',
  },
  {
    icon: Code,
    title: 'SaaS & Digital Products',
    text: 'From idea to launch — we design and develop SaaS platforms, web apps, and digital products that generate recurring revenue for your brand.',
  },
]

/* ----------------------------------------------------------------
   Navbar
---------------------------------------------------------------- */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled ? 'glass shadow-lg shadow-primary/10' : 'bg-transparent'
        } rounded-full px-4 sm:px-6 py-2.5 w-[calc(100%-2rem)] max-w-5xl`}
      >
        <div className="flex items-center justify-between gap-6">
          <a href="#home" className="flex items-center gap-2 group">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-primary">
              <Zap className="h-5 w-5 text-white" strokeWidth={2.4} />
              <span className="absolute inset-0 rounded-full ring-2 ring-primary/30 group-hover:ring-primary/60 transition" />
            </span>
            <span className="font-display font-bold tracking-tight text-lg text-white transition-colors">
              7STAIRSS
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-tight lift-on-hover text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden lg:inline-flex magnetic-btn items-center gap-1.5 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-primary/30"
          >
            Get Started
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
          </a>

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden p-2 rounded-full text-white"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 lg:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-deep/95 backdrop-blur-2xl" onClick={() => setOpen(false)} />
        <div
          className={`absolute top-0 left-0 right-0 bg-surface rounded-b-5xl px-6 pt-8 pb-12 transition-transform duration-500 border-b border-divider ${
            open ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="flex items-center justify-between mb-10">
            <span className="font-display font-bold text-xl text-ink">7STAIRSS</span>
            <button onClick={() => setOpen(false)} className="p-2 rounded-full bg-divider">
              <X className="h-5 w-5 text-ink" />
            </button>
          </div>
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl font-semibold text-ink py-3 border-b border-divider"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-8 magnetic-btn flex items-center justify-center gap-2 bg-primary text-white px-6 py-4 rounded-full font-semibold w-full"
          >
            Get Started
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </>
  )
}

/* ----------------------------------------------------------------
   Hero
---------------------------------------------------------------- */
function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-line-1', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.3,
      })
      gsap.from('.hero-line-2', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.5,
      })
      gsap.from('.hero-cta, .hero-meta', {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.8,
        stagger: 0.12,
      })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="home" ref={heroRef} className="relative min-h-[100dvh] w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2400&q=80"
          alt="7STAIRSS Brand Building Agency"
          className="w-full h-full object-cover brightness-[0.35]"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/95 via-black/70 to-primary/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/20 to-transparent" />
      </div>

      {/* Floating brand energy particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[22%] right-[16%] h-3 w-3 rounded-full bg-primary/80 animate-float"
          style={{ animationDelay: '0s', boxShadow: '0 0 16px rgba(57,255,20,0.7)' }}
        />
        <div
          className="absolute top-[38%] right-[8%] h-2 w-2 rounded-full bg-accent/70 animate-float"
          style={{ animationDelay: '1.5s', boxShadow: '0 0 10px rgba(0,255,170,0.5)' }}
        />
        <div
          className="absolute top-[52%] right-[24%] h-1.5 w-1.5 rounded-full bg-primary/60 animate-float"
          style={{ animationDelay: '3s' }}
        />
        <div
          className="absolute top-[18%] right-[32%] h-1 w-1 rounded-full bg-white/40 animate-float"
          style={{ animationDelay: '2.2s' }}
        />
      </div>

      {/* Top frame */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[100dvh] flex-col items-center justify-center text-center">
        <div className="px-6 sm:px-10 lg:px-16 max-w-5xl">
          <p className="hero-meta font-mono text-xs uppercase tracking-[0.28em] text-white/50 mb-6">
            Complete Brand Building · A to Z
          </p>
          <h1 className="font-display font-extrabold text-white leading-[0.93] tracking-tight">
            <span className="hero-line-1 block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
              We Build Brands
            </span>
            <span
              className="hero-line-2 block font-serif italic font-medium text-primary text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] mt-2"
              style={{ lineHeight: '0.9' }}
            >
              That Dominate.
            </span>
          </h1>

          <p className="hero-meta mx-auto max-w-2xl text-white/65 text-base sm:text-lg mt-8 leading-relaxed">
            From zero to iconic — 7STAIRSS delivers every service your brand needs to own its market.{' '}
            <span className="text-white">One agency. Seven pillars. Limitless growth.</span>
          </p>

          <div className="hero-cta mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="magnetic-btn group inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-full shadow-2xl shadow-primary/40"
            >
              Start Your Journey
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#services"
              className="lift-on-hover inline-flex items-center justify-center gap-2 bg-white/8 backdrop-blur-md text-white border border-white/15 font-medium px-8 py-4 rounded-full"
            >
              Explore Services
            </a>
          </div>

          {/* Trust ticker */}
          <div className="hero-meta mt-12 flex flex-wrap justify-center items-center gap-6 text-white/30">
            {['SEO', 'Meta Ads', 'Graphic Design', 'Video Editing', 'Influencer Marketing', 'SaaS'].map((s) => (
              <span key={s} className="font-mono text-[11px] uppercase tracking-widest">
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-6 sm:right-12 hidden md:flex flex-col items-center gap-2 text-white/40">
          <span className="font-mono uppercase text-[10px] tracking-[0.3em]">Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Feature Card 1 — Brand Strategy Shuffler
---------------------------------------------------------------- */
function BrandShuffler() {
  const items = [
    { tag: 'Identity', label: 'Brand Identity & Visual Systems', metric: '100%' },
    { tag: 'Strategy', label: 'Market Positioning & Growth Plan', metric: '360°' },
    { tag: 'Content', label: 'Content Direction & Creative Assets', metric: '7×' },
  ]
  const [stack, setStack] = useState(items)

  useEffect(() => {
    const interval = setInterval(() => {
      setStack((prev) => {
        const next = [...prev]
        next.unshift(next.pop())
        return next
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-44 w-full">
      {stack.map((item, i) => (
        <div
          key={item.tag}
          style={{
            transform: `translate(${i * 14}px, ${i * 14}px) scale(${1 - i * 0.05})`,
            zIndex: stack.length - i,
            opacity: 1 - i * 0.25,
            transition: 'transform 0.7s cubic-bezier(0.34,1.56,0.64,1), opacity 0.6s ease',
          }}
          className="absolute inset-0 bg-surface border border-divider rounded-3xl p-5 shadow-xl shadow-black/60"
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded-full">
              {item.tag}
            </span>
            <span className="font-mono text-xs text-accent font-semibold">{item.metric}</span>
          </div>
          <div className="mt-4 font-display text-lg font-semibold text-ink leading-tight">
            {item.label}
          </div>
          <div className="mt-3 flex items-center gap-1.5">
            {Array.from({ length: 24 }).map((_, idx) => (
              <span
                key={idx}
                className="h-1 w-1 rounded-full"
                style={{ background: idx < 24 - i * 6 ? '#39FF14' : '#1A1A1A' }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

/* ----------------------------------------------------------------
   Feature Card 2 — Campaign Engine (Signature Animation)
   Data packets streaming into a live campaign dashboard
---------------------------------------------------------------- */
function CampaignEngine() {
  const [statusIdx, setStatusIdx] = useState(0)
  const [count, setCount] = useState(14)

  const statuses = [
    { text: 'Building brand · identity layer 1', label: 'Building', tone: 'primary' },
    { text: 'Campaign live · targeting 2.4M reach', label: 'Live', tone: 'accent' },
    { text: 'ROAS 3.8× · scaling ad budget', label: 'Scaling', tone: 'emerald' },
    { text: 'Market dominant · all metrics green', label: 'Done', tone: 'emerald' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIdx((idx) => {
        const next = (idx + 1) % statuses.length
        if (statuses[next].label === 'Done') setCount((c) => c + 1)
        return next
      })
    }, 2300)
    return () => clearInterval(interval)
  }, [])

  const packets = [
    { left: '12%', delay: '0.0s', dur: '2.4s', size: 14 },
    { left: '25%', delay: '0.8s', dur: '2.8s', size: 11 },
    { left: '37%', delay: '1.5s', dur: '2.6s', size: 16 },
    { left: '50%', delay: '0.3s', dur: '2.2s', size: 13 },
    { left: '63%', delay: '1.2s', dur: '2.9s', size: 15 },
    { left: '76%', delay: '0.6s', dur: '2.5s', size: 12 },
    { left: '88%', delay: '1.8s', dur: '2.7s', size: 14 },
  ]

  const pulses = [
    { left: '22%', delay: '0.2s' },
    { left: '50%', delay: '1.0s' },
    { left: '78%', delay: '1.8s' },
  ]

  const status = statuses[statusIdx]
  const toneText =
    status.tone === 'emerald'
      ? 'text-emerald-400'
      : status.tone === 'accent'
      ? 'text-accent'
      : 'text-primary-light'
  const toneDot =
    status.tone === 'emerald'
      ? 'bg-emerald-400'
      : status.tone === 'accent'
      ? 'bg-accent'
      : 'bg-primary'

  return (
    <div
      className="relative h-44 w-full rounded-3xl overflow-hidden border border-primary/20"
      style={{ background: 'linear-gradient(180deg, #091409 0%, #060D06 70%, #030703 100%)' }}
    >
      {/* Atmosphere glows */}
      <div className="absolute -top-4 -left-6 h-16 w-28 rounded-full bg-primary/20 blur-2xl" style={{ filter: 'blur(24px)', background: 'rgba(57,255,20,0.15)' }} />
      <div className="absolute top-2 right-8 h-10 w-20 rounded-full bg-accent/10 blur-xl" />

      {/* Header */}
      <div className="absolute top-3 left-4 right-4 flex items-center justify-between z-20">
        <div className="flex items-center gap-2">
          <Zap className="h-3 w-3 text-primary" strokeWidth={2.5} />
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary-light">
            Campaign Engine
          </span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="font-display font-bold text-sm text-ink tabular-nums">
            {String(count).padStart(2, '0')}
          </span>
          <span className="font-mono text-[9px] uppercase tracking-widest text-muted">brands</span>
        </div>
      </div>

      {/* Analytics source bar */}
      <svg className="absolute left-3 right-3 top-9 h-5" viewBox="0 0 400 20" preserveAspectRatio="none">
        <rect x="0" y="7" width="400" height="6" rx="3" fill="#39FF14" fillOpacity="0.1" />
        <rect x="0" y="8" width="400" height="2" fill="#2BBF0E" fillOpacity="0.3" />
        {[50, 130, 210, 290, 370].map((x) => (
          <g key={x}>
            <circle cx={x} cy="10" r="5" fill="#39FF14" fillOpacity="0.35" />
            <circle cx={x} cy="10" r="2.5" fill="#80FF5C" />
          </g>
        ))}
      </svg>

      {/* Data packet stream */}
      <div className="absolute inset-x-0 top-14 bottom-11 overflow-hidden">
        {packets.map((p, i) => (
          <svg
            key={i}
            className="absolute top-0"
            style={{
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animation: `rain-fall ${p.dur} cubic-bezier(0.55,0.05,0.7,0.45) ${p.delay} infinite`,
              filter: 'drop-shadow(0 0 6px rgba(57,255,20,0.8))',
              transform: 'translateX(-50%)',
            }}
            viewBox="0 0 24 24"
          >
            <defs>
              <radialGradient id={`pkt-${i}`} cx="50%" cy="30%">
                <stop offset="0%" stopColor="#B0FF8A" />
                <stop offset="55%" stopColor="#39FF14" />
                <stop offset="100%" stopColor="#2BBF0E" />
              </radialGradient>
            </defs>
            <circle cx="12" cy="12" r="9" fill={`url(#pkt-${i})`} />
            <circle cx="10" cy="10" r="3" fill="white" fillOpacity="0.28" />
          </svg>
        ))}
      </div>

      {/* Dashboard baseline */}
      <svg className="absolute bottom-9 left-3 right-3 h-4" viewBox="0 0 200 16" preserveAspectRatio="none">
        <path
          d="M0,10 L15,10 L25,4 L35,14 L50,6 L65,11 L80,7 L100,12 L120,8 L140,10 L160,5 L175,9 L200,10"
          fill="none"
          stroke="#39FF14"
          strokeOpacity="0.3"
          strokeWidth="1.3"
        />
        <path
          d="M0,10 L200,10"
          fill="none"
          stroke="#2BBF0E"
          strokeOpacity="0.15"
          strokeWidth="0.8"
        />
      </svg>

      {/* Pulse ripples */}
      <div className="absolute bottom-[34px] left-3 right-3 h-2">
        {pulses.map((r, i) => (
          <span
            key={i}
            className="absolute top-0 -translate-x-1/2 rounded-full border border-primary/50"
            style={{
              left: r.left,
              width: '4px',
              height: '4px',
              animation: `rain-ripple 2.4s ease-out ${r.delay} infinite`,
            }}
          />
        ))}
      </div>

      {/* Status bar */}
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between z-20">
        <div className="flex items-center gap-2 min-w-0">
          <span className={`relative h-2 w-2 rounded-full flex-shrink-0 ${toneDot}`}>
            {status.tone === 'accent' && (
              <span className={`absolute inset-0 rounded-full ${toneDot} animate-ping`} />
            )}
          </span>
          <span
            key={status.text}
            className={`font-mono text-[10px] truncate ${toneText}`}
            style={{ animation: 'rain-fadein 0.35s ease-out' }}
          >
            {status.text}
          </span>
        </div>
        <span className={`font-mono text-[9px] uppercase tracking-[0.2em] whitespace-nowrap pl-2 ${toneText}`}>
          {status.label}
        </span>
      </div>

      <style>{`
        @keyframes rain-fall {
          0%   { transform: translate(-50%, -10px); opacity: 0; }
          12%  { opacity: 1; }
          82%  { opacity: 1; }
          100% { transform: translate(-50%, 95px); opacity: 0; }
        }
        @keyframes rain-ripple {
          0%   { transform: translateX(-50%) scale(0.4); opacity: 0.9; }
          80%  { transform: translateX(-50%) scale(3.5); opacity: 0; }
          100% { transform: translateX(-50%) scale(3.5); opacity: 0; }
        }
        @keyframes rain-fadein {
          from { opacity: 0; transform: translateY(2px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

/* ----------------------------------------------------------------
   Feature Card 3 — Strategy Call Scheduler
---------------------------------------------------------------- */
function StrategyScheduler() {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  const [step, setStep] = useState(0)
  const activeDay = 2

  useEffect(() => {
    const interval = setInterval(() => setStep((prev) => (prev + 1) % 5), 1400)
    return () => clearInterval(interval)
  }, [])

  const cursorPos = (() => {
    switch (step) {
      case 0: return { x: 8, y: 110, opacity: 0 }
      case 1: return { x: 60, y: 60, opacity: 1 }
      case 2: return { x: 60 + activeDay * 36, y: 60, opacity: 1 }
      case 3: return { x: 60 + activeDay * 36, y: 60, opacity: 1 }
      case 4: return { x: 130, y: 130, opacity: 1 }
      default: return { x: 8, y: 110, opacity: 0 }
    }
  })()

  return (
    <div className="relative h-44 w-full bg-surface border border-divider rounded-3xl p-5 overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
          Week 24 · June
        </span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded-full">
          Strategy
        </span>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-4">
        {days.map((d, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center justify-center h-9 rounded-xl text-xs font-medium transition-all duration-300 ${
              step >= 3 && idx === activeDay
                ? 'bg-primary text-white scale-110 shadow-lg shadow-primary/40'
                : 'bg-background text-ink/70'
            }`}
          >
            <span className="font-mono text-[9px] text-muted">{d}</span>
            <span className="font-display font-semibold text-sm">{idx + 7}</span>
          </div>
        ))}
      </div>

      <button
        className={`w-full py-2.5 rounded-2xl font-medium text-xs transition-all duration-300 ${
          step === 4
            ? 'bg-accent text-deep scale-[1.02] shadow-md shadow-accent/30'
            : 'bg-divider text-muted'
        }`}
      >
        {step >= 3 ? '✓ Strategy call confirmed' : 'Select a date'}
      </button>

      <div
        className="absolute pointer-events-none transition-all duration-500 ease-out"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          opacity: cursorPos.opacity,
          transform: step === 3 ? 'scale(0.85)' : 'scale(1)',
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 3L19 12L12 13L9 20L5 3Z"
            fill="#000000"
            stroke="#39FF14"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  )
}

/* ----------------------------------------------------------------
   Features Section
---------------------------------------------------------------- */
function Features() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 90%', once: true },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15,
      })
      gsap.from('.feature-heading > *', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 95%', once: true },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.08,
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const cards = [
    {
      eyebrow: '01 / Strategy',
      heading: 'Brand Architecture',
      sub: 'Identity to market dominance',
      text: 'We design your brand from the ground up — identity, positioning, creative direction. The foundation everything is built on.',
      Component: BrandShuffler,
    },
    {
      eyebrow: '02 / Engine',
      heading: 'Campaign Engine',
      sub: 'Live & always scaling',
      text: 'Real-time campaign management across all channels. Data packets become dollars — we turn your ad spend into compounding growth.',
      Component: CampaignEngine,
    },
    {
      eyebrow: '03 / Growth',
      heading: 'Strategy Sessions',
      sub: 'Booked. Executed. Won.',
      text: 'Monthly strategy calls, quarterly brand audits, and weekly performance reviews. You\'re never flying blind with 7STAIRSS.',
      Component: StrategyScheduler,
    },
  ]

  return (
    <section id="approach" ref={sectionRef} className="relative py-28 sm:py-40 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="feature-heading max-w-3xl mb-16 sm:mb-24">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">╱ How we work</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight">
            Three engines.
            <span className="block font-serif italic font-medium text-primary mt-1">One mission.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <article
              key={idx}
              className="feature-card group relative bg-surface border border-divider rounded-5xl p-7 hover:border-primary/40 transition-colors duration-500 shadow-xl shadow-black/40"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  {card.eyebrow}
                </span>
                <ArrowUpRight
                  className="h-5 w-5 text-ink/20 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                  strokeWidth={1.8}
                />
              </div>

              <card.Component />

              <div className="mt-6">
                <h3 className="font-display font-bold text-2xl text-ink leading-tight">{card.heading}</h3>
                <p className="font-serif italic text-primary text-sm mt-1">{card.sub}</p>
                <p className="text-muted text-[15px] mt-4 leading-relaxed">{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   CountUp — animated counter
---------------------------------------------------------------- */
function CountUp({ target, duration = 1800 }) {
  const [count, setCount] = useState(0)
  const elemRef = useRef(null)
  const startedRef = useRef(false)

  useEffect(() => {
    const el = elemRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true
            const startTime = performance.now()
            const animate = (now) => {
              const elapsed = now - startTime
              const progress = Math.min(elapsed / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              setCount(Math.floor(target * eased))
              if (progress < 1) requestAnimationFrame(animate)
              else setCount(target)
            }
            requestAnimationFrame(animate)
          }
        })
      },
      { threshold: 0.35 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return <span ref={elemRef}>{count}</span>
}

/* ----------------------------------------------------------------
   Pillars
---------------------------------------------------------------- */
function Pillars() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const pillars = [
    {
      n: '01',
      title: 'Pillars',
      target: 7,
      suffix: '',
      label: 'core services',
      desc: 'Seven disciplines of brand building, all delivered under one roof. Strategy, design, ads, video, social, influencers, and SaaS — no gaps.',
    },
    {
      n: '02',
      title: 'Dedication',
      target: 100,
      suffix: '%',
      label: 'client focused',
      desc: 'Every client gets our complete creative and strategic attention. We don\'t spread thin. Your growth is our only measure of success.',
    },
    {
      n: '03',
      title: 'Response',
      target: 24,
      suffix: 'h',
      label: 'turnaround',
      desc: 'Questions answered, strategies updated, campaigns optimized — within 24 hours. We move at the speed your brand deserves.',
    },
  ]

  return (
    <section
      id="pillars"
      ref={ref}
      className="relative py-28 sm:py-40 px-6 sm:px-10 lg:px-16 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[44rem] rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div
          className={`flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-24 transition-all duration-1000 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="max-w-2xl">
            <span className="inline-block font-mono text-xs uppercase tracking-[0.3em] text-primary mb-5">
              ╱ The numbers
            </span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.05] tracking-tight">
              Built to win.
              <span className="block font-serif italic font-medium text-primary">Every time.</span>
            </h2>
          </div>
          <p className="text-muted text-lg leading-relaxed max-w-md lg:text-right">
            Three numbers that define how we operate. Not marketing promises — just what we deliver.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-divider rounded-5xl overflow-hidden border border-divider shadow-2xl shadow-black/60">
          {pillars.map((p, i) => (
            <article
              key={i}
              style={{ transitionDelay: visible ? `${i * 150}ms` : '0ms' }}
              className={`relative bg-surface p-9 sm:p-12 group overflow-hidden transition-all duration-1000 ease-out ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex items-center justify-between mb-10">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                  {p.n} / {p.title}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-primary/40 group-hover:bg-primary group-hover:scale-150 transition-all duration-500" />
              </div>

              <div className="flex items-end gap-1 leading-none">
                <span className="font-display font-extrabold text-[6rem] sm:text-[8rem] md:text-[9rem] leading-[0.85] text-ink tabular-nums tracking-tight">
                  <CountUp target={p.target} duration={1800 + i * 200} />
                </span>
                <span className="font-serif italic font-medium text-4xl sm:text-5xl md:text-6xl text-primary mb-3 sm:mb-4">
                  {p.suffix}
                </span>
              </div>

              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary mt-5">
                {p.label}
              </p>
              <p className="text-muted text-[15px] mt-6 leading-relaxed max-w-xs">{p.desc}</p>

              <div className="absolute bottom-0 left-9 right-9 sm:left-12 sm:right-12 h-px bg-divider overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-transparent via-primary to-transparent"
                  style={{ animation: `pillar-sweep 4s ease-in-out ${i * 0.4}s infinite` }}
                />
              </div>

              <span className="absolute top-9 right-9 sm:top-12 sm:right-12 font-mono text-[9px] uppercase tracking-widest text-primary/20">
                {p.n}
              </span>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pillar-sweep {
          0%   { transform: translateX(-100%); }
          50%  { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  )
}

/* ----------------------------------------------------------------
   Protocol — Sticky Stacking Cards
---------------------------------------------------------------- */
function Protocol() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card')
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top top+=100',
            endTrigger: cards[cards.length - 1],
            end: 'top top+=120',
            scrub: 1,
          },
          scale: 0.92,
          filter: 'blur(6px) saturate(0.7)',
          opacity: 0.5,
          ease: 'none',
        })
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  const steps = [
    {
      num: '01',
      title: 'Discovery & Audit',
      tagline: 'We listen first.',
      text: 'We deep-dive into your brand, competitors, and market to find exactly where the opportunity lies. No guesswork — just data-backed clarity on your position and potential.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80',
      alt: 'Brand strategy session',
      meta: 'Step 1 / Listen',
    },
    {
      num: '02',
      title: 'Strategy Blueprint',
      tagline: 'We map the ascent.',
      text: 'A custom 360° brand strategy covering all 7 service pillars, tailored to your goals and budget. You get a clear roadmap — every stair plotted from identity to market dominance.',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80',
      alt: 'Strategy planning',
      meta: 'Step 2 / Plan',
    },
    {
      num: '03',
      title: 'Execute & Scale',
      tagline: 'We build the empire.',
      text: 'Multi-channel rollout — organic, paid, and influencer — executed simultaneously for maximum impact. Real-time analytics, A/B testing, and weekly reporting. We scale what converts.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      alt: 'Campaign analytics and results',
      meta: 'Step 3 / Build',
    },
  ]

  return (
    <section id="process" ref={containerRef} className="relative px-4 sm:px-6 py-20">
      <div className="max-w-7xl mx-auto mb-16 px-2 sm:px-10">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">╱ How it works</span>
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight max-w-3xl">
          Three steps.
          <span className="block font-serif italic font-medium text-primary">No surprises.</span>
        </h2>
      </div>

      <div className="space-y-8">
        {steps.map((step, idx) => (
          <article
            key={idx}
            className="protocol-card sticky top-24 sm:top-28 mx-auto max-w-6xl bg-surface border border-divider rounded-6xl overflow-hidden shadow-2xl shadow-black/60"
          >
            <div className="grid lg:grid-cols-5 gap-0 min-h-[60vh] lg:min-h-[70vh]">
              <div className="lg:col-span-3 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
                    {step.meta}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                    7STAIRSS Protocol
                  </span>
                </div>

                <div className="my-12">
                  <span className="font-display font-extrabold text-[7rem] sm:text-[10rem] leading-none text-primary/10 -mb-4 block">
                    {step.num}
                  </span>
                  <h3 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.02] tracking-tight">
                    {step.title}
                  </h3>
                  <p className="font-serif italic text-primary text-2xl sm:text-3xl mt-3">
                    {step.tagline}
                  </p>
                </div>

                <p className="text-muted text-base sm:text-lg leading-relaxed max-w-lg">{step.text}</p>
              </div>

              <div className="lg:col-span-2 relative overflow-hidden min-h-[300px] lg:min-h-full bg-deep">
                <img
                  src={step.image}
                  alt={step.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-transparent to-deep/20" />
                <div className="absolute top-5 left-5 flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full pl-3 pr-4 py-1.5 border border-white/10">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white">
                    Step {step.num}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-widest text-white/50">
                  {step.num} / 7STAIRSS
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Services Grid — All 7 Services
---------------------------------------------------------------- */
function ServicesGrid() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.svc-tile', {
        scrollTrigger: { trigger: ref.current, start: 'top 90%', once: true },
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.06,
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-24 px-6 sm:px-10 lg:px-16 bg-deep text-white overflow-hidden rounded-t-6xl"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-accent/8 blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">╱ 7 pillars</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl mt-4 leading-[1.05] tracking-tight">
              Every stair.
              <span className="block font-serif italic font-medium text-primary">One ascent.</span>
            </h2>
          </div>
          <p className="text-white/50 max-w-md text-base leading-relaxed">
            Seven core services covering every touchpoint of your brand. We don't do half measures — it's all or nothing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-4xl overflow-hidden">
          {SERVICES_FULL.map((svc, i) => {
            const Icon = svc.icon
            return (
              <div
                key={i}
                className="svc-tile group bg-deep p-7 sm:p-9 hover:bg-white/[0.02] transition-colors duration-500 relative"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="h-12 w-12 rounded-2xl bg-primary/12 border border-primary/25 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                    <Icon className="h-5 w-5 text-primary group-hover:text-white" strokeWidth={2} />
                  </div>
                  <span className="font-mono text-[10px] text-white/25 uppercase tracking-widest">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl mb-3">{svc.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{svc.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Trust Signals
---------------------------------------------------------------- */
function TrustSignals() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const badges = [
    {
      Icon: ShieldCheck,
      title: 'Full-Service Agency',
      text: 'Seven pillars of brand building under one roof. Strategy, execution, and optimization in perfect sync — no agency-hopping required.',
    },
    {
      Icon: Award,
      title: 'Results Driven',
      text: 'Every decision is data-backed. We measure ROAS, engagement, organic reach, and ROI on every campaign we run. Vanity metrics don\'t matter — results do.',
    },
    {
      Icon: Clock,
      title: 'Always Available',
      text: 'Within 24 hours, always. Questions answered, strategies updated, campaigns optimized. We move at the speed your brand deserves — never slower.',
    },
  ]

  return (
    <section ref={ref} className="relative py-14 sm:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
            ╱ Why 7STAIRSS
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-ink mt-3 tracking-tight">
            More than an agency.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {badges.map(({ Icon, title, text }, i) => (
            <div
              key={i}
              style={{ transitionDelay: visible ? `${i * 120}ms` : '0ms' }}
              className={`bg-surface border border-divider rounded-4xl p-6 hover:border-primary/40 transition-all duration-700 ease-out shadow-xl shadow-black/40 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <Icon className="h-6 w-6 text-primary mb-3" strokeWidth={1.8} />
              <h3 className="font-display font-bold text-lg text-ink mb-1.5">{title}</h3>
              <p className="text-muted text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white font-semibold px-7 py-3.5 rounded-full shadow-xl shadow-primary/30"
          >
            Start Building
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Contact Form
---------------------------------------------------------------- */
function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', brand: '', service: '', message: '' })
  const [files, setFiles] = useState([])
  const [status, setStatus] = useState('idle')
  const dropRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 1200)
  }

  const handleFiles = (newFiles) => {
    setFiles((prev) => [...prev, ...Array.from(newFiles)].slice(0, 5))
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left info */}
          <div className="lg:col-span-5">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">╱ Contact</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight">
              Let's build
              <span className="block font-serif italic font-medium text-primary">something big.</span>
            </h2>
            <p className="text-muted text-lg mt-6 leading-relaxed max-w-md">
              Tell us about your brand and we'll put together a custom strategy — no strings attached.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href="mailto:hello@7stairss.com"
                className="lift-on-hover flex items-center gap-4 group"
              >
                <span className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition">
                  <Mail className="h-5 w-5 text-primary group-hover:text-white" />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-muted">Email us</span>
                  <span className="font-display font-semibold text-ink text-lg">hello@7stairss.com</span>
                </span>
              </a>

              <a
                href="https://instagram.com/7stairss"
                target="_blank"
                rel="noopener noreferrer"
                className="lift-on-hover flex items-center gap-4 group"
              >
                <span className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition">
                  <Instagram className="h-5 w-5 text-primary group-hover:text-white" />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-muted">Instagram</span>
                  <span className="font-display font-semibold text-ink text-lg">@7stairss</span>
                </span>
              </a>

              <div className="flex items-center gap-4">
                <span className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-muted">Response time</span>
                  <span className="font-display font-semibold text-ink text-lg">Within 24 hours</span>
                </span>
              </div>
            </div>

            <div className="mt-10 p-5 rounded-3xl bg-primary/5 border border-primary/15">
              <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-2">
                Free strategy call
              </p>
              <p className="text-sm text-muted leading-relaxed">
                Every inquiry gets a free 30-minute discovery call. We'll audit your current brand position and show you exactly where the growth opportunities are.
              </p>
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-surface border border-divider rounded-5xl p-7 sm:p-10 shadow-2xl shadow-black/50"
            >
              {status !== 'sent' ? (
                <>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field
                      label="Your Name"
                      required
                      value={form.name}
                      onChange={(v) => setForm({ ...form, name: v })}
                      placeholder="Jane Smith"
                    />
                    <Field
                      label="Email Address"
                      type="email"
                      required
                      value={form.email}
                      onChange={(v) => setForm({ ...form, email: v })}
                      placeholder="jane@company.com"
                    />
                    <Field
                      label="Brand / Company"
                      value={form.brand}
                      onChange={(v) => setForm({ ...form, brand: v })}
                      placeholder="Your brand name"
                    />
                    <div>
                      <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-2 block">
                        Service You Need
                      </label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full bg-background border border-divider rounded-2xl px-4 py-3.5 text-ink focus:border-primary focus:ring-4 focus:ring-primary/15 outline-none transition font-body appearance-none"
                      >
                        <option value="">Select a service…</option>
                        <option>SEO & Organic Search</option>
                        <option>Meta Ads & Paid Media</option>
                        <option>Graphic Design & Identity</option>
                        <option>Video Editing & Content</option>
                        <option>Social Media Marketing</option>
                        <option>Influencer Marketing & Reels</option>
                        <option>SaaS & Digital Products</option>
                        <option>Full Brand Building (All 7)</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-5">
                    <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-2 block">
                      Tell Us About Your Brand *
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      rows={5}
                      placeholder="What's your goal? Where are you now? What does domination look like for your brand?"
                      className="w-full bg-background border border-divider rounded-2xl px-4 py-3.5 text-ink placeholder-muted/50 focus:border-primary focus:ring-4 focus:ring-primary/15 outline-none transition resize-none font-body"
                    />
                  </div>

                  {/* File upload */}
                  <div
                    ref={dropRef}
                    onDragOver={(e) => {
                      e.preventDefault()
                      dropRef.current?.classList.add('!border-primary', '!bg-primary/5')
                    }}
                    onDragLeave={() => dropRef.current?.classList.remove('!border-primary', '!bg-primary/5')}
                    onDrop={(e) => {
                      e.preventDefault()
                      dropRef.current?.classList.remove('!border-primary', '!bg-primary/5')
                      handleFiles(e.dataTransfer.files)
                    }}
                    className="mt-5 border-2 border-dashed border-divider rounded-3xl p-6 text-center hover:border-primary/40 transition-colors cursor-pointer"
                  >
                    <input
                      type="file"
                      multiple
                      id="file-up"
                      className="hidden"
                      onChange={(e) => handleFiles(e.target.files)}
                      accept="image/*"
                    />
                    <label htmlFor="file-up" className="cursor-pointer block">
                      <Upload className="h-6 w-6 mx-auto text-primary mb-2" />
                      <p className="font-display font-semibold text-ink text-sm">
                        Attach brand assets or references
                      </p>
                      <p className="text-xs text-muted mt-1">Click or drag files here (max 5 images)</p>
                      {files.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2 justify-center">
                          {files.map((f, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs px-3 py-1.5 rounded-full font-mono"
                            >
                              <CheckCircle2 className="h-3 w-3" />
                              {f.name.length > 22 ? f.name.slice(0, 22) + '…' : f.name}
                            </span>
                          ))}
                        </div>
                      )}
                    </label>
                  </div>

                  <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p className="text-xs text-muted">We'll respond within 24 hours. Fields marked * are required.</p>
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-primary/30 disabled:opacity-50"
                    >
                      {status === 'sending' ? 'Sending…' : 'Send Message'}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="h-16 w-16 mx-auto rounded-full bg-primary/15 flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-ink mb-3">Message received!</h3>
                  <p className="text-muted max-w-md mx-auto">
                    We'll review your brand and get back to you within 24 hours with a custom strategy overview.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, type = 'text', required, value, onChange, placeholder }) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-2 block">
        {label} {required && '*'}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-background border border-divider rounded-2xl px-4 py-3.5 text-ink placeholder-muted/50 focus:border-primary focus:ring-4 focus:ring-primary/15 outline-none transition font-body"
      />
    </div>
  )
}

/* ----------------------------------------------------------------
   Footer
---------------------------------------------------------------- */
function Footer() {
  return (
    <footer className="relative bg-deep text-white rounded-t-6xl mt-12 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[40rem] rounded-full bg-primary/15 blur-3xl" />

      <div className="relative px-6 sm:px-10 lg:px-16 pt-20 pb-10 max-w-7xl mx-auto">
        {/* Big tagline */}
        <div className="border-b border-white/8 pb-12 mb-12">
          <h2 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl leading-[0.92] tracking-tight">
            Built to
            <span className="font-serif italic font-medium text-primary block">Dominate.</span>
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mt-8 gap-6">
            <p className="text-white/45 max-w-md">
              7STAIRSS — complete brand building, A to Z. Seven services. One vision. Your success.
            </p>
            <a
              href="#contact"
              className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white font-semibold px-7 py-3.5 rounded-full self-start sm:self-auto shadow-xl shadow-primary/30"
            >
              Start Climbing
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-9 w-9 rounded-full bg-primary flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" strokeWidth={2.4} />
              </span>
              <span className="font-display font-bold text-lg">7STAIRSS</span>
            </div>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs">
              Complete brand building from zero to iconic. Every service your brand needs to own its market — under one roof.
            </p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/25 mt-6">
              hello@7stairss.com
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-4">Services</p>
            <ul className="space-y-2.5">
              {SERVICES_FULL.slice(0, 4).map((s, i) => (
                <li key={i}>
                  <a href="#services" className="text-white/55 hover:text-primary transition text-sm">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-4">Company</p>
            <ul className="space-y-2.5">
              <li><a href="#approach" className="text-white/55 hover:text-primary transition text-sm">Approach</a></li>
              <li><a href="#process" className="text-white/55 hover:text-primary transition text-sm">Process</a></li>
              <li><a href="#services" className="text-white/55 hover:text-primary transition text-sm">Services</a></li>
              <li><a href="#contact" className="text-white/55 hover:text-primary transition text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-4">Connect</p>
            <ul className="space-y-2.5">
              <li>
                <a href="mailto:hello@7stairss.com" className="text-white/55 hover:text-primary transition text-sm">
                  hello@7stairss.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/7stairss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/55 hover:text-primary transition text-sm"
                >
                  @7stairss
                </a>
              </li>
              <li className="text-white/55 text-sm">Response within 24h</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/50">
              All systems live · Taking on new brands
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/40 text-xs font-mono">
            <Link to="/privacy" className="hover:text-primary transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition">Terms of Service</Link>
            <span>© 2026 7STAIRSS</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ----------------------------------------------------------------
   App
---------------------------------------------------------------- */
export default function App() {
  useEffect(() => {
    const t1 = setTimeout(() => ScrollTrigger.refresh(), 200)
    const t2 = setTimeout(() => ScrollTrigger.refresh(), 1000)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  return (
    <div className="relative">
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pillars />
        <Protocol />
        <ServicesGrid />
        <TrustSignals />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
