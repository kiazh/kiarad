export function About() {
  return (
    <section id="about" style={{ paddingTop: '44px', paddingBottom: '56px' }}>
      <SectionLabel>About</SectionLabel>
      <div style={{ lineHeight: 1.85 }}>
        <p style={{ color: 'var(--fg)', marginBottom: '0px' }}>
          I'm a second-year Mathematical Physics student at the University of Waterloo.
        </p>
        <p style={{ color: 'var(--fg)', marginBottom: '0px', marginTop: '16px' }}>
          Most of my interests revolve around understanding systems at a fundamental level — whether that's physics, embedded systems, philosophy, or machine learning.
        </p>
        <p style={{ color: 'var(--fg)', marginBottom: '0px', marginTop: '16px' }}>
          If this sounds interesting to you, feel free to contact me{' '}
          <a
            href="mailto:kia.zheidari@gmail.com"
            style={{
              color: 'var(--fg)',
              textDecoration: 'underline',
              textUnderlineOffset: '4px',
              textDecorationColor: 'var(--muted)',
            }}
          >
            @kia.zheidari@gmail.com
          </a>
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
