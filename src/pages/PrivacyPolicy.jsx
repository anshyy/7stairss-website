import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-ink px-6 py-16 font-body">
      <div className="max-w-2xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted hover:text-primary transition mb-12 font-mono text-xs uppercase tracking-widest"
        >
          <ArrowLeft className="h-4 w-4" /> Back to 7STAIRSS
        </Link>
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Legal</span>
        <h1 className="font-display font-extrabold text-4xl text-ink mt-3 mb-8 tracking-tight">
          Privacy Policy
        </h1>
        <div className="prose prose-invert max-w-none text-muted leading-relaxed space-y-6">
          <p>
            At 7STAIRSS, we are committed to protecting your privacy. This policy outlines how we collect,
            use, and safeguard your personal information when you interact with our website and services.
          </p>
          <h2 className="font-display font-bold text-xl text-ink">Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as your name, email address, and brand
            details when you contact us or use our services. We also collect usage data to improve our website.
          </p>
          <h2 className="font-display font-bold text-xl text-ink">How We Use Your Information</h2>
          <p>
            Your information is used solely to respond to your inquiries, deliver our services, and improve
            your experience. We never sell your data to third parties.
          </p>
          <h2 className="font-display font-bold text-xl text-ink">Contact</h2>
          <p>
            For privacy-related questions, contact us at{' '}
            <a href="mailto:hello@7stairss.com" className="text-primary hover:underline">
              hello@7stairss.com
            </a>
          </p>
        </div>
        <p className="font-mono text-xs text-muted/50 mt-12">Last updated: June 2026</p>
      </div>
    </div>
  )
}
