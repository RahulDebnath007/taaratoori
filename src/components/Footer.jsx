import { company } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-rule mt-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-muted">
        <div>
          <p className="text-paper font-display text-base mb-1">{company.name}</p>
          <p>{company.tagline}</p>
        </div>
        <div className="sm:text-right">
          <p>{company.location}</p>
          <p>{company.email}</p>
        </div>
      </div>
    </footer>
  )
}
