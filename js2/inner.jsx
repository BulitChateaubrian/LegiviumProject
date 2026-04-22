// js/inner.jsx — Services page + Contact page
const { useState, useEffect, useRef } = React;

/* ═══════════════════════════════════════════
   SERVICES PAGE
═══════════════════════════════════════════ */

const SERVICE_DATA = [
  {
    type: 'web', num: '01',
    title: 'Sites web & Landing pages',
    tagline: 'Des interfaces pensées pour convertir, pas seulement impressionner',
    desc: 'Nous concevons des sites web et landing pages sur-mesure, calibrés pour le secteur juridique. Chaque élément — architecture, copywriting, UX — est optimisé pour transformer vos visiteurs en demandes de consultation.',
    benefits: ['Design premium adapté aux professions réglementées', 'Optimisé pour la conversion et le référencement', 'Prise en charge complète et mises à jour simplifiées'],
    keywords: ['site web avocat', 'site notaire', 'landing page juridique'],
  },
  {
    type: 'seo', num: '02',
    title: 'SEO Juridique',
    tagline: 'Soyez trouvé par les clients qui recherchent exactement votre expertise',
    desc: 'Notre stratégie SEO est construite autour des intentions de recherche réelles de vos futurs clients. Nous ciblons les mots-clés à fort potentiel dans votre spécialité et votre zone géographique, pour une visibilité durable.',
    benefits: ['Audit SEO complet de votre présence actuelle', 'Stratégie de contenu orientée autorité sectorielle', 'Reporting mensuel transparent sur vos positions'],
    keywords: ['SEO avocat', 'référencement cabinet juridique', 'SEO notaire'],
  },
  {
    type: 'ads', num: '03',
    title: 'Google & Meta Ads',
    tagline: 'Acquérez des leads juridiques qualifiés dès le premier jour',
    desc: 'Nos campagnes publicitaires sont conçues avec une connaissance approfondie du secteur juridique — ciblage précis, messages adaptés, pages d\'atterrissage optimisées — pour maximiser votre retour sur investissement.',
    benefits: ['Ciblage par spécialité et zone géographique', 'Optimisation continue basée sur la data réelle', 'Attribution claire des leads et du ROI'],
    keywords: ['publicité avocat', 'Google Ads cabinet droit', 'leads juridiques'],
  },
  {
    type: 'ai', num: '04',
    title: 'Outils IA sur-mesure',
    tagline: 'L\'intelligence artificielle au service de votre cabinet, pas d\'un générique',
    desc: 'Nous développons des outils IA propriétaires qui automatisent les tâches chronophages de votre cabinet — pré-qualification des demandes, assistance à l\'accueil client, FAQ intelligentes — avec intégration fluide dans vos workflows.',
    benefits: ['Gain de temps mesurable sur les tâches répétitives', 'Amélioration de l\'expérience client dès le premier contact', 'Intégration avec vos outils et logiciels existants'],
    keywords: ['IA cabinet avocat', 'automatisation juridique', 'outils IA droit'],
  },
  {
    type: 'content', num: '05',
    title: 'Stratégie de contenu',
    tagline: 'Construisez votre autorité digitale sur le long terme',
    desc: 'Un blog juridique bien positionné est l\'un des meilleurs leviers d\'acquisition organique. Nous créons une stratégie de contenu complète qui vous positionne comme référence dans votre domaine, tout en alimentant votre SEO.',
    benefits: ['Calendrier éditorial aligné sur les intentions de recherche', 'Contenus rédigés par des rédacteurs spécialisés droit', 'Maillage interne optimisé pour maximiser votre référencement'],
    keywords: ['blog juridique', 'contenu avocat', 'autorité SEO droit'],
  },
  {
    type: 'brand', num: '06',
    title: 'Identité digitale',
    tagline: 'Une présence en ligne qui inspire confiance au premier regard',
    desc: 'Votre image de marque digitale est votre première impression. Nous créons une identité visuelle cohérente — logotype, charte graphique, supports digitaux — qui reflète l\'excellence de votre expertise et vous distingue.',
    benefits: ['Identité visuelle premium pour professions réglementées', 'Cohérence sur tous vos canaux et supports digitaux', 'Positionnement distinctif dans votre marché local'],
    keywords: ['identité visuelle avocat', 'branding cabinet droit', 'logo notaire'],
  },
];

