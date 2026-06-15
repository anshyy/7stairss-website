import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function Terms() {
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
          Terms of Service
        </h1>
        <div className="prose prose-invert max-w-none text-muted leading-relaxed space-y-6">
          <p>
            By engaging with 7STAIRSS, you agree to these terms of service. Our services are provided on
            a project basis with terms agreed upon in individual client agreements.
          </p>
          <h2 className="font-display font-bold text-xl text-ink">Services</h2>
          <p>
            7STAIRSS provides brand building, digital marketing, and creative services. Specific deliverables,
            timelines, and fees are outlined in individual project proposals.
          </p>
          <h2 className="font-display font-bold text-xl text-ink">Intellectual Property</h2>
          <p>
            Upon full payment, clients receive ownership of all deliverables created specifically for their
            brand. 7STAIRSS retains the right to display work in our portfolio.
          </p>
          <h2 className="font-display font-bold text-xl text-ink">Contact</h2>
          <p>
            For questions about these terms, contact{' '}
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
