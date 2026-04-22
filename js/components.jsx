// js/components.jsx — Shared components for Legivium Digital
const { useState, useEffect, useRef } = React;

function useScrollReveal(threshold = 0.1) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, vis];
}

function Reveal({ children, d = 0, className = '', style = {}, tag: Tag = 'div' }) {
  const [ref, vis] = useScrollReveal();
  return (
    <Tag ref={ref} className={`reveal ${vis ? 'vis' : ''} ${d ? `d${d}` : ''} ${className}`} style={style}>
      {children}
    </Tag>
  );
}

function Logo({ light = false, size = 1 }) {
  const s = size;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 * s, userSelect: 'none', cursor: 'pointer' }}>
      <svg width={22 * s} height={22 * s} viewBox="0 0 22 22" fill="none">
        <path d="M11 1L21 11L11 21L1 11Z" fill="#C4A05A"/>
        <path d="M11 6L16 11L11 16L6 11Z" fill={light ? '#FAF8F3' : '#0C0C0F'}/>
      </svg>
      <div>
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 19 * s, fontWeight: 600, letterSpacing: '0.16em', color: light ? '#FFFFFF' : '#1C1C22', lineHeight: 1, textTransform: 'uppercase' }}>LEGIVIUM</div>
        <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 8.5 * s, fontWeight: 500, letterSpacing: '0.28em', color: '#C4A05A', textTransform: 'uppercase', lineHeight: 1, marginTop: 3 }}>DIGITAL</div>
      </div>
    </div>
  );
}

function Nav({ activePage, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn, { passive: true });
    fn();
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const onHero = activePage === 'home' && !scrolled;
  const nav = (page) => { setPage(page); window.scrollTo({ top: 0 }); };

  return (
    <nav className={`lnav ${onHero ? 'hero' : 'solid'}`}>
      <div onClick={() => nav('home')}><Logo light={onHero} /></div>
      <div className="lnav-links">
        {[['Services', 'services'], ['Résultats', 'results'], ['Ressources', 'blog'], ['À propos', 'about']].map(([label, page]) => (
          <button key={page} className="lnav-link" onClick={() => nav(page)}>{label}</button>
        ))}
        <button className="lnav-cta" onClick={() => nav('contact')}>Prendre rendez-vous</button>
      </div>
    </nav>
  );
}

function STag({ children }) {
  return <div className="stag">{children}</div>;
}

function ServiceIcon({ type }) {
  const p = { stroke: 'currentColor', strokeWidth: 1.5, fill: 'none' };
  const icons = {
    web:     <svg width="19" height="19" viewBox="0 0 24 24" {...p}><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
    seo:     <svg width="19" height="19" viewBox="0 0 24 24" {...p}><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35M11 8v6M8 11h6"/></svg>,
    ads:     <svg width="19" height="19" viewBox="0 0 24 24" {...p}><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
    ai:      <svg width="19" height="19" viewBox="0 0 24 24" {...p}><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>,
    content: <svg width="19" height="19" viewBox="0 0 24 24" {...p}><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>,
    brand:   <svg width="19" height="19" viewBox="0 0 24 24" {...p}><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
  };
  return icons[type] || null;
}

function Footer({ setPage }) {
  const nav = (page) => { setPage(page); window.scrollTo({ top: 0 }); };
  const cols = [
    { title: 'Services', items: ['Sites web & Landing pages', 'SEO Juridique', 'Google & Meta Ads', 'Outils IA sur-mesure', 'Stratégie de contenu'] },
    { title: 'Agence', items: ['Notre approche', 'Résultats', 'Blog & Ressources', 'À propos', 'Mentions légales'] },
    { title: 'Contact', items: ['Prendre rendez-vous', 'Demande de devis', 'hello@legivium.fr', '+33 1 85 00 00 00'] },
  ];
  return (
    <footer style={{ background: 'var(--dark)', color: 'rgba(255,255,255,0.5)', padding: '80px 56px 36px' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr 1fr 1fr', gap: 48, marginBottom: 60 }}>
          <div>
            <Logo light />
            <p style={{ marginTop: 22, fontSize: 13.5, lineHeight: 1.85, color: 'rgba(255,255,255,0.4)', maxWidth: 270 }}>
              L'agence 100% dédiée aux professionnels du droit. Sites web, SEO, publicité et outils IA.
            </p>
            <div style={{ marginTop: 24, display: 'flex', gap: 10 }}>
              {['LN','TW','YT'].map(s => (
                <div key={s} style={{ width: 34, height: 34, border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: 10, fontWeight: 700, letterSpacing: '0.05em', color: 'rgba(255,255,255,0.3)', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.3)'; }}
                >{s}</div>
              ))}
            </div>
          </div>
          {cols.map(col => (
            <div key={col.title}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', marginBottom: 18 }}>{col.title}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
                {col.items.map(item => (
                  <div key={item} style={{ fontSize: 13, cursor: 'pointer', transition: 'color 0.2s', color: 'rgba(255,255,255,0.45)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
                  >{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ height: 1, background: 'rgba(255,255,255,0.05)', marginBottom: 24 }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>
          <div>© 2025 Legivium Digital. Tous droits réservés.</div>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Mentions légales','Confidentialité','CGV'].map(l => <span key={l} style={{ cursor: 'pointer' }}>{l}</span>)}
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { useScrollReveal, Reveal, Logo, Nav, STag, ServiceIcon, Footer });