function ServicesHero({ setPage }) {
  const [on, setOn] = useState(false);
  useEffect(() => { const t = setTimeout(() => setOn(true), 80); return () => clearTimeout(t); }, []);
  const tr = (d) => ({ opacity: on ? 1 : 0, transform: on ? 'none' : 'translateY(20px)', transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${d}s` });

  return (
    <section data-screen-label="Services Hero" style={{ background: 'var(--dark)', padding: '180px 56px 100px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(196,160,90,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(196,160,90,0.025) 1px, transparent 1px)', backgroundSize: '80px 80px', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 1160, margin: '0 auto', position: 'relative' }}>
        <div style={{ ...tr(0.2), marginBottom: 20 }}>
          <div className="stag" style={{ color: 'var(--gold)' }}>Nos services</div>
        </div>
        <h1 style={{ ...tr(0.38), fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(44px,6vw,76px)', fontWeight: 300, color: '#FFF', lineHeight: 1.06, marginBottom: 24, maxWidth: 700 }}>
          Expertise digitale complète pour les professions du droit
        </h1>
        <p style={{ ...tr(0.55), fontSize: 16, lineHeight: 1.85, color: 'rgba(255,255,255,0.42)', maxWidth: 520, marginBottom: 44 }}>
          Six domaines d'expertise, une seule spécialisation : les professionnels juridiques réglementés. Chaque service est pensé pour votre réalité métier.
        </p>
        <div style={{ ...tr(0.7), display: 'flex', gap: 14 }}>
          <button className="btn btn-gold" onClick={() => { setPage('contact'); window.scrollTo({ top: 0 }); }}>Prendre rendez-vous</button>
          <button className="btn btn-outline-w">Télécharger notre catalogue</button>
        </div>
      </div>
    </section>
  );
}

function ServiceBlock({ svc, idx, setPage }) {
  const isEven = idx % 2 === 0;
  return (
    <section data-screen-label={`Service ${svc.num}`} style={{ padding: '96px 56px', background: isEven ? 'var(--bg)' : 'var(--bg-alt)' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', display: 'grid', gridTemplateColumns: isEven ? '1fr 1fr' : '1fr 1fr', gap: 80, alignItems: 'center', direction: isEven ? 'ltr' : 'rtl' }}>
        {/* Text */}
        <div style={{ direction: 'ltr' }}>
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 12, color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.12em' }}>{svc.num}</span>
              <div style={{ width: 24, height: 1, background: 'var(--gold)' }} />
              <span style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)' }}>Service</span>
            </div>
          </Reveal>
          <Reveal d={1}>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(30px,3vw,42px)', fontWeight: 400, lineHeight: 1.12, color: 'var(--dark)', marginBottom: 12 }}>{svc.title}</h2>
          </Reveal>
          <Reveal d={2}>
            <p style={{ fontSize: 14, fontStyle: 'italic', color: 'var(--gold-dark)', marginBottom: 20, fontFamily: "'Cormorant Garamond',serif", lineHeight: 1.5 }}>{svc.tagline}</p>
            <p style={{ fontSize: 14.5, lineHeight: 1.85, color: 'var(--text-mid)', marginBottom: 32 }}>{svc.desc}</p>
          </Reveal>
          <Reveal d={3}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 36 }}>
              {svc.benefits.map((b, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <div style={{ width: 16, height: 16, border: '1px solid var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                    <div style={{ width: 5, height: 5, background: 'var(--gold)', transform: 'rotate(45deg)' }} />
                  </div>
                  <span style={{ fontSize: 13.5, color: 'var(--text)', lineHeight: 1.6 }}>{b}</span>
                </div>
              ))}
            </div>
            <button className="btn btn-gold" onClick={() => { setPage('contact'); window.scrollTo({ top: 0 }); }}>Demander un devis</button>
          </Reveal>
        </div>
        {/* Visual */}
        <div style={{ direction: 'ltr' }}>
          <Reveal d={2}>
            <div style={{ background: 'var(--dark-mid)', aspectRatio: '4/3', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, border: '1px solid rgba(196,160,90,0.1)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(196,160,90,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(196,160,90,0.02) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
              <div style={{ color: 'rgba(196,160,90,0.25)', position: 'relative' }}>
                <ServiceIcon type={svc.type} />
              </div>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 72, fontWeight: 200, color: 'rgba(196,160,90,0.08)', lineHeight: 1, position: 'absolute', bottom: 16, right: 24, userSelect: 'none' }}>{svc.num}</div>
              <div style={{ position: 'relative', textAlign: 'center' }}>
                <div style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginBottom: 8 }}>Mots-clés ciblés</div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
                  {svc.keywords.map(k => (
                    <span key={k} style={{ fontSize: 10.5, padding: '5px 12px', border: '1px solid rgba(196,160,90,0.2)', color: 'rgba(196,160,90,0.6)', letterSpacing: '0.06em', borderRadius: '1px' }}>{k}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ServicesPage({ setPage }) {
  return (
    <div>
      <ServicesHero setPage={setPage} />
      {SERVICE_DATA.map((svc, i) => <ServiceBlock key={svc.type} svc={svc} idx={i} setPage={setPage} />)}
      {/* Services CTA */}
      <section style={{ background: 'var(--dark)', padding: '100px 56px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <Reveal><STag style={{ justifyContent: 'center' }}>Étape suivante</STag></Reveal>
          <Reveal d={1}><h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(34px,4vw,52px)', fontWeight: 400, lineHeight: 1.1, color: '#FFF', marginBottom: 18 }}>Quel service correspond à votre besoin ?</h2></Reveal>
          <Reveal d={2}><p style={{ fontSize: 15, lineHeight: 1.85, color: 'rgba(255,255,255,0.38)', marginBottom: 40 }}>Lors de votre consultation gratuite, nous identifions ensemble les leviers prioritaires pour votre structure.</p></Reveal>
          <Reveal d={3} style={{ display: 'flex', gap: 14, justifyContent: 'center' }}>
            <button className="btn btn-gold" onClick={() => { setPage('contact'); window.scrollTo({ top: 0 }); }}>Consultation gratuite</button>
            <button className="btn btn-outline-w">Télécharger notre brochure</button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

/* ═══════════════════════════════════════════
   CONTACT PAGE
═══════════════════════════════════════════ */

const STEP_LABELS = ['Votre profil', 'Votre projet', 'Coordonnées'];

function ContactPage() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    profession: '', size: '',
    services: [], budget: '', timing: '',
    name: '', email: '', phone: '', message: '',
  });
  const [on, setOn] = useState(false);
  useEffect(() => { const t = setTimeout(() => setOn(true), 80); return () => clearTimeout(t); }, []);

  const tr = (d) => ({ opacity: on ? 1 : 0, transform: on ? 'none' : 'translateY(20px)', transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${d}s` });
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const toggleService = (s) => setForm(f => ({ ...f, services: f.services.includes(s) ? f.services.filter(x => x !== s) : [...f.services, s] }));

  const professions = ['Avocat(e)', 'Notaire', 'Huissier de justice', 'Cabinet d\'avocats', 'Étude notariale', 'Consultant juridique', 'Legaltech', 'Autre'];
  const sizes = ['Indépendant', '2–5 personnes', '6–20 personnes', '20+ personnes'];
  const serviceOpts = ['Site web', 'Landing page', 'SEO', 'Google Ads', 'Meta Ads', 'Outil IA', 'Contenu', 'Identité digitale'];
  const budgets = ['< 2 000 €', '2 000–5 000 €', '5 000–15 000 €', '15 000€+', 'À définir'];
  const timings = ['Dès que possible', 'Dans 1–3 mois', 'Dans 3–6 mois', 'Pas de délai précis'];

  const canNext = () => {
    if (step === 0) return form.profession && form.size;
    if (step === 1) return form.services.length > 0 && form.budget && form.timing;
    return form.name && form.email;
  };

  const SelectChip = ({ options, field, multi }) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {options.map(opt => {
        const active = multi ? form[field].includes(opt) : form[field] === opt;
        return (
          <button key={opt} onClick={() => multi ? toggleService(opt) : set(field, opt)} style={{
            padding: '9px 16px', fontSize: 12.5, fontWeight: active ? 600 : 400,
            border: `1px solid ${active ? 'var(--gold)' : 'rgba(0,0,0,0.1)'}`,
            background: active ? 'var(--gold-bg)' : 'var(--white)',
            color: active ? 'var(--gold-dark)' : 'var(--text-mid)',
            cursor: 'pointer', transition: 'all 0.2s', borderRadius: '1px', fontFamily: "'DM Sans',sans-serif",
          }}>{opt}</button>
        );
      })}
    </div>
  );

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero */}
      <section data-screen-label="Contact Hero" style={{ background: 'var(--dark)', padding: '180px 56px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(196,160,90,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(196,160,90,0.025) 1px,transparent 1px)', backgroundSize: '80px 80px', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1160, margin: '0 auto', position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <div style={{ ...tr(0.2) }}><div className="stag" style={{ color: 'var(--gold)' }}>Contact</div></div>
            <h1 style={{ ...tr(0.38), fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(38px,5vw,64px)', fontWeight: 300, color: '#FFF', lineHeight: 1.08, marginBottom: 20 }}>
              Parlons de votre projet
            </h1>
            <p style={{ ...tr(0.55), fontSize: 15.5, lineHeight: 1.85, color: 'rgba(255,255,255,0.42)', marginBottom: 40 }}>
              Consultation stratégique de 30 minutes, gratuite et sans engagement. Nous analysons votre situation et proposons un plan d'action concret.
            </p>
            <div style={{ ...tr(0.7), display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[['✦', 'Réponse sous 24 heures ouvrées'], ['✦', 'Consultation 100% confidentielle'], ['✦', 'Aucun engagement requis']].map(([icon, text]) => (
                <div key={text} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <span style={{ color: 'var(--gold)', fontSize: 9 }}>{icon}</span>
                  <span style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.45)' }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Contact info */}
          <div style={{ ...tr(0.5) }}>
            <div style={{ border: '1px solid rgba(196,160,90,0.12)', padding: '36px 32px' }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 24 }}>Coordonnées directes</div>
              {[
                { label: 'Email', value: 'hello@legivium.fr' },
                { label: 'Téléphone', value: '+33 1 85 00 00 00' },
                { label: 'Horaires', value: 'Lun–Ven, 9h–18h' },
              ].map(item => (
                <div key={item.label} style={{ marginBottom: 20, paddingBottom: 20, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontSize: 10.5, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginBottom: 6 }}>{item.label}</div>
                  <div style={{ fontSize: 14.5, color: 'rgba(255,255,255,0.7)', fontWeight: 400 }}>{item.value}</div>
                </div>
              ))}
              <div style={{ paddingTop: 4 }}>
                <div style={{ fontSize: 10.5, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginBottom: 10 }}>Nous suivre</div>
                <div style={{ display: 'flex', gap: 10 }}>
                  {['LN','TW'].map(s => (
                    <div key={s} style={{ padding: '8px 16px', border: '1px solid rgba(255,255,255,0.08)', fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.3)', cursor: 'pointer', transition: 'all 0.2s' }}>{s}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-step form */}
      <section data-screen-label="Contact Form" style={{ padding: '80px 56px 120px', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          {!done ? (
            <>
              {/* Progress */}
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 56, gap: 0 }}>
                {STEP_LABELS.map((label, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', flex: i < STEP_LABELS.length - 1 ? 1 : 'none' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                      <div style={{
                        width: 36, height: 36, border: `1px solid ${i <= step ? 'var(--gold)' : 'rgba(0,0,0,0.1)'}`,
                        background: i < step ? 'var(--gold)' : 'transparent',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 12, fontWeight: 600, transition: 'all 0.3s',
                        color: i < step ? 'var(--dark)' : i === step ? 'var(--gold)' : 'var(--text-light)',
                      }}>
                        {i < step ? '✓' : i + 1}
                      </div>
                      <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.06em', color: i === step ? 'var(--text)' : 'var(--text-light)', whiteSpace: 'nowrap' }}>{label}</div>
                    </div>
                    {i < STEP_LABELS.length - 1 && <div style={{ flex: 1, height: 1, background: i < step ? 'var(--gold)' : 'rgba(0,0,0,0.08)', margin: '0 12px', marginBottom: 24, transition: 'background 0.3s' }} />}
                  </div>
                ))}
              </div>

              {/* Step content */}
              <div style={{ background: 'var(--white)', padding: '48px 44px', border: '1px solid rgba(0,0,0,0.06)' }}>
                {step === 0 && (
                  <div>
                    <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 28, fontWeight: 400, marginBottom: 8, color: 'var(--dark)' }}>Votre profil professionnel</h3>
                    <p style={{ fontSize: 14, color: 'var(--text-mid)', marginBottom: 36, lineHeight: 1.7 }}>Afin de vous proposer les meilleures solutions, aidez-nous à comprendre votre structure.</p>
                    <div style={{ marginBottom: 32 }}>
                      <label className="flabel">Quelle est votre profession ?</label>
                      <SelectChip options={professions} field="profession" />
                    </div>
                    <div>
                      <label className="flabel">Taille de votre structure</label>
                      <SelectChip options={sizes} field="size" />
                    </div>
                  </div>
                )}
                {step === 1 && (
                  <div>
                    <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 28, fontWeight: 400, marginBottom: 8, color: 'var(--dark)' }}>Votre projet digital</h3>
                    <p style={{ fontSize: 14, color: 'var(--text-mid)', marginBottom: 36, lineHeight: 1.7 }}>Quels services vous intéressent ? Plusieurs choix possibles.</p>
                    <div style={{ marginBottom: 32 }}>
                      <label className="flabel">Services souhaités</label>
                      <SelectChip options={serviceOpts} field="services" multi />
                    </div>
                    <div style={{ marginBottom: 32 }}>
                      <label className="flabel">Budget envisagé</label>
                      <SelectChip options={budgets} field="budget" />
                    </div>
                    <div>
                      <label className="flabel">Délai souhaité</label>
                      <SelectChip options={timings} field="timing" />
                    </div>
                  </div>
                )}
                {step === 2 && (
                  <div>
                    <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 28, fontWeight: 400, marginBottom: 8, color: 'var(--dark)' }}>Vos coordonnées</h3>
                    <p style={{ fontSize: 14, color: 'var(--text-mid)', marginBottom: 36, lineHeight: 1.7 }}>Dernière étape — nous vous contacterons sous 24h pour planifier votre consultation.</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
                      <div>
                        <label className="flabel">Nom complet *</label>
                        <input className="finput" placeholder="Maître Jean Dupont" value={form.name} onChange={e => set('name', e.target.value)} />
                      </div>
                      <div>
                        <label className="flabel">Email professionnel *</label>
                        <input className="finput" type="email" placeholder="contact@cabinet-dupont.fr" value={form.email} onChange={e => set('email', e.target.value)} />
                      </div>
                    </div>
                    <div style={{ marginBottom: 20 }}>
                      <label className="flabel">Téléphone</label>
                      <input className="finput" placeholder="+33 6 00 00 00 00" value={form.phone} onChange={e => set('phone', e.target.value)} />
                    </div>
                    <div>
                      <label className="flabel">Message (optionnel)</label>
                      <textarea className="finput" style={{ resize: 'vertical', minHeight: 100 }} placeholder="Décrivez brièvement votre situation ou vos objectifs..." value={form.message} onChange={e => set('message', e.target.value)} />
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 40, paddingTop: 32, borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                  {step > 0 ? (
                    <button className="btn btn-outline" style={{ padding: '11px 28px' }} onClick={() => setStep(s => s - 1)}>← Retour</button>
                  ) : <div />}
                  <button
                    className="btn btn-gold"
                    disabled={!canNext()}
                    style={{ opacity: canNext() ? 1 : 0.4, cursor: canNext() ? 'pointer' : 'not-allowed' }}
                    onClick={() => { if (step < 2) setStep(s => s + 1); else setDone(true); }}
                  >
                    {step < 2 ? 'Continuer →' : 'Envoyer ma demande'}
                  </button>
                </div>
              </div>
            </>
          ) : (
            /* Success */
            <div style={{ background: 'var(--white)', padding: '72px 44px', border: '1px solid rgba(0,0,0,0.06)', textAlign: 'center' }}>
              <div style={{ width: 64, height: 64, border: '1px solid var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px', fontSize: 24 }}>✦</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 36, fontWeight: 400, marginBottom: 14, color: 'var(--dark)' }}>Demande envoyée avec succès</h3>
              <p style={{ fontSize: 15, lineHeight: 1.85, color: 'var(--text-mid)', maxWidth: 440, margin: '0 auto 36px' }}>
                Merci {form.name ? form.name.split(' ')[0] : ''} ! Notre équipe vous contactera sous 24 heures ouvrées pour planifier votre consultation stratégique.
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <div style={{ padding: '12px 20px', background: 'var(--gold-bg)', border: '1px solid var(--gold-light)', fontSize: 13, color: 'var(--gold-dark)' }}>📋 Récapitulatif envoyé par email</div>
                <div style={{ padding: '12px 20px', background: 'var(--gold-bg)', border: '1px solid var(--gold-light)', fontSize: 13, color: 'var(--gold-dark)' }}>📞 Appel sous 24h ouvrées</div>
              </div>
              <button className="btn btn-outline" style={{ marginTop: 36 }} onClick={() => { setDone(false); setStep(0); setForm({ profession:'',size:'',services:[],budget:'',timing:'',name:'',email:'',phone:'',message:'' }); }}>
                Nouvelle demande
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { ServicesPage, ContactPage });
