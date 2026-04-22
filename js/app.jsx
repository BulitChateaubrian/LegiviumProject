// js/app.jsx — App router + Tweaks panel
const { useState, useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentColor": "#C4A05A",
  "heroStyle": "dark",
  "fontScale": 1
}/*EDITMODE-END*/;

/* ── Placeholder pages for nav items not yet built ── */
function PlaceholderPage({ title, subtitle, setPage }) {
  const [on, setOn] = useState(false);
  useEffect(() => { const t = setTimeout(() => setOn(true), 80); return () => clearTimeout(t); }, []);
  const tr = (d) => ({ opacity: on ? 1 : 0, transform: on ? 'none' : 'translateY(20px)', transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${d}s` });

  return (
    <div style={{ minHeight: '100vh' }}>
      <section style={{ background: 'var(--dark)', padding: '200px 56px 120px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(196,160,90,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(196,160,90,0.025) 1px, transparent 1px)', backgroundSize: '80px 80px', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 640, margin: '0 auto', position: 'relative' }}>
          <div style={{ ...tr(0.2) }}>
            <div className="stag" style={{ color: 'var(--gold)', justifyContent: 'center' }}>Legivium Digital</div>
          </div>
          <h1 style={{ ...tr(0.4), fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(44px,6vw,72px)', fontWeight: 300, color: '#FFF', lineHeight: 1.1, marginBottom: 20 }}>{title}</h1>
          <p style={{ ...tr(0.6), fontSize: 16, color: 'rgba(255,255,255,0.38)', lineHeight: 1.85, marginBottom: 44 }}>{subtitle}</p>
          <div style={{ ...tr(0.8), display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-gold" onClick={() => { setPage('contact'); window.scrollTo({ top: 0 }); }}>Prendre rendez-vous</button>
            <button className="btn btn-outline-w" onClick={() => { setPage('home'); window.scrollTo({ top: 0 }); }}>Retour à l'accueil</button>
          </div>
        </div>
      </section>
      <section style={{ padding: '80px 56px', background: 'var(--bg)', textAlign: 'center' }}>
        <Reveal>
          <p style={{ fontSize: 14, color: 'var(--text-light)', letterSpacing: '0.08em' }}>Cette page est en cours de développement — revenez bientôt.</p>
        </Reveal>
      </section>
    </div>
  );
}

/* ── Tweaks Panel ── */
function TweaksPanel({ tweaks, setTweaks, visible }) {
  const [local, setLocal] = useState(tweaks);

  const update = (k, v) => {
    const next = { ...local, [k]: v };
    setLocal(next);
    setTweaks(next);
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: next }, '*');
    // Apply accent color
    document.documentElement.style.setProperty('--gold', next.accentColor);
    // Apply font scale
    document.documentElement.style.fontSize = `${next.fontScale * 16}px`;
  };

  if (!visible) return null;

  const presets = [
    { label: 'Or classique', color: '#C4A05A' },
    { label: 'Platine', color: '#A8A8B0' },
    { label: 'Bronze', color: '#B87040' },
    { label: 'Champagne', color: '#D4B896' },
    { label: 'Cobalt', color: '#4A80C0' },
  ];

  return (
    <div style={{
      position: 'fixed', bottom: 24, right: 24, zIndex: 9999,
      background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.08)',
      boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
      padding: '24px 24px 20px', width: 280, borderRadius: '2px',
      fontFamily: "'DM Sans',sans-serif",
    }}>
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: 20, paddingBottom: 16, borderBottom: '1px solid rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 6, height: 6, background: 'var(--gold)', transform: 'rotate(45deg)' }} />
        Tweaks
      </div>

      {/* Accent color */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-mid)', marginBottom: 10 }}>Couleur d'accent</div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {presets.map(p => (
            <button key={p.color} title={p.label} onClick={() => update('accentColor', p.color)} style={{
              width: 28, height: 28, background: p.color, border: local.accentColor === p.color ? '2px solid var(--text)' : '2px solid transparent',
              cursor: 'pointer', borderRadius: '50%', transition: 'transform 0.2s',
            }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
          ))}
          <input type="color" value={local.accentColor} onChange={e => update('accentColor', e.target.value)} style={{ width: 28, height: 28, border: '1px solid rgba(0,0,0,0.1)', cursor: 'pointer', padding: 2, borderRadius: '50%', background: 'none' }} title="Couleur personnalisée" />
        </div>
      </div>

      {/* Font scale */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-mid)' }}>Taille du texte</div>
          <div style={{ fontSize: 11, color: 'var(--text-light)' }}>{Math.round(local.fontScale * 100)}%</div>
        </div>
        <input type="range" min="0.85" max="1.2" step="0.05" value={local.fontScale}
          onChange={e => update('fontScale', parseFloat(e.target.value))}
          style={{ width: '100%', accentColor: local.accentColor, cursor: 'pointer' }} />
      </div>

      {/* Hero style */}
      <div>
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-mid)', marginBottom: 10 }}>Style du héro</div>
        <div style={{ display: 'flex', gap: 8 }}>
          {[['dark', 'Sombre'], ['navy', 'Marine']].map(([val, label]) => (
            <button key={val} onClick={() => update('heroStyle', val)} style={{
              flex: 1, padding: '8px 0', fontSize: 11.5, fontWeight: 500,
              border: `1px solid ${local.heroStyle === val ? 'var(--gold)' : 'rgba(0,0,0,0.1)'}`,
              background: local.heroStyle === val ? 'var(--gold-bg)' : 'transparent',
              color: local.heroStyle === val ? 'var(--gold-dark)' : 'var(--text-light)',
              cursor: 'pointer', transition: 'all 0.2s', fontFamily: "'DM Sans',sans-serif",
            }}>{label}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Main App ── */
function App() {
  const saved = (() => { try { return JSON.parse(localStorage.getItem('lv_page') || '"home"'); } catch { return 'home'; } })();
  const [page, setPageRaw] = useState(saved);
  const [tweaks, setTweaks] = useState(TWEAK_DEFAULTS);
  const [tweaksVisible, setTweaksVisible] = useState(false);

  const setPage = (p) => {
    setPageRaw(p);
    try { localStorage.setItem('lv_page', JSON.stringify(p)); } catch {}
  };

  // Apply tweaks on mount
  useEffect(() => {
    document.documentElement.style.setProperty('--gold', tweaks.accentColor);
    document.documentElement.style.fontSize = `${tweaks.fontScale * 16}px`;
  }, []);

  // Apply hero style tweak
  useEffect(() => {
    if (tweaks.heroStyle === 'navy') {
      document.documentElement.style.setProperty('--dark', '#0A1628');
      document.documentElement.style.setProperty('--dark-mid', '#0D1E38');
    } else {
      document.documentElement.style.setProperty('--dark', '#12243E');
      document.documentElement.style.setProperty('--dark-mid', '#1A3154');
    }
  }, [tweaks.heroStyle]);

  // Tweaks message bridge
  useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === '__activate_edit_mode') setTweaksVisible(true);
      if (e.data?.type === '__deactivate_edit_mode') setTweaksVisible(false);
    };
    window.addEventListener('message', handler);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', handler);
  }, []);

  const renderPage = () => {
    switch (page) {
      case 'home':     return <HomePage setPage={setPage} />;
      case 'services': return <ServicesPage setPage={setPage} />;
      case 'contact':  return <ContactPage setPage={setPage} />;
      case 'results':  return <PlaceholderPage title="Nos résultats" subtitle="Études de cas, performances et témoignages de nos clients juridiques." setPage={setPage} />;
      case 'blog':     return <PlaceholderPage title="Blog & Ressources" subtitle="Guides, articles et stratégies pour les professionnels du droit." setPage={setPage} />;
      case 'about':    return <PlaceholderPage title="À propos" subtitle="L'équipe Legivium Digital et notre vision du digital juridique." setPage={setPage} />;
      default:         return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div>
      <Nav activePage={page} setPage={setPage} />
      <main key={page}>
        {renderPage()}
      </main>
      <Footer setPage={setPage} />
      <TweaksPanel tweaks={tweaks} setTweaks={setTweaks} visible={tweaksVisible} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
