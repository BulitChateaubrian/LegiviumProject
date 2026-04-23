// js/home.jsx — Homepage sections
const { useState, useEffect, useRef } = React;

/* ─── HERO ─── */
function HeroSection({ setPage, mobile }) {
  const [on, setOn] = useState(false);
  useEffect(() => { const t = setTimeout(() => setOn(true), 80); return () => clearTimeout(t); }, []);
  const tr = (delay, extra = {}) => ({ opacity: on ? 1 : 0, transform: on ? 'none' : 'translateY(22px)', transition: `opacity 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}s`, ...extra });

  return (
    <section data-screen-label="Hero" style={{ height: '100vh', minHeight: 600, background: 'radial-gradient(ellipse at 30% 60%, #1A3154 0%, #12243E 70%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: mobile ? '0 20px' : '0 40px', position: 'relative', overflow: 'hidden' }}>

      {/* Subtle grid */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(196,160,90,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(196,160,90,0.03) 1px, transparent 1px)', backgroundSize: '90px 90px', pointerEvents: 'none' }} />

      {/* Decorative rings — hide on mobile */}
      {!mobile && <>
        <div style={{ position: 'absolute', top: '15%', right: '8%', opacity: 0.18, pointerEvents: 'none' }}>
          <svg width="240" height="240" viewBox="0 0 240 240" fill="none">
            {[110,80,50,20].map(r => <circle key={r} cx="120" cy="120" r={r} stroke="#C4A05A" strokeWidth="0.6"/>)}
          </svg>
        </div>
        <div style={{ position: 'absolute', bottom: '10%', left: '5%', opacity: 0.13, pointerEvents: 'none' }}>
          <svg width="140" height="140" viewBox="0 0 140 140" fill="none">
            <path d="M70 5L135 70L70 135L5 70Z" stroke="#C4A05A" strokeWidth="0.6"/>
            <path d="M70 30L110 70L70 110L30 70Z" stroke="#C4A05A" strokeWidth="0.6"/>
          </svg>
        </div>
      </>}

      <div style={{ textAlign: 'center', maxWidth: 860, position: 'relative', width: '100%' }}>
        {/* Label */}
        <div style={{ ...tr(0.2), marginBottom: mobile ? 24 : 36, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
          <div style={{ width: 28, height: 1, background: 'var(--gold)' }} />
          <span style={{ fontSize: mobile ? 9.5 : 10.5, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)' }}>Agence Digitale Juridique</span>
          <div style={{ width: 28, height: 1, background: 'var(--gold)' }} />
        </div>

        {/* Headline */}
        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", lineHeight: 1.06, marginBottom: 0 }}>
          <div style={{ ...tr(0.38), fontSize: 'clamp(38px,7.5vw,90px)', fontWeight: 300, color: 'rgba(255,255,255,0.92)', letterSpacing: '-0.01em' }}>
            L'agence qui transforme
          </div>
          <div style={{ ...tr(0.55), fontSize: 'clamp(38px,7.5vw,90px)', fontWeight: 400, fontStyle: 'italic', color: 'rgba(255,255,255,0.72)', letterSpacing: '-0.01em' }}>
            les professionnels du droit
          </div>
          <div style={{ ...tr(0.72), fontSize: 'clamp(38px,7.5vw,90px)', fontWeight: 600, color: '#FFFFFF', letterSpacing: '-0.01em' }}>
            en références digitales<span style={{ color: 'var(--gold)' }}>.</span>
          </div>
        </h1>

        {/* Gold line */}
        <div style={{ display: 'flex', justifyContent: 'center', margin: '24px 0' }}>
          <div style={{ height: 1, background: 'var(--gold)', opacity: on ? 1 : 0, width: on ? 72 : 0, transition: 'width 0.9s cubic-bezier(0.16,1,0.3,1) 0.9s, opacity 0.4s 0.9s' }} />
        </div>

        {/* Subtitle */}
        <p style={{ ...tr(1.0), fontSize: mobile ? 14 : 16, lineHeight: 1.85, color: 'rgba(255,255,255,0.45)', maxWidth: 520, margin: '0 auto', marginBottom: mobile ? 32 : 44, fontWeight: 300, letterSpacing: '0.01em' }}>
          Sites web, SEO, publicité et outils IA — exclusivement conçus pour les avocats, notaires, huissiers et cabinets juridiques.
        </p>

        {/* CTAs */}
        <div style={{ ...tr(1.2), display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', flexDirection: mobile ? 'column' : 'row', alignItems: 'center' }}>
          <button className="btn btn-gold" style={mobile ? { width: '100%', maxWidth: 320, justifyContent: 'center' } : {}} onClick={() => { setPage('contact'); window.scrollTo({ top: 0 }); }}>Prendre rendez-vous</button>
          <button className="btn btn-outline-w" style={mobile ? { width: '100%', maxWidth: 320, justifyContent: 'center' } : {}} onClick={() => { setPage('services'); window.scrollTo({ top: 0 }); }}>Découvrir nos services</button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)', opacity: on ? 1 : 0, transition: 'opacity 0.6s ease 2s', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
        <span style={{ fontSize: 9.5, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', fontWeight: 500 }}>Défiler</span>
        <div style={{ width: 1, height: 44, background: 'linear-gradient(to bottom, rgba(196,160,90,0.7), transparent)', animation: 'scrollBounce 2.2s ease-in-out infinite' }} />
      </div>
    </section>
  );
}

/* ─── TICKER ─── */
function TickerSection() {
  const items = ['Avocats', 'Notaires', 'Huissiers de justice', 'Cabinets juridiques', 'Legaltech', 'Consultants juridiques', 'Administrateurs judiciaires', 'Juristes d\'entreprise'];
  const doubled = [...items, ...items];
  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <div key={i} className="ticker-item">
            {item}
            <span className="ticker-dot" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── STATS COUNT-UP ─── */
function CountUp({ target, prefix = '', suffix = '', vis, delay = 0 }) {
  const [val, setVal] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (!vis || started.current) return;
    started.current = true;
    const t = setTimeout(() => {
      const duration = 1600;
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(ease * target));
        if (p < 1) requestAnimationFrame(tick);
        else setVal(target);
      };
      requestAnimationFrame(tick);
    }, delay);
    return () => clearTimeout(t);
  }, [vis]);
  return <span>{prefix}{val}{suffix}</span>;
}

function StatsSection({ mobile, tablet }) {
  const [ref, vis] = useScrollReveal();
  const stats = [
    { target: 120, suffix: '+', label: 'Projets livrés', sub: 'pour des professionnels du droit', delay: 0 },
    { target: 3, prefix: '×', label: 'Leads générés', sub: 'en moyenne après 6 mois', delay: 150 },
    { target: 98, suffix: '%', label: 'Satisfaction client', sub: 'sur l\'ensemble de nos projets', delay: 300 },
  ];
  const cols = mobile ? '1fr' : 'repeat(3,1fr)';
  const pad = mobile ? '56px 20px' : tablet ? '72px 32px' : '100px 56px';
  return (
    <section ref={ref} style={{ background: 'var(--bg-alt)', padding: pad }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: cols, gap: 2 }}>
          {stats.map((s, i) => (
            <div key={i} className={`reveal ${vis ? 'vis' : ''} d${i + 1}`} style={{ textAlign: 'center', padding: mobile ? '40px 24px' : '56px 40px', background: 'var(--white)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', bottom: 0, left: 0, height: 2, background: 'var(--gold)', width: vis ? '100%' : '0%', transition: `width 1s cubic-bezier(0.16,1,0.3,1) ${0.3 + i * 0.15}s` }} />
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(48px,6vw,80px)', fontWeight: 300, color: 'var(--dark)', lineHeight: 1, marginBottom: 10 }}>
                <CountUp target={s.target} prefix={s.prefix || ''} suffix={s.suffix || ''} vis={vis} delay={s.delay} />
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: 6 }}>{s.label}</div>
              <div style={{ fontSize: 12.5, color: 'var(--text-light)', lineHeight: 1.6 }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── INTRO / WHY ─── */
function WhySection({ mobile }) {
  const points = [
    { n: '01', title: 'Spécialisation exclusive', desc: 'Seule agence 100% dédiée aux professions juridiques réglementées. Nous connaissons vos contraintes, vos clients, vos codes.' },
    { n: '02', title: 'Approche ROI-first', desc: 'Chaque décision de design, de contenu ou de ciblage vise un seul objectif : maximiser vos leads qualifiés et votre retour sur investissement.' },
    { n: '03', title: 'IA & Innovation maîtrisées', desc: 'Nous développons des outils IA propriétaires adaptés aux workflows des cabinets — pour gagner en efficacité sans sacrifier la conformité.' },
    { n: '04', title: 'Partenaire, pas prestataire', desc: 'Un interlocuteur dédié, une vision long terme. Nous construisons avec vous une présence digitale durable, pas un site vitrine de plus.' },
  ];
  const pad = mobile ? '72px 20px' : '120px 56px';
  return (
    <section style={{ padding: pad, background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: mobile ? 40 : 80, alignItems: 'start' }}>
          <div>
            <Reveal><STag>Notre différence</STag></Reveal>
            <Reveal d={1}>
              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(32px,4vw,52px)', fontWeight: 400, lineHeight: 1.12, color: 'var(--dark)', marginBottom: 24 }}>
                Pourquoi les professionnels du droit nous choisissent
              </h2>
            </Reveal>
            <Reveal d={2}>
              <p style={{ fontSize: 15, lineHeight: 1.85, color: 'var(--text-mid)', marginBottom: 36 }}>
                Legivium Digital est né d'un constat simple : les agences généralistes ne comprennent pas le monde juridique. Nous avons construit une expertise exclusive, au service de votre croissance.
              </p>
              <div style={{ width: 48, height: 1, background: 'var(--gold)' }} />
            </Reveal>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: mobile ? 28 : 36 }}>
            {points.map((p, i) => (
              <Reveal key={p.n} d={i + 1} style={{ display: 'flex', gap: 24 }}>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 13, color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.12em', minWidth: 28, paddingTop: 3 }}>{p.n}</div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--dark)', marginBottom: 7, letterSpacing: '0.01em' }}>{p.title}</div>
                  <div style={{ fontSize: 13.5, lineHeight: 1.75, color: 'var(--text-mid)' }}>{p.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SERVICES ─── */
function ServicesSection({ setPage, mobile, tablet }) {
  const services = [
    { type: 'web', title: 'Sites web & Landing pages', desc: 'Des interfaces premium pensées pour convertir vos visiteurs en clients qualifiés, dès le premier regard.' },
    { type: 'seo', title: 'SEO Juridique', desc: 'Dominez les résultats Google sur vos mots-clés métier et géographiques. Visibilité durable, leads organiques.' },
    { type: 'ads', title: 'Google & Meta Ads', desc: 'Campagnes d\'acquisition calibrées pour le secteur juridique. Résultats mesurables dès le lancement.' },
    { type: 'ai', title: 'Outils IA sur-mesure', desc: 'Assistants intelligents qui automatisent la prise en charge client, la pré-qualification et les FAQ de votre cabinet.' },
    { type: 'content', title: 'Stratégie de contenu', desc: 'Contenu expert qui construit votre autorité sectorielle et nourrit votre référencement naturel.' },
    { type: 'brand', title: 'Identité digitale', desc: 'Image de marque cohérente et premium, pensée pour inspirer confiance aux clients d\'exigence.' },
  ];
  const pad = mobile ? '72px 20px' : '120px 56px';
  const cols = mobile ? '1fr' : tablet ? '1fr 1fr' : 'repeat(3,1fr)';
  return (
    <section style={{ padding: pad, background: 'var(--bg-alt)' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: mobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: mobile ? 'flex-start' : 'flex-end', gap: mobile ? 20 : 0, marginBottom: mobile ? 40 : 64 }}>
          <div>
            <Reveal><STag>Nos services</STag></Reveal>
            <Reveal d={1}>
              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(28px,4vw,50px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--dark)', maxWidth: 480 }}>
                Une expertise digitale complète pour les professions réglementées
              </h2>
            </Reveal>
          </div>
          <Reveal d={2}>
            <button className="btn btn-outline" style={{ flexShrink: 0 }} onClick={() => { setPage('services'); window.scrollTo({ top: 0 }); }}>
              Voir tous les services
            </button>
          </Reveal>
        </div>
        <div className="grid-3col" style={{ display: 'grid', gridTemplateColumns: cols, gap: 2, alignItems: 'stretch' }}>
          {services.map((s, i) => (
            <Reveal key={s.type} d={Math.min(i + 1, 6)} style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="scard" onClick={() => { setPage('services'); window.scrollTo({ top: 0 }); }} style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div className="scard-icon"><ServiceIcon type={s.type} /></div>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: 'var(--dark)', marginBottom: 12, lineHeight: 1.3 }}>{s.title}</h3>
                <p style={{ fontSize: 13.5, lineHeight: 1.75, color: 'var(--text-mid)', flex: 1 }}>{s.desc}</p>
                <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 8, fontSize: 11.5, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                  En savoir plus
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── AI SECTION ─── */
function AISection({ setPage, mobile }) {
  const [ref, vis] = useScrollReveal();
  const [msgIdx, setMsgIdx] = useState(0);
  const msgs = [
    { role: 'client', text: 'Bonjour, j\'ai besoin d\'un avocat en droit des affaires pour un litige urgent.' },
    { role: 'ai', text: 'Bonjour et bienvenue. Pouvez-vous me préciser la nature du litige et la partie adverse ?' },
    { role: 'client', text: 'Il s\'agit d\'un conflit avec un associé sur la cession de parts d\'une SARL.' },
    { role: 'ai', text: 'Compris. Maître Laurent, spécialisé en droit des sociétés, peut vous recevoir dès jeudi. Souhaitez-vous réserver ce créneau ?' },
  ];

  useEffect(() => {
    if (!vis) return;
    if (msgIdx >= msgs.length - 1) return;
    const t = setTimeout(() => setMsgIdx(i => i + 1), 1800);
    return () => clearTimeout(t);
  }, [vis, msgIdx]);

  const tools = [
    { title: 'Assistant d\'accueil client', desc: 'Qualifie et oriente chaque visiteur vers le bon profil de conseil.' },
    { title: 'Pré-qualification des dossiers', desc: 'Analyse les demandes entrantes et priorise les dossiers à fort potentiel.' },
    { title: 'FAQ juridique intelligente', desc: 'Répond aux questions fréquentes 24h/24, filtre les demandes non pertinentes.' },
    { title: 'Préparation de rendez-vous', desc: 'Collecte les informations préalables et prépare le dossier du client.' },
  ];

  const pad = mobile ? '72px 20px' : '120px 56px';

  return (
    <section ref={ref} style={{ background: 'var(--dark-mid)', padding: pad }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: mobile ? 48 : 80, alignItems: 'center' }}>
          {/* Left */}
          <div>
            <div className={`reveal ${vis ? 'vis' : ''}`}>
              <div className="stag" style={{ color: 'var(--gold)' }}>Intelligence artificielle</div>
            </div>
            <div className={`reveal ${vis ? 'vis' : ''} d1`}>
              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(28px,3.5vw,48px)', fontWeight: 400, lineHeight: 1.12, color: '#FFFFFF', marginBottom: 20 }}>
                L'IA au service de votre cabinet, pas d'un cabinet générique
              </h2>
            </div>
            <div className={`reveal ${vis ? 'vis' : ''} d2`}>
              <p style={{ fontSize: 14.5, lineHeight: 1.85, color: 'rgba(255,255,255,0.45)', marginBottom: 40 }}>
                Nous développons des outils IA sur-mesure — conçus avec vous, pour vos process. Pas des templates. Des solutions propriétaires adaptées à votre spécialité et à votre clientèle.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 40 }}>
              {tools.map((t, i) => (
                <div key={i} className={`reveal ${vis ? 'vis' : ''} d${i + 2}`} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ width: 28, height: 28, border: '1px solid rgba(196,160,90,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--gold)', fontSize: 10 }}>✦</div>
                  <div>
                    <div style={{ fontSize: 13.5, fontWeight: 600, color: 'rgba(255,255,255,0.85)', marginBottom: 4 }}>{t.title}</div>
                    <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.38)', lineHeight: 1.6 }}>{t.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className={`reveal ${vis ? 'vis' : ''} d6`}>
              <button className="btn btn-gold" style={mobile ? { width: '100%', justifyContent: 'center' } : {}} onClick={() => { setPage('services'); window.scrollTo({ top: 0 }); }}>Découvrir nos outils IA</button>
            </div>
          </div>

          {/* Right: Chat mockup */}
          <div className={`reveal ${vis ? 'vis' : ''} d2`}>
            <div style={{ background: '#0C0C0F', border: '1px solid rgba(196,160,90,0.15)', overflow: 'hidden' }}>
              {/* Header */}
              <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                <div style={{ width: 8, height: 8, background: 'var(--gold)', borderRadius: '50%', animation: 'blink 2s ease-in-out infinite', flexShrink: 0 }} />
                <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>Assistant Legivium IA</span>
                {!mobile && <span style={{ marginLeft: 'auto', fontSize: 10, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.08em' }}>CABINET DUPONT & ASSOCIÉS</span>}
              </div>
              {/* Messages */}
              <div style={{ padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: 16, minHeight: 240 }}>
                {msgs.slice(0, msgIdx + 1).map((m, i) => (
                  <div key={i} className="chat-msg" style={{ animationDelay: `${i * 0.1}s`, display: 'flex', justifyContent: m.role === 'client' ? 'flex-end' : 'flex-start' }}>
                    <div style={{
                      maxWidth: '82%', padding: '10px 14px', fontSize: 12.5, lineHeight: 1.65,
                      background: m.role === 'client' ? 'rgba(196,160,90,0.12)' : 'rgba(255,255,255,0.06)',
                      color: m.role === 'client' ? 'rgba(255,255,255,0.75)' : 'rgba(255,255,255,0.6)',
                      borderRadius: '2px',
                      borderLeft: m.role === 'ai' ? '2px solid var(--gold)' : 'none',
                    }}>{m.text}</div>
                  </div>
                ))}
                {msgIdx < msgs.length - 1 && (
                  <div style={{ display: 'flex', gap: 4, padding: '6px 0' }}>
                    {[0, 0.25, 0.5].map(d => <div key={d} style={{ width: 5, height: 5, background: 'var(--gold)', borderRadius: '50%', opacity: 0.5, animation: `blink 1.2s ease-in-out ${d}s infinite` }} />)}
                  </div>
                )}
              </div>
              {/* Footer */}
              <div style={{ padding: '12px 20px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: 8 }}>
                <div style={{ flex: 1, background: 'rgba(255,255,255,0.04)', height: 36, borderRadius: '2px', border: '1px solid rgba(255,255,255,0.07)' }} />
                <div style={{ width: 36, height: 36, background: 'rgba(196,160,90,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>
            </div>
            <div style={{ marginTop: 12, fontSize: 11, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.08em', textAlign: 'center' }}>Interface de démonstration — Assistant d'accueil IA sur-mesure</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── PROCESS ─── */
function ProcessCard({ s, i, vis, mobile }) {
  const [hov, setHov] = useState(false);
  const base = i % 2 === 0 ? 'var(--white)' : 'var(--bg-alt)';
  return (
    <div
      className={`reveal ${vis ? 'vis' : ''} d${i + 1}`}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? 'var(--dark)' : base,
        padding: mobile ? '32px 24px' : '44px 32px',
        transition: 'background 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s ease',
        transform: hov ? 'translateY(-6px)' : 'none',
        boxShadow: hov ? '0 24px 52px rgba(0,0,0,0.14)' : 'none',
        cursor: 'default', position: 'relative', overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'var(--gold)', transform: hov ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1)' }} />
      <div style={{ position: 'absolute', bottom: 24, right: 24, opacity: hov ? 1 : 0, transition: 'opacity 0.3s ease, transform 0.3s ease', transform: hov ? 'none' : 'translateX(-8px)' }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </div>
      <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 52, fontWeight: 300, lineHeight: 1, marginBottom: 20, transition: 'color 0.35s', color: hov ? 'rgba(196,160,90,0.55)' : 'rgba(196,160,90,0.22)' }}>{s.n}</div>
      <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 12, transition: 'color 0.35s', color: hov ? '#FFFFFF' : 'var(--dark)' }}>{s.title}</div>
      <div style={{ fontSize: 13.5, lineHeight: 1.75, transition: 'color 0.35s', color: hov ? 'rgba(255,255,255,0.5)' : 'var(--text-mid)' }}>{s.desc}</div>
    </div>
  );
}

function ProcessSection({ mobile, tablet }) {
  const [ref, vis] = useScrollReveal();
  const steps = [
    { n: '01', title: 'Audit & Stratégie', desc: 'Analyse de votre positionnement, de vos concurrents et de vos objectifs de croissance.' },
    { n: '02', title: 'Conception', desc: 'Design premium sur-mesure, copywriting orienté conversion, architecture SEO.' },
    { n: '03', title: 'Déploiement', desc: 'Mise en ligne optimisée, tracking configuré, tests de performance complets.' },
    { n: '04', title: 'Croissance continue', desc: 'Suivi mensuel, optimisations data-driven, reporting transparent et régulier.' },
  ];
  const pad = mobile ? '72px 20px' : '120px 56px';
  const cols = mobile ? '1fr 1fr' : tablet ? '1fr 1fr' : 'repeat(4,1fr)';
  return (
    <section style={{ padding: pad, background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: mobile ? 48 : 72 }}>
          <Reveal><STag>Notre méthode</STag></Reveal>
          <Reveal d={1}>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(28px,4vw,50px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--dark)' }}>
              De la stratégie aux résultats
            </h2>
          </Reveal>
        </div>
        <div ref={ref} className="grid-4col" style={{ display: 'grid', gridTemplateColumns: cols, gap: 2 }}>
          {steps.map((s, i) => <ProcessCard key={s.n} s={s} i={i} vis={vis} mobile={mobile} />)}
        </div>
      </div>
    </section>
  );
}

/* ─── PROOF / TESTIMONIALS ─── */
function ProofSection({ mobile, tablet }) {
  const testimonials = [
    { quote: 'Notre cabinet a multiplié par trois ses demandes de consultation en l\'espace de quatre mois. L\'investissement a été rentabilisé dès le premier trimestre.', name: 'Maître Sophie L.', role: 'Avocate — Droit de la famille', city: 'Paris' },
    { quote: 'Legivium a su comprendre les spécificités de notre étude pour créer une image digitale qui reflète vraiment notre positionnement premium.', name: 'Étude Notariale Mercier', role: 'Office notarial', city: 'Lyon' },
    { quote: 'Les campagnes Google Ads nous génèrent en moyenne 40 leads qualifiés par mois. L\'équipe est réactive, transparente et véritablement spécialisée.', name: 'Cabinet Vidal & Associés', role: 'Droit des affaires', city: 'Bordeaux' },
  ];
  const pad = mobile ? '72px 20px' : '120px 56px';
  const cols = mobile ? '1fr' : tablet ? '1fr' : 'repeat(3,1fr)';
  return (
    <section style={{ padding: pad, background: 'var(--bg-alt)' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: mobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: mobile ? 'flex-start' : 'flex-end', gap: 16, marginBottom: mobile ? 36 : 64 }}>
          <div>
            <Reveal><STag>Témoignages</STag></Reveal>
            <Reveal d={1}>
              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(28px,4vw,48px)', fontWeight: 400, lineHeight: 1.12, color: 'var(--dark)' }}>
                Ce que disent nos clients
              </h2>
            </Reveal>
          </div>
        </div>
        <div className="grid-3col-proof" style={{ display: 'grid', gridTemplateColumns: cols, gap: 2 }}>
          {testimonials.map((t, i) => (
            <Reveal key={i} d={i + 1}>
              <div style={{ background: 'var(--white)', padding: mobile ? '32px 24px' : '40px 36px', height: '100%' }}>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 48, color: 'var(--gold)', lineHeight: 0.8, marginBottom: 24, opacity: 0.6 }}>"</div>
                <p style={{ fontSize: 14, lineHeight: 1.85, color: 'var(--text-mid)', marginBottom: 32, fontStyle: 'italic' }}>{t.quote}</p>
                <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: 20 }}>
                  <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--dark)' }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-light)', marginTop: 4 }}>{t.role} · {t.city}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        {/* Trust badges */}
        <Reveal d={4}>
          <div className="trust-badges" style={{ marginTop: 40, display: 'flex', alignItems: 'stretch', flexWrap: mobile ? 'wrap' : 'nowrap' }}>
            {['Spécialiste agréé Legal Digital', 'Membre du réseau Legaltech France', 'Certifié Google Partner', 'RGPD Compliant'].map((badge, i) => (
              <div key={i} style={{ flex: mobile ? '0 0 50%' : 1, padding: mobile ? '14px 16px' : '18px 24px', border: '1px solid rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', gap: 10, marginLeft: i > 0 && !mobile ? -1 : 0, boxSizing: 'border-box' }}>
                <div style={{ width: 6, height: 6, background: 'var(--gold)', transform: 'rotate(45deg)', flexShrink: 0 }} />
                <span style={{ fontSize: mobile ? 10.5 : 11.5, fontWeight: 500, color: 'var(--text-mid)', letterSpacing: '0.04em' }}>{badge}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── FINAL CTA ─── */
function CTASection({ setPage, mobile }) {
  const pad = mobile ? '80px 20px' : '120px 56px';
  return (
    <section style={{ background: 'var(--dark)', padding: pad, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(196,160,90,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(196,160,90,0.02) 1px, transparent 1px)', backgroundSize: '80px 80px', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 680, margin: '0 auto', position: 'relative' }}>
        <Reveal>
          <div className="stag" style={{ justifyContent: 'center', color: 'var(--gold)' }}>Démarrer</div>
        </Reveal>
        <Reveal d={1}>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(32px,5vw,64px)', fontWeight: 400, lineHeight: 1.08, color: '#FFFFFF', marginBottom: 20 }}>
            Prêt à transformer votre présence digitale<span style={{ color: 'var(--gold)' }}>?</span>
          </h2>
        </Reveal>
        <Reveal d={2}>
          <p style={{ fontSize: mobile ? 14 : 15, lineHeight: 1.85, color: 'rgba(255,255,255,0.4)', marginBottom: 40 }}>
            Réservez une consultation stratégique de 30 minutes — gratuite et sans engagement. Nous analysons votre situation et identifions vos leviers de croissance.
          </p>
        </Reveal>
        <Reveal d={3} style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', flexDirection: mobile ? 'column' : 'row', alignItems: 'center' }}>
          <button className="btn btn-gold" style={mobile ? { width: '100%', maxWidth: 320, justifyContent: 'center' } : {}} onClick={() => { setPage('contact'); window.scrollTo({ top: 0 }); }}>Réserver ma consultation gratuite</button>
          <button className="btn btn-outline-w" style={mobile ? { width: '100%', maxWidth: 320, justifyContent: 'center' } : {}} onClick={() => { setPage('services'); window.scrollTo({ top: 0 }); }}>Voir nos offres</button>
        </Reveal>
        <Reveal d={4}>
          <p style={{ marginTop: 24, fontSize: 12, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.06em' }}>Sans engagement · Réponse sous 24h · Consultation 100% confidentielle</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── HOME PAGE ─── */
function HomePage({ setPage }) {
  const { mobile, tablet } = useMobile();
  return (
    <div>
      <HeroSection setPage={setPage} mobile={mobile} />
      <TickerSection />
      <StatsSection mobile={mobile} tablet={tablet} />
      <WhySection mobile={mobile} />
      <ServicesSection setPage={setPage} mobile={mobile} tablet={tablet} />
      <AISection setPage={setPage} mobile={mobile} />
      <ProcessSection mobile={mobile} tablet={tablet} />
      <ProofSection mobile={mobile} tablet={tablet} />
      <CTASection setPage={setPage} mobile={mobile} />
    </div>
  );
}

Object.assign(window, { HomePage });
