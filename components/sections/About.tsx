export function About() {
  return (
    <section id="about" style={{ paddingTop: '44px', paddingBottom: '56px' }}>
      <SectionLabel>About</SectionLabel>
      <div style={{ lineHeight: 1.85 }}>
        <p style={{ color: 'var(--fg)', margin: 0 }}>
          Hi, I'm Kiarad, a second-year Math-Phys major at the University of Waterloo.
          I am currently a machine learning research assistant at UofT.
        </p>
        <p style={{ color: 'var(--fg)', margin: 0, marginTop: '16px' }}>
          Most of my interests revolve around understanding systems at a fundamental level,
          whether that's physics, embedded systems, philosophy, or machine learning.
        </p>
        <p style={{ color: 'var(--fg)', margin: 0, marginTop: '16px' }}>
          If this sounds interesting to you, reach out to me :)
        </p>
      </div>
    </section>
  )
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      color: 'var(--muted)',
      fontSize: '12px',
      fontWeight: 500,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      marginBottom: '20px',
    }}>
      {children}
    </p>
  )
}
